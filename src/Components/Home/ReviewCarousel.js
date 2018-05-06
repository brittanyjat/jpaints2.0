import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


export default function ReviewCarousel() {

    const reviewSlides = [
        {
            id: 0,
            name: 'Brian G.',
            review: '"So great to work with. Jess was so kind and flexible."',
            date: 'Apr 22, 2018',
            stars: 5,
            description: 'Interior Painting in Bountiful, UT'
        },
        {
            id: 12,
            name: 'Michael W.',
            review: '"Very awesome and easy to work with and I look forward to hiring Jess again for future projects."',
            date: 'Apr 27, 2017',
            stars: 5,
            description: 'Interior Painting in West Valley City, UT'
        },
        {
            id: 7,
            name: 'Thumbtack Customer',
            review: '"Jess was very professional and did a neat job with our requests. We are already rehiring her to do more painting work. It was a pleasure to work with Jess."',
            date: 'Oct 26, 2017',
            stars: 5,
            description: 'Interior Painting'
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slides = reviewSlides.map(x => {
        return (
            <div className='review-slide' key={x.id}>
                <p>{x.review}</p>
                <p>{x.name}</p>
                <p>{x.description}</p>
            </div>
        )
    })

    return (
        <div className='review-carousel'>
            <Slider {...settings}>
                {slides}
            </Slider>
        </div >
    )
}