import React from 'react';
import './Home.css'
export default function Home() {
    
    return (
        <div className='page'>
            <div className='right'>
                <h3>Welcome to the Pizza Ordering App</h3>
                <div className='fill'>
                    <button>Order Now</button>
                </div>
            </div>
            <div className='left'>
                <img alt='pizza' src={require('./pizza.jpg')} />
            </div>

        </div>
    )
}

