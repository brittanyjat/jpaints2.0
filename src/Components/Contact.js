import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default class Contact extends React.Component {
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
            footage: '',
            rooms: ''
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
            date: this.state.date,
            message: this.state.message,
            footage: this.state.footage,
            rooms: this.state.rooms
        }

        axios.post('/api/email', body).then(res => {
            res.status === 200
                ? toast.success('Thank You! We will contact you with further information.')
                : toast.error('Error sending message, please try again')
        })
    }

    render() {
        const { interior, exterior, other, name, number, email, message } = this.state;
        return (
            <div className='contact-container'>
                <form id='contact-form'>
                    <h3>Fill out our contact form to schedule a free estimate</h3>
                    <p>Name *</p>
                    <input type='text' required onChange={(e) => this.handleInput('name', e.target.value)} />

                    <p>Phone Number *</p>
                    <input type='tel' required onChange={(e) => this.handleInput('number', e.target.value)} />

                    <p>Email *</p>
                    <input type='email' required onChange={(e) => this.handleInput('email', e.target.value)} />

                    <p>Type of Project</p>
                    <section>
                        <div>
                            <input type='checkbox' checked={interior} onChange={() => this.setState({ interior: !interior })} />
                            <span>Interior</span>
                        </div>
                        <div>
                            <input type='checkbox' checked={exterior} onChange={() => this.setState({ exterior: !exterior })} />
                            <span>Exterior</span>
                        </div>
                        <div>
                            <input type='checkbox' checked={other} onChange={() => this.setState({ other: !other })} />
                            <span>Other</span>
                        </div>
                    </section>

                    <p>Ideal Project Date</p>
                    <input
                        type='date'
                        name='date'
                        onChange={(e) => this.handleInput('date', e.target.value)} />

                    <p>Sqare Footage</p>
                    <input type='number' onChange={(e) => this.handleInput('footage', e.target.value)} />

                    <p>Number of Rooms</p>
                    <input type='number' onChange={(e) => this.handleInput('rooms', e.target.value)} />

                    <p>Message *</p>
                    <textarea
                        type='text'
                        required
                        placeholder='Any additional details? Baseboards? Ceilings? The more detail, the better estimate we can give you!'
                        onChange={(e) => this.handleInput('message', e.target.value)} />
                </form>

                <button
                    disabled={name && number && email && message ? false : true}
                    className='submit-button'
                    onClick={() => this.handleSubmit()}>
                    Submit
                </button>
            </div>
        )
    }
}