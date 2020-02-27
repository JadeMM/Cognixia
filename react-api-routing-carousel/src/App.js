import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import Users from './components/users';
import PictureCarousel from './components/carousel';

class App extends React.Component {
    // constructor() {
    //   super();
    //   this.state = {
        
    //   }
    // }

    render() {
      return (
        <Router>
          <Card>
            <Nav defaultActiveKey='/users'>
              <Nav.Item>
                  <Nav.Link href='/users'>Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link href='/carousel'>Picture Carousel</Nav.Link>
              </Nav.Item>
            </Nav>

            <Switch>
              <Route path='/users'>
                <Users />
              </Route>
              <Route path='/carousel'>
                <PictureCarousel />
              </Route>
            </Switch>
          </Card>
        </Router>
      );
    }
}

export default App;
