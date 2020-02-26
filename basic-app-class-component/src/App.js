import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormFill from './components/form';//'react-bootstrap/Form'//
import ListFill from './components/list';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: ['test']
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState( state => {
      const list = state.list.concat(state.value);

      return {
        list, 
        value: ''
      }
    })
  }

  handleDelete = (item) => {
    
    let arr = [...this.state.list];
    const index = arr.indexOf(item);
    if(index !== -1) {
      arr.splice(index,1);
      this.setState({list: arr});
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          <FormFill value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <ListFill list={this.state.list} handleDelete={this.handleDelete}/>
        </Container>
      </div>
    );
  }
}

export default App;
