import React from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import './App.css'

import Home from './components/Home';
import PizzaBase from './components/PizzaBase';
import PizzaToppings from './components/PizzaToppings';
import ReviewOrder from './components/ReviewOrder';
import UserForm from './components/UserForm';

//Router to navigate between pages
export default class App extends React.Component {

    render() {
      return (
        <Router>
          <div className='outerDiv'>
            <nav>
              <ul>
                <li className='navli'>
                  <Link to="/"><button>Home</button></Link>
                </li>
                <li className='navli'>
                  <Link to="/base"><button>Pizza Base</button></Link>
                </li>
                <li className='navli'>
                  <Link to="/toppings"><button>Pizza Toppings</button></Link>
                </li>
                <li className='navli'>
                  <Link to="/customer"><button>Customer Info</button></Link>
                </li>
                <li className='navli'>
                  <Link to="/review"><button>Review Order</button></Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/customer">
                <UserForm />
              </Route>
              <Route path="/review">
                <ReviewOrder />
              </Route>
              <Route path="/toppings">
                <PizzaToppings />
              </Route>
              <Route path="/base">
                <PizzaBase />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  
}