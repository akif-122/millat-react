import React from 'react'
import { Col } from 'react-bootstrap'

export const NewsEventCard = ({ cardData }) => {
    return (
        <>
            {
                cardData.map((val, i) => (
                    <Col lg="6"  className='px-xl-5' data-aos="fade-down-right" key={i}>
                        <div className="ne-card d-flex align-items-center justify-content-between">
                            <div className="card-content">
                                <h5>{val.heading}</h5>
                                <p>{val.text}</p>
                            </div>

                            <span className="data-label text-center">{val.dayMonth}<strong>{val.year}</strong></span>
                        </div>
                    </Col>
                ))
            }
        </>
    )
}
