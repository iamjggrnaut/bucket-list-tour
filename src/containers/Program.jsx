import React from 'react'
import nav from '../assets/nav.png'
import bus from '../assets/bus.png'
import train from '../assets/train.png'
import plane from '../assets/plane.png'

const Program = ({ state }) => {

    const pickIcon = (type) => {
        switch (type) {
            case 'Bus':
                return bus
            case 'Flight':
                return plane
            case 'Train and Hiking':
                return train
            default: return nav
        }
    }

    return (
        <div id='program'>
            <div className="container">
                <p className='section-name mb-2'>Program</p>
                {
                    state?.destinations?.map((item, index) => (
                        <div key={index} className='prog-row'>
                            <div className='column'>
                                <img src={nav} alt="" style={{ width: '3.5vh', height: '3.5vh', objectFit: 'cover' }} />
                                <span>{item.city}</span>
                            </div>
                            <div className='column'>
                                <span>{item.date}</span>
                            </div>
                            <div className='column'>
                                <span>{item.stay}</span>
                            </div>
                            <div className='column'>
                                <img src={pickIcon(item.mode_of_travel)} alt="" style={{ width: '3vh', height: '3vh', objectFit: 'cover' }} />
                                <span>{item.mode_of_travel}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Program