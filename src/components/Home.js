import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Instructions() {
  return (
    <>
      <h1 className="text-center d-none d-sm-block">Instructions</h1>
      <p className="text-center d-none d-sm-block">Please select from the following</p>
      <div className="row">
        <div className="col-md-6">
          <Card className="text-center">
            <Card.Header>
              <h3>Perform a Test</h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>Use the three step wizard</Card.Title>
              <Card.Text>The wizard helps facilitate recording a new timed walk test.</Card.Text>
              <LinkContainer to="/new-test">
                <Button variant="primary" size="lg" block>
                  Start
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="text-center">
            <Card.Header>
              <h3>View Previous Results</h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>A table shows previous test results</Card.Title>
              <Card.Text>Previous results are shown in descending order in table format.</Card.Text>
              <LinkContainer to="/results">
                <Button variant="primary" size="lg" block>
                  View
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="App container justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Instructions />
          </div>
        </div>
      </div>
    </>
  );
}
