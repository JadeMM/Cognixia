import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//renders list of todo items
function ListHolder(props) {
    return (
        <ListGroup>
            {props.list.map( (item) => {
                return (
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                {item}
                            </Col>
                            <Col>
                                <Button type='button' onClick={() => props.handleDelete(item)}>x</Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )
}

export default ListHolder;