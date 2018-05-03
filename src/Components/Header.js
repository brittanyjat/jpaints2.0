import React, { Component } from 'react';

export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            showNav: false
        }
    }

    render() {
        const { showNav } = this.state;

        return (
            <div id='header'>
                <h1>JPaints Utah</h1>
                <div onClick={() => this.setState({ showNav: !showNav })} className='menu-trigger'>
                    <i className="fas fa-bars"></i>
                </div>
                {
                    showNav
                        ?
                        <div className='side-nav'>
                            <i className="fas fa-times" onClick={(e) => this.setState({ showNav: !showNav })}></i>
                            <span>Home</span>
                            <span>About</span>
                            <span>Contact</span>
                            <span>Reviews</span>
                        </div>
                        : null
                }
            </div>
        )
    }
}
