import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormFill(props){
    return (
        <Form onSubmit={props.handleSubmit}>
              <Form.Group controlId='formBasicTextInput'>
              <Form.Label>To-Do List</Form.Label>
                <Row>
                  <Col>
                    <Form.Control type='text' value={props.value} onChange={props.handleChange}/>
                  </Col>
                    <Button type='submit'>Submit</Button>
                </Row>
              </Form.Group>
        </Form>
    )
}

export default FormFill;