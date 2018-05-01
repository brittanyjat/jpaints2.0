import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Hero from './Hero';
import Header from './Header';
import ReviewCarousel from './ReviewCarousel';

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <ReviewCarousel />
            <About />
            <Services />
            <Contact />
        </div>
    )
}

export default Home;
