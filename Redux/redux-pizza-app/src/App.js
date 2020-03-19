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
    constructor() {
      super();
      this.state = {
        home: 'active',
        base: 'inactive',
        top: 'inactive',
        info: 'inactive',
        review: 'inactive',
      }
    }

    isActive = (e) => {
      return this.state[e.target.id];
    }

    handleClick = (e) => {
      this.setState({
        home: 'inactive',
        base: 'inactive',
        top: 'inactive',
        info: 'inactive',
        review: 'inactive'
      })

      //handle page change from child screen
      let page = e.target === undefined ? 'base' : e.target.id;

      if(page === 'home') {
        this.setState({home: 'active'})
      } else if(page === 'base') {
        this.setState({base: 'active'})
      } else if(page === 'top') {
        this.setState({top: 'active'})
      } else if(page === 'info') {
        this.setState({info: 'active'})
      } else {
        this.setState({review: 'active'})
      }
    }

    render() {
      return (
        <Router>
          <div className='outerDiv'>
            <nav>
              <ul className='navlst'>
                <li className='navli'>
                  <Link to="/"><button id='home' className={this.state.home} onClick={this.handleClick}>Home</button></Link>
                </li>
                <li className='navli'>
                  <Link to="/base"><button id='base' className={this.state.base} onClick={this.handleClick}>Pizza Base</button></Link>
                </li>
                <li className='navli'>
                  <Link to="/toppings"><button id='top' className={this.state.top} onClick={this.handleClick}>Pizza Toppings</button></Link>
                </li>
                <li className='navli'>
                  <Link to="/customer"><button id='info' className={this.state.info} onClick={this.handleClick}>Customer Info</button></Link>
                </li>
                <li className='navli'>
                  <Link to="/review"><button id='review' className={this.state.review} onClick={this.handleClick}>Review Order</button></Link>
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
                <Home handleClick={this.handleClick}/>
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  
}