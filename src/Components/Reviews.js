import React from 'react';
import reviews from '../reviews';

export default function Reviews() {
    let reviewCards = reviews.map((x, i) => {
        return (
            <span key={i}>{x.name}</span>
        )
    })

    return (
        <div className='section'>
            <h2>Reviews</h2>
            {reviewCards}
        </div>
    )
}