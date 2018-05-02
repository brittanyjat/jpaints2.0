import React from 'react';
import About from './About'
import Services from './Services';
import Contact from './Contact';
import Header from '../Header';
import Hero from './Hero';
import lisa3 from '../../assets/lisa3.png';
import ReviewCarousel from '../ReviewCarousel';

function Home() {
    return (
        <div>
            <Header />
            <Hero img={lisa3} />
            <About />
            <ReviewCarousel />
            <Services />
            <Contact />
        </div>
    )
}

export default Home;
