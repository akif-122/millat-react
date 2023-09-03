import React from 'react'
import { Col } from 'react-bootstrap'
import "./liberaryCard.css"

const LiberaryCard = ({ CardData }) => {

    return (
        <>
            {
                CardData.map((val, i) => (
                    <Col sm="6" lg="3" key={i}>
                        <div className="lib-card">
                            <div className="card-icon">
                                <div className="icon-inner">
                                    <img src={val.icon} alt="" />
                                </div>
                            </div>
                            <div className="card-content">
                                <h4>{val.title}</h4>
                                <p>{val.text}</p>
                            </div>
                        </div>
                    </Col>
                ))
            }

        </>
    )
}

export default LiberaryCard