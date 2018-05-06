import React from 'react';
import About from './About'
import Services from './Services';
import Hero from './Hero';
import lisa3 from '../../assets/lisa3.png';
import ReviewCarousel from './ReviewCarousel';

let homeSubtitle =
    <div className='subtitle'>
        <span>Thumbtack Top Pro</span>
        <span>Interior</span>
        <span>Exterior</span>
        <span>Residential</span>
        <span>Commercial</span>
    </div>

function Home() {
    return (
        <div>
            <Hero img={lisa3} home={true} title={homeSubtitle} />
            <About />
            <ReviewCarousel />
            <Services />
        </div>
    )
}

export default Home;
