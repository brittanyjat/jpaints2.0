import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Hero from './Hero';
import Header from './Header';

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Services />
            <Contact />
        </div>
    )
}

export default Home;
