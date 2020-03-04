import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FormFill from './components/form';
import ListFill from './components/list';
import { addTodo, deleteTodo } from './redux/actions'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: ''
    }
  }

  handleChange = (e) => {
    this.setState({currentTodo: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.currentTodo);
    this.setState({currentTodo: ''});
  }

  handleDelete = (item) => {
    console.log('delete');
    return this.props.deleteTodo(item);
  }

  render() {
    return (
        <Container>
          <Row>
            <Col>
              <FormFill value={this.state.currentTodo} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListFill list={this.props.todos} handleDelete={this.handleDelete}/>
            </Col>
          </Row>
        </Container>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (todo) => {
      dispatch(addTodo(todo))
    },
    deleteTodo: (item) => {
      dispatch(deleteTodo(item))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
