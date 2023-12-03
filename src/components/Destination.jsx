import React from 'react'
import nav from '../assets/nav.png'

const Destination = ({ image_url, city, description, date, stay, accommodation }) => {

    return (
        <div className='destination'
            style={{
                background: `url(${image_url})`,
            }}
        >
            <div className="dark-background"></div>
            <div className="container">
                <div className="item-details">
                    <div className="d-flex pt-4" style={{ gap: '20px' }}>
                        <img src={nav} style={{ width: '4vh', height: '4vh' }} alt="" />
                        <h3 style={{ fontWeight: 300 }}>{city}</h3>
                    </div>
                    <p className="mt-3">
                        {description}
                    </p>
                    <div className="mt-3">
                        <p style={{ fontSize: '20px' }}>Date: {date}</p>
                        <p style={{ fontSize: '20px' }}>Stay: {stay}</p>
                        <p style={{ fontSize: '20px' }}>Accommodation: {accommodation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination