import React from 'react'
import "./event.css"
const Event = ({eventHeading}) => {
    return (
        <>
            <div className="section-heading">
                <h2 data-aos="zoom-in">{eventHeading}</h2>
            </div>
        </>
    )
}

export default Event