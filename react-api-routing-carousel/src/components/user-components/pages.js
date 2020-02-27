import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userData: [],
          page: 1
        }
    }

    componentDidMount = () => {
        console.log('here')
        axios.get('https://reqres.in/api/users?page=' + this.props.page)
        .then(res => {
            this.setState({userData: res.data.data});
        })
    }

    render() {
        return (
            <CardGroup>
                {this.state.userData.map( (user) => {
                    return (
                        <Card className="text-center" style={{ width: '200rem' }}>
                            <Card.Header> {user.first_name} {user.last_name}</Card.Header>
                            <Card.Body>
                                <Card.Img alt="profile" src={user.avatar}/>
                                <Card.Text>{user.email}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </CardGroup>
        )
    }
}