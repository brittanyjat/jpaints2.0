import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div className='header-title'>
                    <div>
                        <h1>JPaints Utah</h1>
                    </div>
                    <div className='subtitles'>
                        <span>Thumbtack Top Pro</span>
                        <span>{'Residential - Commercial - Interior - Exterior'}</span>
                        <span>(385) 275-6993</span>
                    </div>
                </div>
                <div className='header-nav'>
                    <div>
                        <span>About</span>
                        <span>Services</span>
                        <Link to='/portfolio'><span>Portfolio</span></Link>
                        <Link to='/reviews'><span>Reviews</span></Link>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        )
    }
}
