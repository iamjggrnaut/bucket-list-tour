import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {

    return (
        <div className='footer'>
            <div className="container footer-container">
                <div>
                    <h4>Bucket List Tour</h4>
                    <p>© All rights reserved, 2023</p>
                </div>
                <div className='text-end'>
                    <p>info@bucketlisttour.com</p>
                    <div className="icons">
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer