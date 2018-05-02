import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Header from './Header';
import ReviewCarousel from './ReviewCarousel';
import TopPro from './TopPro';

function Home() {
    return (
        <div>
            <Header />
            <About />
            <br />
            <TopPro />
            <ReviewCarousel />
            <Services />
            <Contact />
        </div>
    )
}

export default Home;
