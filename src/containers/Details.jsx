import React, { useEffect } from 'react'
import { useState } from 'react'
import Destination from '../components/Destination'

const Details = ({ state }) => {

    const [active, setActive] = useState()
    useEffect(() => {
        setActive(state?.destinations[0])
    }, [state])

    return (
        <div id='details'>
            <div className="container details-container">
                <div className="select">
                    <label htmlFor="">Select Destination</label>
                    <select name="" id="" defaultValue={active} onChange={e => setActive(JSON.parse(e.target.value))}>
                        {
                            state?.destinations?.map((item, index) => (
                                <option value={JSON.stringify(item)} key={index}>{item.city}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            {
                active && <Destination {...active} />
            }
        </div >
    )
}

export default Details