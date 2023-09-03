import React from 'react'
import "./portfolio.css"

import Event from '../../../../components/Event/Event'
import {Container, Row } from 'react-bootstrap'

import pt1 from "../../../../assets/images/p1.jpg";
import pt2 from "../../../../assets/images/p2.jpg"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SlideCard from '../../../../components/SlideCard/SlideCard';


const Portfolio = () => {

    const cardData = [
        {
            img: pt1,
            heading: "Late Managing Director",
            text: "Assign Tasks, Developing text books Responsible for finalizing textbooks."
        },

        {
            img: pt2,
            heading: "Late Managing Director",
            text: "Assign Tasks, Developing text books Responsible for finalizing textbooks."
        },

        {
            img: pt1,
            heading: "Late Managing Director",
            text: "Assign Tasks, Developing text books Responsible for finalizing textbooks."
        },

        {
            img: pt2,
            heading: "Late Managing Director",
            text: "Assign Tasks, Developing text books Responsible for finalizing textbooks."
        },

        {
            img: pt1,
            heading: "Late Managing Director",
            text: "Assign Tasks, Developing text books Responsible for finalizing textbooks."
        },

        {
            img: pt2,
            heading: "Late Managing Director",
            text: "Assign Tasks, Developing text books Responsible for finalizing textbooks."
        },
    ]

    return (
        <>
            {/* <!-- PORTFOLIO SECTION START --> */}
            <section className="portfolio">
                <Event eventHeading={"Portfolio"} />

                <Container>
                    

                        <OwlCarousel
                            className="owl-theme p-slider p-cards"
                            loop
                            dots
                            dotsEach
                            autoPlay
                            autoplayTimeout={3000}
                            autoplaySpeed={800}
                            margin={15}
                            responsive={
                                {
                                    0: {
                                        items: 1
                                    },
                                    575: {
                                        items: 2,
                                    },
                                    768: {
                                        items: 3,
                                    },
                                    1200: {
                                        items: 4,
                                    }
                                }
                            }

                        >

                           <SlideCard cardData={cardData} />

                           

                        </OwlCarousel>
                </Container>

            </section>
            {/* <!-- PORTFOLIO SECTION END --> */}
        </>
    )
}

export default Portfolio