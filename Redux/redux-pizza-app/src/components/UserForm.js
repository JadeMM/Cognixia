import React from 'react';
import {connect} from 'react-redux';
import { updateUser } from '../actions'
import {getData } from '../selectors';

class UserForm extends React.Component {
    handleChange = (e) => {
        this.props.updateUser(e.target.id, e.target.value);
    }

    render() {
        const {name, email, address, city, state, zip, phone} = this.props.data.user;
        return(
            <div>
                <h3>Customer Information</h3>
                <form>
                    <h4 className='userHeader'>Please Enter Your Information</h4>
                    <div className='userFields'>
                        <label>Name </label><br/>
                        <input type='text' id='name' value={name} onChange={this.handleChange}/><br/>
                        <label>Email Address </label><br/>
                        <input type='text' id='email' value={email} required onChange={this.handleChange}/><br/>
                        <label>Street Address </label><br/>
                        <input type='text' id='address' value={address} onChange={this.handleChange}/><br/>
                        <label>City </label><br/>
                        <input type='text' id='city' value={city} onChange={this.handleChange}/><br/>
                        <label>State </label><br/>
                        <input type='text' id='state' value={state} onChange={this.handleChange}/><br/>
                        <label>Zip Code </label><br/>
                        <input type='text' id='zip' value={zip} onChange={this.handleChange}/><br/>
                        <label>Phone Number </label><br/>
                        <input type='text' id='phone' placeholder="i.e. (555) 555-5555" value={phone} onChange={this.handleChange}/><br/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (inputId, value) => {
            dispatch(updateUser(inputId, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);