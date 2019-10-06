import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import TestWizard from './components/TestWizard';

function Home() {
  return <h2>Home</h2>;
}

function Results() {
  return <h2>Results</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">
            <FontAwesomeIcon icon={faWalking} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className="nav-item nav-link"
                to="/new-test"
                activeClassName="active"
              >
                Perform a Test
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                to="/results"
                activeClassName="active"
              >
                View Previous Results
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                to="/settings"
                activeClassName="active"
              >
                Settings
              </NavLink>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/new-test">
            <TestWizard />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
