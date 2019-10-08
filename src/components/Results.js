import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const API = `${process.env.REACT_APP_API_URI}/${process.env.REACT_APP_API_VERSION}`;

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
                {data.map(result => (
                  <tr key={result._id}>
                    <th scope="row">
                      <a href={`/test/${result._id}`}>{result.patientName}</a>
                    </th>
                    <td>{new Date(result.testDate).toLocaleDateString()}</td>
                    <td>
                      {parseFloat(result.testDistance / result.completionTime).toFixed(2)} m/s
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
