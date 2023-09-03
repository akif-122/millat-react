import React from 'react'
import { Card, Col } from 'react-bootstrap'

import "./service.css"

const ServiceCard = ({ cardData }) => {
    return (
        <>

            {
                cardData.map((val, i) => (
                    <Col md="4" data-aos="fade-right" key={i}>
                        <Card className="text-center">
                            <img src={val.img} alt="" />

                            <Card.Body>
                                <h4>{val.heading}</h4>
                                <p>{val.text}</p>

                                <div className="services-btn d-flex justify-content-center">
                                    <a href={val.btnLink} className="w-btn">{val.btnText}</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }


        </>
    )
}

export default ServiceCard