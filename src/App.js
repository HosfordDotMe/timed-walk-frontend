import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import NewTest from './components/NewTest';
import SingleTest from './components/SingleTest';
import Results from './components/Results';

export default function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-3">
        <div className="container">
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faWalking} /> Timed Walk Test
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link" to="/new-test" activeClassName="active">
                Perform a Test
              </NavLink>
              <NavLink className="nav-link" to="/results" activeClassName="active">
                View Previous Results
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Switch>
        <Route path="/test/:id" component={SingleTest} />
        <Route path="/new-test" component={NewTest} />
        <Route path="/results" component={Results} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
