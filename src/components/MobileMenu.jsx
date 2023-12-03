import React from 'react'

const MobileMenu = ({ callback }) => {

    return (
        <div className='mobile-menu'>
            <h3>Bucket List Tour</h3>
            <a onClick={() => callback(false)} href="#route">Route</a>
            <a onClick={() => callback(false)} href="#details">Details</a>
            <a onClick={() => callback(false)} href="#program">Program</a>
            <a onClick={() => callback(false)} href="#join" className='prime-btn'>JOIN</a>
        </div>
    )
}

export default MobileMenu