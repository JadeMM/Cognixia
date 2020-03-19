import React from 'react';
import {connect} from 'react-redux';
import { updateToppings } from '../actions';
import { getData } from '../selectors';

class PizzaBase extends React.Component {
    constructor() {
        super();
        this.state = {
            cheeses: 0,
            meats: 1,
            vegetables: 0
        }
    }

    handleChange = (e) => {
        this.props.update(e.target.name, e.target.value);
    }

    //change category visibilty on click
    changeVisibility = (e) => {
        if (e.target.id === 'meats')
            this.setState({meats: Math.abs(this.state.meats - 1)})
        if (e.target.id === 'vegetables')
            this.setState({vegetables: Math.abs(this.state.vegetables - 1)})
        if (e.target.id === 'cheeses')
            this.setState({cheeses: Math.abs(this.state.cheeses - 1)})
    }

    //is category visible
    isVisible = (type) => {
        return (this.state[type] === 1) 
    }
    
    //Render toppings form, list of checkbox
    render() {
        const { toppings } = this.props.data.pizza;
        const upArrow = <span>&#9650; </span>
        const downArrow = <span>&#9660; </span>

        return (
            <div>
                <h3>Pizza Toppings</h3>
                <form>
                    <h4 id='cheeses' onClick={this.changeVisibility}>
                        {this.isVisible('cheeses') ? upArrow: downArrow}
                        Cheeses
                    </h4>
                    {this.isVisible('cheeses') ? <Cheeses toppings={toppings} handleChange={this.handleChange}/> : null}

                    <h4 id='meats' onClick={this.changeVisibility}>
                        {this.isVisible('meats') ? upArrow: downArrow}
                        
                        Meats
                    </h4>
                    {this.isVisible('meats') ? <Meats toppings={toppings} handleChange={this.handleChange}/> : null}

                    <h4 id='vegetables' onClick={this.changeVisibility}>
                        {this.isVisible('vegetables') ? upArrow : downArrow}
                        Vegetables
                    </h4>
                    {this.isVisible('vegetables') ? <Vegtables toppings={toppings} handleChange={this.handleChange}/> : null}
                    
                </form>
            </div>
        )
    }
}

//Cheeses checklist
function Cheeses({toppings, handleChange}) {
    return (
        <div className='ingHolder'>
            <input type="checkbox" id='cheeses' name='toppings' value='Parmesan' checked={toppings.includes('Parmesan')} onChange={handleChange}/>
            <label> Parmesan</label><br/>
            <input type="checkbox" id='cheeses' name='toppings' value='Feta' checked={toppings.includes('Feta')} onChange={handleChange}/>
            <label> Feta</label><br/>
        </div>
    )
}

//Meats checklist
function Meats({toppings, handleChange}) {
    return (
        <div className='ingHolder'>
            <input type="checkbox" id='meats' name='toppings' value='Pepperoni' checked={toppings.includes('Pepperoni')} onChange={handleChange}/>
            <label> Pepperoni</label><br/>
            <input type="checkbox" id='meats' name='toppings' value='Sausage' checked={toppings.includes('Sausage')} onChange={handleChange}/>
            <label> Sausage</label><br/>
            <input type="checkbox" id='meats' name='toppings' value='Canadian Bacon' checked={toppings.includes('Canadian Bacon')} onChange={handleChange}/>
            <label> Canadian Bacon</label><br/>
            <input type="checkbox" id='meats' name='toppings' value='Bacon' checked={toppings.includes('Bacon')} onChange={handleChange}/>
            <label> Bacon</label><br/>
            <input type="checkbox" id='meats' name='toppings' value='Ground Beef' checked={toppings.includes('Ground Beef')} onChange={handleChange}/>
            <label> Ground Beef</label><br/>
        </div>
    )
}

//Veggies Checklist
function Vegtables({toppings, handleChange}) {
    return (
        <div className='ingHolder'>
            <input type="checkbox" id='vegetables' name='toppings' value='Bell Pepper' checked={toppings.includes('Bell Pepper')} onChange={handleChange}/>
            <label> Bell Pepper</label><br/>
            <input type="checkbox" id='vegetables' name='toppings' value='Tomato' checked={toppings.includes('Tomato')} onChange={handleChange}/>
            <label> Tomato</label><br/>
            <input type="checkbox" id='vegetables' name='toppings' value='Artichoke Hearts' checked={toppings.includes('Artichoke Hearts')} onChange={handleChange}/>
            <label> Artichoke Hearts</label><br/>
            <input type="checkbox" id='vegetables' name='toppings' value='Mushrooms' checked={toppings.includes('Mushrooms')} onChange={handleChange}/>
            <label> Mushrooms</label><br/>
            <input type="checkbox" id='vegetables' name='toppings' value='Pineapple' checked={toppings.includes('Pineapple')} onChange={handleChange}/>
            <label> Pineapple</label><br/>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        data: getData(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (inputId, value) => {
            dispatch(updateToppings(inputId, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBase);