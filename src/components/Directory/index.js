import React from 'react';
import Shop from './../../assets/pistachomasthead.jpeg';
import './style.scss';

const Directory = props => {
    return (
        <div className='directory'>
            <div className='wrap'>
                <div
                className='item'
                style={{backgroundImage: `url(${Shop})` }}
                >
                    <a href="">
                        Shop
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;