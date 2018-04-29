import React from 'react';
import deck from '../assets/deck.png';
import lisa2 from '../assets/lisa2.png';

export default function Services() {
    return (
        <div className='section'>
            <h2>Services</h2>
            <div className='service-container'>
                <div className='service'>
                    <img src={lisa2} alt='interior-painting' />
                    <h3>Interior Painting</h3>
                    <span>Nulla cursus porta libero condimentum vel. Donec fermentum, turpis ac fermentum iaculis, erat magna tempus nunc, id varius felis tortor ac felis. Donec sed dolor vestibulum, malesuada urna a, rutrum augue. Donec vel odio sit amet nunc ullamcorper vehicula. In hac habitasse platea dictumst.</span>
                </div>
                <div className='service'>
                    <img src={deck} alt='exterior-painting' />
                    <h3>Exterior Painting</h3>
                    <span>Nulla cursus porta libero condimentum vel. Donec fermentum, turpis ac fermentum iaculis, erat magna tempus nunc, id varius felis tortor ac felis. Donec sed dolor vestibulum, malesuada urna a, rutrum augue. Donec vel odio sit amet nunc ullamcorper vehicula. In hac habitasse platea dictumst.</span>
                </div>
            </div>
        </div>
    )
}