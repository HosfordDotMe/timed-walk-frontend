import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

const API = `${process.env.REACT_APP_API_URI}/${process.env.REACT_APP_API_VERSION}`;
console.log(API);

function TestRow({ testResult }) {
  return (
    <tr>
      <th scope="row">
        <a href={`/test/${testResult._id}`}>{testResult.patientName}</a>
      </th>
      <td>{new Date(testResult.testDate).toLocaleDateString()}</td>
      <td>{parseFloat(testResult.testDistance / testResult.completionTime).toFixed(2)} m/s</td>
    </tr>
  );
}

TestRow.propTypes = {
  testResult: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    patientName: PropTypes.string.isRequired,
    testDate: PropTypes.string.isRequired,
    testDistance: PropTypes.number.isRequired,
    completionTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default class ResultsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch(`${API}/tests`)
      .then(response => response.json())
      .then(data => this.setState({ data, isLoading: false }));
  }

  render() {
    const { data, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }

    return (
      <div className="App container justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <table className="table table-striped border">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Speed</th>
                </tr>
              </thead>
              <tbody>
                {data.map(testResult => (
                  <TestRow key={testResult._id} testResult={testResult} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
