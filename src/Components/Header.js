import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div id='header'>
                <h1>JPaints Utah</h1>
                <div><i className="fas fa-bars"></i></div>
            </div>
        )
    }
}


/* <div className='header-title bg-photo' style={{ background: `linear-gradient(to right, rgba(75, 75, 75, 0.2), rgba(75, 75, 75, 0.2)), url(${lisa3})` }}> */

/* <div>
<span>Thumbtack Top Pro</span>
<span>{'Residential - Commercial - Interior - Exterior'}</span>
<span><i className="fas fa-bars"></i></span>
</div> */