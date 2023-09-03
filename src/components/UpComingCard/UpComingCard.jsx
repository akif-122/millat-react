import React from 'react'
import { Col } from 'react-bootstrap'
import Button from '../Button/Button'

const UpComingCard = ({ cardData }) => {
    return (
        <>
            {
                cardData.map((val, i) => (
                    <Col sm="6" lg="4" data-aos="fade-right">
                        <div className={`up-card ${val.class}`}>
                            <h4>{val.heading}</h4>
                            <p>{val.text}</p>
                            <div className="up-card-btn d-flex justify-content-center">
                                <Button text={val.btnText} />
                            </div>
                        </div>
                    </Col>
                ))
            }
        </>
    )
}

export default UpComingCard