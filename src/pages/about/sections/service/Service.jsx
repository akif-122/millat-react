import React from 'react'
import Event from '../../../../components/Event/Event'
import { Container, Row } from 'react-bootstrap'

import sImg1 from "../../../../assets/images/s1.png";
import sImg2 from "../../../../assets/images/s2.png";
import sImg3 from "../../../../assets/images/s3.png";
import ServiceCard from '../../../../components/ServiceCard/ServiceCard';

const Service = () => {
    const cardData = [
        {
            img: sImg1,
            heading: "TEACHER TRAINING",
            text: "At teacher training in different Private and Government Schools of KP.",
            btnText : "More",
            btnLink : "#"
        },
        {
            img: sImg2,
            heading: "RESOURCE MATERIALS",
            text: "At teacher training in different Private and Government Schools of KP.",
            btnText : "More",
            btnLink : "#"
        },
        {
            img: sImg3,
            heading: "QUESTION PAPERS",
            text: "At teacher training in different Private and Government Schools of KP.",
            btnText : "More",
            btnLink : "#"
        }
    ]
    return (
        <>
            {/* <!-- SERVICES SECTION START --> */}
            <section className="services">
                <Event eventHeading={"OUR FEATURES SERVICES"}/>

                <Container>
                    <Row >
                        <ServiceCard cardData={cardData} />                
                    </Row>
                </Container>

            </section>
            {/* <!-- SERVICES SECTION END --> */}
        </>
    )
}

export default Service