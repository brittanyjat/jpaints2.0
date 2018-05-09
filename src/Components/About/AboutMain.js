import React from 'react';
import Hero from '../Home/Hero';
import commercial2 from '../../assets/commercial2.jpeg';
import jess from '../../assets/jess.jpg';
import TopPro from './TopPro';

let aboutSubtitle =
    <div className='subtitle sub-subtitle'>
        <span>About</span>
    </div>

export default function AboutMain() {
    return (
        <div>
            <Hero img={commercial2} title={aboutSubtitle} />

            <div className='about-bio-container'>
                <img src={jess} alt='jess' />
                <div>
                    <p>{'In 2009 I graduated a Painters & Allied Trades Local 77 Union pre apprentice residential / commercial / industrial trade program where I worked to earn certifications through over 1300 labor hours covering all areas of the trade also including drywalling, wallpapering, wood staining, and other special techniques. Certifications I have earned are OSHA-10, heavy equipment training and scaffolding, etc. Since graduating the program I have done many painting jobs throughout the years. Some big and some small, each as important as the other. I treat every opportunity I earn as I would if it were my own with a strong work ethic, integrity, time management, and an incredibly fine attention to the details. I would feel so lucky enough to offer my services to anyone who thinks I may be a good fit for their needs.'}</p>
                    <p>{"The very thing I most enjoy about painting will always be seeing someone's reaction at the completion of a job. It is so rewarding for me to show someone that something can be even better than they ever imagined it could. To me, everything we have is earned through hard work, perseverance, optimism, honesty, and k i n d n e s s and I take pride in these genuine qualities. I can't wait to help your painting project turn out even better than you thought."}</p>
                    <p>Jess Baldwin</p>
                </div>
            </div>
            <br />
            <div className='partition' style={{height: '15px'}}></div>
            <TopPro />
        </div>
    )
}