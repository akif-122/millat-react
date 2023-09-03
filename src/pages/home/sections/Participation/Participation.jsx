import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';

import "./participation.css";
import Button from '../../../../components/Button/Button';
import ptImage from "../../../../assets/images/pt-bg.png"
const Participation = () => {
    return (
        <>

            {/* <!-- PARTICIPATION SECTION START --> */}
            <section className="participate">
                <Container>
                    <Row className="align-items-center">

                        <Col md="6" className="px-xl-5">
                            <div className="pt-content">
                                <h3 data-aos="fade-down">PARTICIPATION</h3>
                                <p data-aos="zoom-out">Yearly and Monthly Events held by our seniors and KP education
                                    Members</p>

                                <h5 data-aos="fade-up">TO PARTICIPATE INTER DETAILS</h5>

                                <form action="">

                                    <Form.Group>
                                        <Form.Control type='text' placeholder='Name' />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control type='text' placeholder='Address' />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control type='number' placeholder='Mobile' />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control type='email' placeholder='Email' />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control type='text' placeholder='Remarks' />
                                    </Form.Group>

                                    <div className="pt-btn" data-aos="zoom-out">
                                        <Button text={"Submit"} />
                                    </div>

                                </form>

                            </div>
                        </Col>

                        <Col md="5" className="ms-auto" data-aos="fade-left">
                            <div className="pt-image">
                                <img src={ptImage} width="100%" alt="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            {/* <!-- PARTICIPATION SECTION END --> */}

        </>
    )
}

export default Participation