import React, { Component } from 'react';
import Hero from './Home/Hero';
import room8 from '../assets/room8.jpeg';
import Contact from './Contact';

export default class ContactMain extends Component {

    render() {
        let contactSubtitle =
            <div className='subtitle sub-subtitle'>
                <span>Contact</span>
            </div>

        return (
            <div>
                <Hero img={room8} title={contactSubtitle} />
                <br />
                <Contact />
            </div>
        )
    }
}