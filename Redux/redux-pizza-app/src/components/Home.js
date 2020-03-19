import React from 'react';
import {Link} from "react-router-dom";
import './css/Home.css'
export default function Home(props) {
    
    
    return (
        <div className='page'>
            <table>
                <tbody>
                    <tr>
                        <td className='right'>
                            <h3>Welcome to the Pizza Ordering App</h3>
                            <div className='fill'>
                                <Link to="/base"><button id='base' className='orderButton' onClick={() => props.handleClick('base')}>Create Pizza</button></Link>
                            </div>
                        </td>
                        <td className='left'>
                            <img alt='pizza' src={require('./pizza.jpg')} />
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

