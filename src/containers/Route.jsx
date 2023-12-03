import React, { useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { Marker } from "react-simple-maps"
import { data } from '../data.js'
import Tooltip from '../components/Tooltip.jsx'


const Route = ({ state }) => {

    const [mousePos, setMousePos] = useState({});

    const width = window.innerWidth
    const leftPos = width - mousePos?.x < width * 0.4
    const rigthPos = width - mousePos?.x > width * 0.4

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    const [active, setActive] = useState()
    const [shown, setShown] = useState(false)

    return (
        <div id='route'>
            <div className="container route-container">
                <p className='section-name'>Route</p>
                <div className="hor-row">
                    <hr />
                </div>
                <p className="text-center description">
                    Embark on a captivating journey with our carefully crafted route. From hidden gems to iconic landmarks, our route takes you on a discovery of diverse landscapes, rich cultures, and unforgettable experiences. Explore each step of the way as you venture into the heart of your destination, guided by the spirit of exploration.
                </p>
                <ComposableMap style={{ maxWidth: '80vw' }}>
                    <Geographies geography={data}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    stroke='silver'
                                    strokeWidth={1}
                                    strokeOpacity={0.4}
                                    opacity={0.5}
                                    style={{
                                        default: {
                                            fill: '#74583F'
                                        },
                                        hover: {
                                            fill: '#00B2D9',
                                            transition: 'all 0.25s ease-in-out'
                                        }
                                    }}

                                />
                            ))
                        }
                    </Geographies>
                    {
                        state?.destinations?.map((mark, index) => (
                            <Marker coordinates={[mark.longitude, mark.latitude]}
                                key={index}
                                onMouseEnter={() => { setActive(mark); setShown(true) }}
                                onMouseLeave={() => { setActive(); setShown(false) }}
                            >
                                <circle r={4} fill="#00B2D9" stroke='white' />
                            </Marker>
                        ))
                    }
                </ComposableMap>
                {
                    shown && active ?

                        <Tooltip {...active} position={mousePos} conditions={{ leftPos, rigthPos }} />

                        : null
                }
            </div>
        </div>
    )
}

export default Route