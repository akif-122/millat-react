import React from 'react'
import Event from "../../../../components/Event/Event"
import { Container, Row } from 'react-bootstrap'
import "./NewsEvent.css"
import { NewsEventCard } from '../../../../components/NewsEventCard/NewsEventCard'
const NewsEnvet = () => {

    const cardData = [
        {
            heading: "Teachers Trainings",
            text: "SLO’s based teachers training & teaching method",
            dayMonth : "23 Dec",
            year : "2024"
        },

        {
            heading: "Teachers Trainings",
            text: "SLO’s based teachers training & teaching method",
            dayMonth : "23 Dec",
            year : "2024"
        },

        {
            heading: "Teachers Trainings",
            text: "SLO’s based teachers training & teaching method",
            dayMonth : "23 Dec",
            year : "2024"
        },

        {
            heading: "Teachers Trainings",
            text: "SLO’s based teachers training & teaching method",
            dayMonth : "23 Dec",
            year : "2024"
        }
    ]

    return (
        <>
            {/* <!-- NEWS EVENTS SECTION START --> */}
            <section className="news-event">
                <Event eventHeading={"NEWS & EVENTS"} />

                <Container>
                    <Row>
                        <NewsEventCard cardData={cardData} />
                    </Row>
                </Container>

            </section>
            {/* <!-- NEWS EVENTS SECTION END --> */}
        </>
    )
}

export default NewsEnvet