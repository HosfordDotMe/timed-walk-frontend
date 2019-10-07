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
import NewTest from './components/NewTest';
import SingleTest from './components/SingleTest';
import Results from './components/Results';

function Home() {
  return <h2>Home</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
          <div className="container">
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
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/test/:id" component={SingleTest} />
          <Route path="/new-test" component={NewTest} />
          <Route path="/results" component={Results} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
