import React from 'react';
import room7 from '../assets/room7.jpeg';

export default function Contact() {
    return (
        <div className='contact-container' style={{ background: `linear-gradient(to right, rgba(75, 75, 75, 0.2), rgba(75, 75, 75, 0.2)), url(${room7})` }}>
            <form>
                <h2>Contact</h2>
                <p>Name *</p>
                <input type='text' />
                <p>Phone Number *</p>
                <input type='tel' />
                <p>Email *</p>
                <input type='email' />
                <p>Type of project</p>
                <select>
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Specialty Painting</option>
                    <option>Cabinet Painting</option>
                    <option>Other</option>
                </select>
                <p>Message *</p>
                <textarea type='text' />
                <input type='submit' style={{marginBottom: '30px'}}/>
            </form>
        </div>
    )
}