import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from './MobileMenu';
import { useState } from 'react';

const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <div className='navpanel' style={{ position: 'relative' }}>
            <div className="nav-container container">
                <h4>Bucket List Tour</h4>
                <div className="navlinks">
                    <a href="#route">route</a>
                    <a href="#details">details</a>
                    <a href="#program">schedule</a>
                    <a href="#join" className='prime-btn'>JOIN</a>
                </div>

                <div className="mobile-icon" onClick={() => setShow(true)}>
                    <RxHamburgerMenu />
                </div>
                {
                    show ?
                        <MobileMenu callback={setShow} />
                        : null
                }
            </div>
        </div>
    )
}

export default Navbar