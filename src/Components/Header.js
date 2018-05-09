import React, { Component } from 'react';
import room2 from '../assets/room2.jpeg';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class Header extends Component {
    constructor() {
        super();

        this.state = {
            showNav: false
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({ showNav: false })
        }
    }

    render() {
        const { showNav } = this.state;
        return (
            <div id='header'>
                <Link to='/'><h1>JPaints Utah</h1></Link>
                <div onClick={() => this.setState({ showNav: !showNav })} className='menu-trigger'>
                    <i className="fas fa-bars"></i>
                </div>
                {
                    showNav
                        ?
                        <div className='side-nav'>
                            <div>
                                <i className="fas fa-times" onClick={(e) => this.setState({ showNav: !showNav })}></i>
                            </div>
                            <div>
                                <Link to='/'><span>Home</span></Link>
                                <Link to='/about'><span>About</span></Link>
                                <Link to='/contact'><span>Contact</span></Link>
                                <Link to='/reviews'><span>Reviews</span></Link>
                            </div>
                            <div>
                                <img src={room2} alt='bedroom' />
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}

export default withRouter(Header);