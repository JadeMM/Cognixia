import React from 'react';
import './App.css';
import { NameContext } from './contexts/nameContext';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      name: 'Hank',
      updateName: this.updateName
    }
  }

  updateName = (newName) => {
    this.setState({name: newName});
  }

  render() {
    return (
      <NameContext.Provider 
        value={this.state}
      >
        <div>
          <UserDisplay/>
          <ChangeUser/>
        </div>
      </NameContext.Provider>
    );
  }
}

class UserDisplay extends React.Component {
  static contextType = NameContext;
  render() {
    return <div>{this.context.name}</div>
  }
}

class ChangeUser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }
  static contextType = NameContext;

  handleChange = (e) => {
    this.setState({name: e.target.value});

  }

  handleClick = (e) => {
    e.preventDefault();
    this.context.updateName(this.state.name);
    this.setState({name: ''});

  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={this.handleChange}/>
        <button type='submit' onClick={this.handleClick}>Update</button>
      </div>
    )
  }
}

export default App;
