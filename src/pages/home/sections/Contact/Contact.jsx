import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";


import "./contact.css"
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from "../../../../assets/images/contact.png"
import ContactForm from '../../../../components/ContactForm/ContactForm'
const Contact = () => {
    return (
        <>
            {/* <!-- CONTACT SECTION START --> */}
            <section className="contact">
                <Container>
                    <Row>
                        <Col md="7" className="text-center">
                            <div className="contact-content d-flex flex-column justify-content-center">
                                <div className="contact-image">
                                    <img src={contactImg} width="100" alt="" />
                                </div>

                                <h2>Our Contacts</h2>

                                <p><FontAwesomeIcon icon={faLocationDot} /> Industrial Estate, Hayat abad, Phase I Peshawar
                                    KPK, Pakistan.</p>

                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <p><FontAwesomeIcon icon={faPhoneFlip} /> UAN: 0315 1212212</p>
                                    <p className="mx-4"><FontAwesomeIcon icon={faPhoneFlip} /> 091 5881585</p>
                                    <p><FontAwesomeIcon icon={faEnvelope} /> millatpublisers@gmail.com</p>
                                </div>
                            </div>
                        </Col>

                        <Col md="4" className="ms-auto">
                           <ContactForm/>
                        </Col>

                    </Row>
                </Container>
            </section>
            {/* <!-- CONTACT SECTION END --> */}
        </>
    )
}

export default Contact