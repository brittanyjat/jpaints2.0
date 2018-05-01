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
            id: 4,
            name: 'Tylor W.',
            review: '"Great experience. They were extremely professional and accommodating. We will definitely use them again. Highly recommended."',
            date: 'Feb 26, 2018',
            stars: 5,
            description: 'Interior Painting in Salt Lake City, UT'
        },
        {
            id: 3,
            name: 'Molly W.',
            review: '"They were fantastic! Professional and courteous. They left my house clean and did a seriously rad job on the painting. I was really impressed. She communicated well and clearly and got the job done in a very reasonable amount of time."',
            date: 'Mar 2, 2018',
            stars: 5,
            description: 'Interior Painting in Ogden, UT'
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
        autoplaySpeed: 7500,
        pauseOnHover: true,
        speed: 1000,
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