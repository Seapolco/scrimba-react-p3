import React from 'react';

import globe from '../assets/globe.svg';



const Navbar = () => {

    return (
        <nav>
            <div className="nav-content">
                <img className="nav-logo" src={globe} />
                <div className="nav-title">my travel journal.</div>
            </div>
        </nav>
    )
}

export default Navbar