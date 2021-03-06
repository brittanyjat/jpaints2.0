import React from 'react';
import Hero from './Home/Hero';
import room7 from '../assets/room7.jpeg';
import ReviewCard from './ReviewCard';

export default function Reviews() {

    let reviewSubtitle =
        <div className='subtitle sub-subtitle'>
            <span>Reviews</span>
        </div>


    return (
        <div className='section'>
            <Hero img={room7} title={reviewSubtitle} />

            <div className='review-card-container'>
                <ReviewCard />
            </div>
        </div>
    )
}