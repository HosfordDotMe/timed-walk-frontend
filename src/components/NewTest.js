/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';

class Wizard extends React.Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues,
    };
  }

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
    }));

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values, bag);
    }
    bag.setTouched({});
    bag.setSubmitting(false);
    this.next(values);
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <button
                  type="button"
                  className="btn btn-secondary btn-lg float-left"
                  onClick={this.previous}
                >
                  « Previous
                </button>
              )}

              {!isLastPage && (
                <button
                  type="submit"
                  className="btn btn-primary btn-lg float-right"
                >
                  Next »
                </button>
              )}
              {isLastPage && (
                <button
                  type="submit"
                  className="btn btn-success btn-lg float-right"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      />
    );
  }
}

const NewTest = () => (
  <div className="App container justify-content-center">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <Wizard
          initialValues={{
            patientName: '',
            patientHeight: '',
            patientWeight: '',
            patientDOB: '',
            patientNotes: '',

            testDate: new Date().toISOString().substr(0, 10),
            testDistance: 10,
            testNotes: '',

            completionTime: '',
            completionNotes: '',
          }}
          onSubmit={(values, actions) => {
            const formBody = Object.keys(values)
              .map(
                key =>
                  `${encodeURIComponent(key)}=${encodeURIComponent(
                    values[key]
                  )}`
              )
              .join('&');

            fetch('/api/v1/test/create', {
              method: 'post',
              headers: {
                'Content-Type':
                  'application/x-www-form-urlencoded;charset=UTF-8',
              },
              body: formBody,
            })
              .then(res => {
                if (!res.ok) {
                  throw Error(res.statusText);
                }
                return res;
              })
              .then(data => {
                window.location = data.headers.get('Location');
              });
            actions.setSubmitting(false);
          }}
        >
          <Wizard.Page
            validate={values => {
              const errors = {};
              if (!values.patientName) {
                errors.patientName = 'A valid patient name is required';
              }
              return errors;
            }}
          >
            <h1 className="text-center">Patient Information</h1>
            <p className="text-center">
              Please enter patient information before moving to the next step
            </p>
            <div className="form-group">
              <label htmlFor="patientName">
                Name<sup>*</sup>
              </label>
              <Field
                type="text"
                className="form-control"
                name="patientName"
                placeholder="First Last"
              />
              <ErrorMessage
                name="patientName"
                component="div"
                className="field-error"
              />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="patientHeight">Height</label>
                  <div className="input-group">
                    <Field
                      type="number"
                      className="form-control"
                      name="patientHeight"
                      placeholder="Height"
                    />
                    <ErrorMessage
                      name="patientHeight"
                      component="div"
                      className="field-error"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">centimeters</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="patientWeight">Weight</label>
                  <div className="input-group">
                    <Field
                      type="number"
                      className="form-control"
                      name="patientWeight"
                      placeholder="Weight"
                    />
                    <ErrorMessage
                      name="patientWeight"
                      component="div"
                      className="field-error"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">kilograms</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="patientDOB">Date of Birth</label>
                  <Field
                    type="date"
                    className="form-control"
                    name="patientDOB"
                    placeholder="Enter Patient Weight"
                  />
                  <ErrorMessage
                    name="patientDOB"
                    component="div"
                    className="field-error"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="patientNotes">Additional Patient Notes</label>
                  <Field
                    type="text"
                    component="textarea"
                    rows="6"
                    className="form-control"
                    name="patientNotes"
                  />
                  <ErrorMessage
                    name="patientNotes"
                    component="div"
                    className="field-error"
                  />
                </div>
              </div>
            </div>
          </Wizard.Page>
          <Wizard.Page
            validate={values => {
              const errors = {};
              if (!values.testDate) {
                errors.testDate = 'A valid test date is required';
              }
              if (!values.testDistance) {
                errors.testDistance = 'A valid test distance is required';
              }
              return errors;
            }}
          >
            <h1 className="text-center">Test Information</h1>
            <p className="text-center">
              Please enter test information before moving to the next step
            </p>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="testDate">
                    Date<sup>*</sup>
                  </label>
                  <Field type="Date" className="form-control" name="testDate" />
                  <ErrorMessage
                    name="testDate"
                    component="div"
                    className="field-error"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="testDistance">
                    Timed Distance<sup>*</sup>
                  </label>
                  <div className="input-group">
                    <Field
                      type="number"
                      className="form-control"
                      name="testDistance"
                      placeholder="Distance"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">meters</span>
                    </div>
                    <ErrorMessage
                      name="testDistance"
                      component="div"
                      className="field-error"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="testNotes">Additional Test Notes</label>
                  <Field
                    type="text"
                    component="textarea"
                    rows="6"
                    className="form-control"
                    name="testNotes"
                  />
                  <ErrorMessage
                    name="testNotes"
                    component="div"
                    className="field-error"
                  />
                </div>
              </div>
            </div>
          </Wizard.Page>
          <Wizard.Page
            validate={values => {
              const errors = {};
              if (!values.completionTime) {
                errors.completionTime = 'A valid elapsed time is required';
              }
              return errors;
            }}
          >
            <h1 className="text-center">Perform Test</h1>
            <p className="text-center">
              Please perform the timed walk test and record the results
            </p>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="completionTime">
                    Elapsed Time<sup>*</sup>
                  </label>
                  <div className="input-group">
                    <Field
                      type="number"
                      className="form-control"
                      name="completionTime"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">seconds</span>
                    </div>
                  </div>
                  <ErrorMessage
                    name="completionTime"
                    component="div"
                    className="field-error"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="completionNotes">
                  Additional Completion Notes
                </label>
                <div className="form-group">
                  <Field
                    type="text"
                    component="textarea"
                    rows="6"
                    className="form-control"
                    name="completionNotes"
                  />
                  <ErrorMessage
                    name="completionNotes"
                    component="div"
                    className="field-error"
                  />
                </div>
              </div>
            </div>
          </Wizard.Page>
        </Wizard>
      </div>
    </div>
  </div>
);

export default NewTest;
