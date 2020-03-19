import React from 'react';
import {connect} from 'react-redux';
import { getData } from '../selectors';

class ReviewOrder extends React.Component {

    //get all the data from the store and displays it
    render() {
        const data = this.props.data;
        return (
            <div className='pageHolder'>
                <h3>Review Order</h3>
                <form>
                    <h4>Order </h4>
                    <div className='userFields'>
                        <p className='reviewText'><b>Pizza Type</b> {data.pizza.dough}</p>
                        <p className='reviewText'><b>Sauce Level</b> {data.pizza.sauce}</p>
                        <p className='reviewText'><b>Toppings</b> </p>
                        <ul className='ingList'>
                        {data.pizza.toppings.map(item => {
                            return <li>{item}</li>
                        })} 
                        </ul>
                    </div>

                    <h4>Customer Information</h4>
                    <div className='userFields'>
                        <p className='reviewText'><b>Name</b> {data.user.name}</p>
                        <p className='reviewText'><b>Email</b> {data.user.email}</p>
                        <p className='reviewText'><b>Phone</b> {data.user.phone}</p>
                        <p className='reviewText'><b>Address</b></p>
                        <ul className='ingList'>
                            <li><p className='reviewText'>&nbsp;{data.user.address}</p></li>
                            <li><p className='reviewText'>&nbsp;{data.user.city} {data.user.state !== '' ? ',' : ''} {data.user.state} {data.user.zip}</p></li>
                        </ul>
                        
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        data: getData(state)
    }
}

export default connect(mapStateToProps)(ReviewOrder);