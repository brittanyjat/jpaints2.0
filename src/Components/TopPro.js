import React from 'react';
import room10 from '../assets/room10.jpeg';
import top from '../assets/top.jpg';

export default function TopPro() {
    return (
        <div className='bg-photo top-pro-container' style={{ background: `linear-gradient(to right, rgba(75, 75, 75, 0.2), rgba(75, 75, 75, 0.2)), url(${room10})` }}>
            <div>
                <img src={top} alt='top-pro-badge' />
                <h3>What is a Top Pro?</h3>
                <p>Top Pros respond to new customers within 24 hours at least 75% of the time.</p>
                <p>Top Pros maintain a rating of at least 4.8.</p>
                <p>Top Pros have received at least five verified reviews in the last year.</p>
            </div>
        </div>
    )
}