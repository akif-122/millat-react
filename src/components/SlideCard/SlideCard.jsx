import React from 'react'
import { Card } from 'react-bootstrap'

const SlideCard = ({ cardData }) => {
    return (
        <>
            {
                cardData.map((val, i) => (
                    <Card data-aos="fade-right" key={i}>
                        <Card.Header>
                            <h4>{val.heading}</h4>
                        </Card.Header>

                        <img src={val.img} alt="" />

                        <Card.Footer className='text-center'>
                            <p>{val.text}</p>
                        </Card.Footer>
                    </Card>
                ))
            }

        </>
    )
}

export default SlideCard