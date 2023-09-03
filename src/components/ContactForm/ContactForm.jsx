import React from 'react'
import "./contactForm.css"

import { Form } from 'react-bootstrap'
import Button from "../Button/Button";
const ContactForm = () => {
    return (
        <>
            <div className="contact-form">
                <h5>Contact Us</h5>
                <form action="">
                    <Form.Group>
                        <Form.Control type='text' placeholder='Name' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='email' placeholder='Email' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as='textarea' rows={10} placeholder='Message' />
                    </Form.Group>

                    

                    <div className="contact-btn d-flex justify-content-end">
                        <Button text="Submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm