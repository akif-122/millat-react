import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./liberary.css";

import icon1 from "../../../../assets/images/icon1.PNG" 
import icon2 from "../../../../assets/images/icon2.PNG" 
import icon3 from "../../../../assets/images/icon3.PNG" 
import icon4 from "../../../../assets/images/icon4.PNG" 
import LiberaryCard from '../../../../components/liberaryCard/LiberaryCard';

const Liberary = () => {

    const CardData = [
        {
            icon : icon1,
            title: "EDUCATUM",
            text: "According to the carucilum of 2022-23 Board of KPK"
        },
        {
            icon : icon2,
            title: "PRIME",
            text: "According to the carucilum of 2022-23 Board of KPK in small Size"
        },
        {
            icon : icon3,
            title: "RESOURCE MATERIALS",
            text: "According to the carucilum of 2022 Board of KPK in small Size"
        },
        {
            icon : icon4,
            title: "TRAININGS",
            text: "Training session of Mutaleaq Quran & Educatum Series"
        }
    ]
    
    return (
        <>
            {/* <!-- LEARNING LIBERARY SECTION START --> */}
            <section className="liberary">
                <div className="liberary-heading">
                    <h2 data-aos="fade-down">OUR <span>LEARNING</span> LIBRARY</h2>
                    <p data-aos="fade-up">We have 4 Series of our Publishing for KPK and more Provinces
                        of Pakistan. That have powerful Items </p>
                </div>

                <Container className="container">
                    <Row className="lib-cards">
                        <LiberaryCard CardData={CardData} />
                    </Row>
                </Container>

            </section>
            {/* <!-- LEARNING LIBERARY SECTION END --> */}

            

        </>
    )
}

export default Liberary