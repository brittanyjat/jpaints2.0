import React, { Component } from 'react';
import lisa from '../assets/lisa.png';

export default class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div className='header-title'>
                    <h1>JPaints Utah</h1>
                    <div>
                        <span>Thumbtack Top Pro</span>
                        <span>{'Residential - Commerical - Exterior'}</span>
                        <span>(385) 275-6993</span>
                    </div>
                </div>
                <div className='header-nav'>
                    <div>
                        <span>About</span>
                        <span>Services</span>
                        <span>Portfolio</span>
                        <span>Reviews</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className='hero' style={{ background: `linear-gradient(to right, rgba(125, 125, 125, 0.3), rgba(125, 125, 125, 0.3)), url(${lisa})` }}>
                    {/* <span>Welcome</span> */}
                </div>
            </div>
        )
    }
}
