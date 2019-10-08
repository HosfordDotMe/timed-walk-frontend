/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const API = `${process.env.REACT_APP_API_URI}/${process.env.REACT_APP_API_VERSION}`;

export default class SingleTestView extends Component {
  constructor(props) {
    const { match } = props;
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      id: match.params.id,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    fetch(`${API}/test/${id}`)
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
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Timed 10 Meter Walk Test</div>
              <div className="card-body">
                <pre>
                  Patient Name: {data.patientName}
                  <br />
                  {data.patientDOB &&
                    `Patient DOB: ${new Date(data.patientDOB).toLocaleDateString()}`}
                  {/* TODO: This is odd but using interpolation shows
                  'object' text */}
                  {data.patientDOB && <br />}
                  {data.patientHeight && `Patient Height: ${data.patientHeight} cm`}
                  {data.patientHeight && <br />}
                  {data.patientWeight && `Patient Weight: ${data.patientWeight} kg`}
                  {data.patientWeight && <br />}
                  {data.patientNotes && `Patient Notes: ${data.patientNotes}`}
                  {data.patientNotes && <br />}
                  <hr />
                  {data.testDate && `Test Date: ${new Date(data.testDate).toLocaleDateString()}`}
                  {data.testDate && <br />}
                  {data.testDistance && `Test Distance: ${data.testDistance} m`}
                  {data.testDistance && <br />}
                  {data.testNotes && `Test Notes: ${data.testNotes}`}
                  {data.testNotes && <br />}
                  <hr />
                  {data.completionTime && `Elapsed Time: ${data.completionTime} seconds`}
                  {data.completionTime && <br />}
                  {data.completionTime &&
                    data.testDistance &&
                    `Speed: ${parseFloat(data.testDistance / data.completionTime).toFixed(2)} m/s`}
                  {data.completionTime && data.testDistance && <br />}
                  {data.completionNotes && `Post-Test Notes: ${data.completionNotes}`}
                  {data.completionNotes && <br />}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
