import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.css"
import Social from '../Social/Social'
const Footer = () => {
    return (
        <>
            {/* <!-- FOOTER SECTION START --> */}
            <footer class="footer">
                <Container>
                    <Row>
                        <Col sm="6" lg="3" data-aos="fade-right">
                            <h3>SERVICES</h3>
                            <ul class="list-unstyled">
                                <li><a href="#">Textbooks</a></li>
                                <li><a href="#">– Prime (New Edition)</a></li>
                                <li><a href="#">– Educatum (New Edition)</a></li>
                                <li><a href="#">Reader</a></li>
                                <li><a href="#">Encyclopedia</a></li>
                                <li><a href="#">Workbooks</a></li>
                            </ul>
                        </Col>

                        <Col sm="6" lg="3" data-aos="fade-down">
                            <h3>About</h3>

                            <p>Training Programs
                                Educational Pre-Audits
                                Character Building Activities
                                Assessment & Evaluation
                                Teaching Observation
                                Career Counselling
                                Innovative Learning
                                Research
                            </p>
                        </Col>

                        <Col sm="6" lg="3" data-aos="zoom-in">
                            <h3>Userful Links</h3>

                            <ul class="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Courses</a></li>
                            </ul>

                        </Col>

                        <Col sm="6" lg="3" data-aos="fade-left">
                            <h3>Contacts</h3>
                            <ul class="list-unstyled">
                                <li><a href="#"><i class="fa-solid fa-phone-flip"></i> UAN: 0315 1212212</a></li>
                                <li><a href="#"><i class="fa-solid fa-phone-flip"></i> 091 5881585</a></li>
                                <li><a href="#"><i class="fa-solid fa-envelope"></i> millatpublisers@gmail.com</a></li>
                            </ul>

                            <h3>Folow Us</h3>
                            
                            <Social/>
                            
                        </Col>
                    </Row>
                </Container>

            </footer>
            {/* <!-- FOOTER SECTION END --> */}
        </>
    )
}

export default Footer