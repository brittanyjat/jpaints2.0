import React from 'react';
import room3 from '../assets/room3.jpeg';

export default function About() {
    return (
        <div className='about-container'>
            <h3>We believe in strong work ethic, integrity, time management, and an incredibly fine attention to the details.</h3>
            <div className='about-tile-container'>
                <div className='about-tile'>
                    <img src={room3} alt='about-page' />
                    <h4>About</h4>
                    <p>Find out more about our company, mission, and what our customers have to say.</p>
                    <div>
                        <p className='learn-more'>Learn More </p>
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                </div>
                <div className='about-tile'>
                    <img src={room3} alt='about-page' />
                    <h4>Take Action</h4>
                    <p>Ready to take the next step? Fill out our contact form to schedule a free estimate.</p>
                    <div>
                        <p className='learn-more'>Contact Us </p>
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}