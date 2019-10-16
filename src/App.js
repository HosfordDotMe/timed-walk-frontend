import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import Home from './components/Home';
import NewTest from './components/NewTest';
import SingleTest from './components/SingleTest';
import Results from './components/Results';

export default function App() {
  return (
    <Router>
      <Menu size="huge" borderless stackable inverted color="blue" style={{ marginBottom: '1em' }}>
        <Container>
          <Menu.Item as={Link} to="/" header>
            <FontAwesomeIcon icon={faWalking} style={{ marginRight: '1em' }} /> Timed Walk Test
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/new-test">
            Perform a Test
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/results">
            View Previous Results
          </Menu.Item>
        </Container>
      </Menu>

      <Switch>
        <Route path="/test/:id" component={SingleTest} />
        <Route path="/new-test" component={NewTest} />
        <Route path="/results" component={Results} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
