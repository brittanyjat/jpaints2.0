import React, { Component } from 'react';

export default class MiniContact extends Component {
    render() {
        return (
            <div className='mini-contact'>
                <h4>Contact Us</h4>
                <input type='text' placeholder='Name *' />
                <input type='email' placeholder='Email Address *' />
                <textarea placeholder='Message' />
                <button>Send</button>
            </div>
        )
    }
}