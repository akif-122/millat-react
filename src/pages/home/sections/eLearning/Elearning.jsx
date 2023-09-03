import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./elearning.css";
import eLearningImg from  "../../../../assets/images/v1.PNG"
const Elearning = () => {
    return (
        <>
            {/* <!-- E-LEARNING SOLUTION SECTION START --> */}
            <section className="e-learning">
                <Container>
                    <Row className="align-items-center">
                        <Col md="5">
                            <div className="e-learning-content">
                                <h2 data-aos="fade-right">Millat<br />
                                    <span>eLearning</span>
                                    <br />
                                    Solutions
                                </h2>
                                <h5 data-aos="fade-down">Millat understands that young people today
                                    learn a great deal both inside and outside of
                                    the classroom.</h5>
                                <p data-aos="zoom-out">Millat Learning Management System is an Exam generating solution
                                    made for Millat members school allowing principals and teachers to
                                    be able to generate customized assessment sheets according to
                                    their needs</p>
                                <p data-aos="zoom-out">Based on the latest cloud platform, Millat is designed for high
                                    performance,
                                    customization and user friendliness that allow user to customize multiple
                                    parameters during exam sheet generation such as chapters, patterns, font
                                    type, font spacing & sizing and custom school logos and gives you exam
                                    sheet a customized look and feel.
                                </p>
                            </div>
                        </Col>

                        <Col md="6" className="ms-auto" data-aos="fade-left">
                            <div className="e-learning-img">
                                <img src={eLearningImg} width="100%" alt="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            {/* <!-- E-LEARNING SOLUTION SECTION END --> */}
        </>
    )
}

export default Elearning