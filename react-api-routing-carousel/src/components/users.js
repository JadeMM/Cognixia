import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

import Page from './user-components/pages';

export default class Users extends React.Component {
    render() {
        return (
            <Router>
                <Nav defaultActiveKey='/users/page1'>
                    <Nav.Item>
                        <Nav.Link href='/users/page1'>Page 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/users/page2'>Page 2</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Switch>
                    <Route path='/users/page1'>
                        <Page page={1}/>
                    </Route>
                    <Route path='/users/page2'>
                        <Page page={2}/>
                    </Route>
                </Switch>
            </Router>
            
        )
    }
}

