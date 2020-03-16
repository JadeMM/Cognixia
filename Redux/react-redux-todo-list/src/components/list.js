import React from 'react';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListFill(props){
    return (
        <ListGroup style={{padding: '10px'}}>
            {props.list.map( (item) => {
              return (
                <ListGroup.Item key={item + ' item'}>
                  <Row>
                    <Col>
                      {item}
                    </Col>
                    <Button type='button' onClick={() => props.handleDelete(item)}>x</Button>
                  </Row>
                </ListGroup.Item>
              )
            })}
        </ListGroup>
    )
}

export default ListFill;