import React from 'react'

const Tooltip = ({ image_url, city, date, position, conditions }) => {

    return (
        <div id='tooltip'
            style={{
                position: 'absolute',
                left: conditions?.leftPos ? position.x - 450 : position.x - 50,
                top: position.y + 50
            }}
        >
            <img src={image_url} alt="" />
            <p className="text-center m-0 mt-2">
                {city}
            </p>
            <p className="text-center" style={{ fontWeight: 200 }}>
                {date}
            </p>
        </div>
    )
}

export default Tooltip