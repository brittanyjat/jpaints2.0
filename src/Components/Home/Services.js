import React from 'react';
import exterior from '../../assets/exterior.png';
import t1 from '../../assets/t1.jpg';
import brick1 from '../../assets/brick1.png';
import cabinet1 from '../../assets/cabinet1.jpeg';

export default function Services() {
    return (
        <div className='service-section'>
            <h2>Services</h2>
            <br />
            <div className='service-container'>
                <div className='service'>
                    <img src={t1} alt='interior-painting' />
                    <h3>Interior Painting</h3>
                    {/* <span>Nulla cursus porta libero condimentum vel. Donec fermentum, turpis ac fermentum iaculis, erat magna tempus nunc, id varius felis tortor ac felis. Donec sed dolor vestibulum, malesuada urna a, rutrum augue. Donec vel odio sit amet nunc ullamcorper vehicula. In hac habitasse platea dictumst.</span> */}
                </div>
                <div className='service'>
                    <img src={exterior} alt='exterior-painting' />
                    <h3>Exterior Painting</h3>
                    {/* <span>Nulla cursus porta libero condimentum vel. Donec fermentum, turpis ac fermentum iaculis, erat magna tempus nunc, id varius felis tortor ac felis. Donec sed dolor vestibulum, malesuada urna a, rutrum augue. Donec vel odio sit amet nunc ullamcorper vehicula. In hac habitasse platea dictumst.</span> */}
                </div>
                <div className='service'>
                    <img src={brick1} alt='specialty' />
                    <h3>Specialty Painting</h3>
                    {/* <span>Nulla cursus porta libero condimentum vel. Donec fermentum, turpis ac fermentum iaculis, erat magna tempus nunc, id varius felis tortor ac felis. Donec sed dolor vestibulum, malesuada urna a, rutrum augue. Donec vel odio sit amet nunc ullamcorper vehicula. In hac habitasse platea dictumst.</span> */}
                </div>
                <div className='service'>
                    <img src={cabinet1} alt='specialty' />
                    <h3>Cabinet Painting</h3>
                    {/* <span>Nulla cursus porta libero condimentum vel. Donec fermentum, turpis ac fermentum iaculis, erat magna tempus nunc, id varius felis tortor ac felis. Donec sed dolor vestibulum, malesuada urna a, rutrum augue. Donec vel odio sit amet nunc ullamcorper vehicula. In hac habitasse platea dictumst.</span> */}
                </div>
            </div>
        </div>
    )
}