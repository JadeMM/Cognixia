import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FormFill from './components/form';
import ListFill from './components/list';

class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: []
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let arr = [...this.state.list];
    arr.push(this.state.value);
    this.setState({list: arr});
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
        <Container>
          <Row>
            <Col>
              <FormFill value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListFill list={this.state.list} handleDelete={this.handleDelete}/>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default FormSection;
