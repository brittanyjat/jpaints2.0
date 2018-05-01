import React, { Component } from 'react';
import lisa3 from '../assets/lisa3.png';

export default class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div className='header-title bg-photo' style={{ background: `linear-gradient(to right, rgba(75, 75, 75, 0.2), rgba(75, 75, 75, 0.2)), url(${lisa3})` }}>
                    <div className='subtitles'>
                        <h1>JPaints Utah</h1>
                        <span>Thumbtack Top Pro</span>
                        <span>{'Residential - Commercial - Interior - Exterior'}</span>
                    </div>
                </div>
            </div>
        )
    }
}
