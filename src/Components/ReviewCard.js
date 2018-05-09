import React from 'react';
import reviews from '../reviews';

export default function ReviewCard() {
    let reviewCards = reviews.map(x => {
        return (
            <div className='review-card' key={x.id}>
                <i className="fas fa-quote-right"></i>
                {/* <i className="fas fa-user"></i> */}
                <span>{x.review}</span>
                <div>
                    <p>{x.name}</p>
                    <p>{x.date}</p>
                    <p>{x.description}</p>
                </div>
            </div>
        )
    })
    return reviewCards
}