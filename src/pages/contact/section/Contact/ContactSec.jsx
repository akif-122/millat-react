import React from 'react'
import ContactForm from '../../../../components/ContactForm/ContactForm'
import Header from '../../../../components/Header/Header'
import Event from '../../../../components/Event/Event'
import { Col, Container, Row } from 'react-bootstrap'
import "./contactsec.css"
import Social from '../../../../components/Social/Social'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";


const ContactSec = () => {
    const headerText = {
        subHeading : "",
        heading: "WE ARE HERE",
        textTop : "For More Info",
        textBottom : "",
        btnText : "Read More",
        btnLink : "#"
    }
    return (
        <>

            <Header headerText={headerText} />
        
            {/* <!-- CONTACT SECTION START --> */}
            <section className="contact bg-none">
                <Event eventHeading={"FEEL FREE TO CONTACT US"} />
                
                <Container>
                    <Row className="align-items-center">
                        <Col md="7" data-aos="fade-right">
                            <div className="contact-content d-flex flex-column justify-content-center">

                                <div className="contact-help" >
                                    <h4>Ask how we can help you</h4>
                                    <p>Yearly and Monthly Events held by our seniors and KP education Members</p>
                                </div>

                                <p><FontAwesomeIcon icon={faLocationDot} />Industrial Estate, Hayat abad, Phase I Peshawar
                                    KPK, Pakistan.</p>

                                <p><FontAwesomeIcon icon={faPhoneFlip} /> UAN: 0315 1212212</p>
                                <p><FontAwesomeIcon icon={faPhoneFlip} /> 091 5881585</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> millatpublisers@gmail.com</p>

                                <Social/>

                                <div className="terms">
                                    <h5>Terms & conditions</h5>
                                    <p>© copyright 2023-24</p>
                                </div>

                            </div>
                        </Col>

                        <div className="col-md-4 ms-auto" data-aos="fade-down">
                           <ContactForm/>
                        </div>

                    </Row>
                </Container>
            </section>
            {/* <!-- CONTACT SECTION END --> */}
        </>
    )
}

export default ContactSec