import React from 'react'
import "./story.css"

import { Col, Container, Row } from 'react-bootstrap'
import aboutImg from "../../../../assets/images/about.png"
import Event from "../../../../components/Event/Event"
const Story = () => {
    return (
        <>
            {/* <!-- STORY SECTION START --> */}
            <section className="story">

                <Event eventHeading={"OUR STORY"} />
                 
                <Container >
                    <Row >
                        <Col md="6" data-aos="fade-right">
                            <div className="story-img">
                                <img src={aboutImg} width="100%" alt="" />
                            </div>
                        </Col>
                        <Col md="6"  data-aos="fade-left">
                            <div className="story-content text-justify">
                                <p>Millat Publishing Company was founded in the year 1972 at
                                    Charsadda in the province of KPK ascertaining the development
                                    of the taught utilizing all physical, moral and ethical spheres to
                                    adorn their character building transforming them into practical
                                    Muslims and true followers of each tradition of the Last Prophet'
                                    Hazrat Muhammad (Sallalahu' Alihe' wasallam) to introduce
                                    academic and ethical revolution through a squad of patriot
                                    youngsters making Pakistan a really staunch state in all terms of
                                    ge ograph i cal , po l iti cal and s o c ial de v e l opme n t.
                                    Alhammadulillah! We have become a rising star by dint of our
                                    sincere and devoted team members and consultants in the
                                    educational sphere of the state. For enhancing our performance
                                    and approach to our esteemed clients, we have inaugurated our
                                    office in Peshawar to facilitate our schools and other educational
                                    institutions with all sorts of academic and professional trainings,
                                    consultation and career guidance. Educating the clan is the
                                    Prophets' tradition. It is my utmost concern to justify the existence
                                    of my company as a true follower of this tradition as educating is
                                    rewarding in itself</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
            {/* <!-- STORY SECTION END --> */}
        </>
    )
}

export default Story