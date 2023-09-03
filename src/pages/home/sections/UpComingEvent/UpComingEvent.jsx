import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Event from '../../../../components/Event/Event'
import UpComingCard from '../../../../components/UpComingCard/UpComingCard'
import "./UpComingEvent.css"
const UpComingEvent = () => {

    const cardData = [
        {
            heading: "TEACHER TRAINING",
            text: "At teacher training in different Private and Government Schools of KP.",
            btnText: "More",
            class: "bg-card"
        },
        {
            heading: "TEACHER TRAINING",
            text: "At teacher training in different Private and Government Schools of KP.",
            btnText: "More",
            class: "br-green"
        },
        {
            heading: "TEACHER TRAINING",
            text: "At teacher training in different Private and Government Schools of KP.",
            btnText: "More",
            class: "br-orange"
        },
        {
            heading: "TEACHER TRAINING",
            text: "At teacher training in different Private and Government Schools of KP.",
            btnText: "More",
            class: "br-blue"
        },
        {
            heading: "TEACHER TRAINING",
            text: "At teacher training in different Private and Government Schools of KP.",
            btnText: "More",
            class: "br-purple"
        },
        {
            heading: "TEACHER TRAINING",
            text: "At teacher training in different Private and Government Schools of KP.",
            btnText: "More",
            class: "br-skyblue"
        }
    ]

    return (
        <>
            {/* <!-- UPCOMING EVENTS SECTION START --> */}
            <section className="up-event">

                <Event eventHeading={"UPCOMING EVENTS"} />

                <Container>
                    <Row className="up-cards">
                        <UpComingCard cardData={cardData} />
                    </Row>
                </Container>


            </section>
            {/* <!-- UPCOMING EVENTS SECTION END --> */}
        </>
    )
}

export default UpComingEvent