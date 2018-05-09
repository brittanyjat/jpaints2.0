import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class MiniContact extends Component {
    constructor() {
        super();

        this.state = {
            name: null,
            number: null,
            email: null,
            interior: false,
            exterior: false,
            other: false,
            date: null,
            message: null,
            footage: 0,
            rooms: 0
        }
    }

    handleInput(prop, val) {
        this.setState({ [prop]: val })
    }

    handleSubmit() {
        let body = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            type: [this.state.interior, this.state.exterior, this.state.other],
            date: '',
            message: this.state.message,
            footage: '',
            rooms: ''
        }

        axios.post('/api/email', body).then(res => {
            res.status === 200
                ? toast.success('Thank You! We will contact you with further information.')
                : toast.error('Error sending message, please try again')
        })
    }

    render() {
        const { name, number, email, message } = this.state;
        return (
            <div className='mini-contact'>
                <h4>Contact Us</h4>
                <form id='mini-contact'>
                    <input
                        required
                        type='text'
                        placeholder='Name *'
                        onChange={(e) => this.handleInput('name', e.target.value)} />
                    <input
                        required
                        type='email'
                        placeholder='Email Address *'
                        onChange={(e) => this.handleInput('email', e.target.value)} />
                    <input
                        required
                        type='tel'
                        placeholder='Phone Number *'
                        onChange={(e) => this.handleInput('number', e.target.value)} />
                    <textarea
                        required
                        placeholder='Message *'
                        onChange={(e) => this.handleInput('message', e.target.value)} />
                </form>
                <button
                    disabled={name && number && email && message ? false : true}
                    onClick={() => this.handleSubmit()}>Submit</button>
                <ToastContainer position='top-center' />
            </div>
        )
    }
}