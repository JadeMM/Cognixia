import React from 'react';
import {connect} from 'react-redux';
import { updateBase } from '../actions'
import { getData } from '../selectors';
import './css/PizzaBase.css'

class PizzaBase extends React.Component {

    //handles form field changes
    handleChange = (e) => {
        this.props.update(e.target.name, e.target.value);
    }
    
    //Render pizza base form, two sets of radio buttons
    render() {
        const {sauce, dough} = this.props.data.pizza;
        return (
            <div className='pageHolder'>
                <h3>Pizza Base</h3>
                <form>
                    <h4>How much sauce? </h4>
                    <div className='ingHolder'>
                        <input type="radio" id="little" name="sauce" value="Less" checked={'Less' === sauce} onChange={this.handleChange}/>
                        <label>Less sauce</label><br/>
                        <input type="radio" id="normal" name="sauce" value="Normal" checked={'Normal' === sauce} onChange={this.handleChange}/>
                        <label>Normal amount of sauce</label><br/>
                        <input type="radio" id="lot" name="sauce" value="Extra" checked={'Extra' === sauce} onChange={this.handleChange}/>
                        <label>Extra sauce</label><br/>
                    </div>

                    <h4>What type of crust? </h4>
                    <div className='ingHolder'>
                        <input type="radio" id="classic" name="dough" value="Classic" checked={'Classic' === dough} onChange={this.handleChange}/>
                        <label>Classic</label><br/>
                        <input type="radio" id="thin" name="dough" value="Thin Crust" checked={'Thin Crust' === dough} onChange={this.handleChange}/>
                        <label>Thin Crust</label><br/>
                        <input type="radio" id="deep" name="dough" value="Deep Dish" checked={'Deep Dish' === dough} onChange={this.handleChange}/>
                        <label>Deep Dish</label><br/>
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
        update: (inputId, value) => {
            dispatch(updateBase(inputId, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBase);