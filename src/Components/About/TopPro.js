import React from 'react';
import top from '../../assets/top.jpg';

export default function TopPro() {
    return (
        <div className='top-pro-container' >
            <i className="fas fa-question"></i>
            <img src={top} alt='top-pro-badge' />
            <h3>What is a Top Pro?</h3>
            <p>Top Pros respond to new customers within 24 hours at least 75% of the time.</p>
            <hr />
            <p>Top Pros maintain a rating of at least 4.8.</p>
            <hr />
            <p>Top Pros have received at least five verified reviews in the last year.</p>
        </div>
    )
}
