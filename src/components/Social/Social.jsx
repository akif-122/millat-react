import React from 'react'
import "./social.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faInstagram, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import "./social.css"
const Social = () => {
    
    return (
        <>
            <ul className="d-flex list-unstyled align-items-center social-links">
                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </>
    )
}

export default Social