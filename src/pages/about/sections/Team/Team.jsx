import React from 'react'
import "./team.css"

import Event from '../../../../components/Event/Event'
import SlideCard from '../../../../components/SlideCard/SlideCard'

import pt1 from "../../../../assets/images/p1.jpg";
import pt2 from "../../../../assets/images/p2.jpg"



import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Team = () => {

    const cardData = [
        {
            img: pt1,
            heading: "Graphic Designer",
            text: "Assign Tasks, Developing text books Responsible for finalizing textbooks."
        },

        {
            img: pt2,
            heading: "Zonal Head",
            text: "Assign Tasks, Developing text books Responsible for finalizing textbooks."
        },

        {
            img: pt1,
            heading: "Graphic Designer",
            text: "Assign Tasks, Developing text books Responsible for finalizing textbooks."
        },

        {
            img: pt2,
            heading: "Zonal Head",
            text: "Assign Tasks, Developing text books Responsible for finalizing textbooks."
        },

      
        

        
    ]
    
    return (
        <>
            {/* <!-- TEAM SECTION START --> */}
            <section className="portfolio">
                <Event eventHeading={"Our Team"} />
                <div className="container">
                    <OwlCarousel className="owl-theme p-slider p-cards"
                            loop
                            dots
                            dotsEach
                            autoPlay
                            autoplayTimeout={3000}
                            autoplaySpeed={800}
                            margin={40}
                            responsive={
                                {
                                    0: {
                                        items: 1
                                    },
                                    
                                    768: {
                                        items: 3,
                                    },
                                    1200: {
                                        items: 3,
                                    }
                                }
                            }>
                        <SlideCard cardData={cardData} />
                    </OwlCarousel>
                </div>


            </section>
            {/* <!-- TEAM SECTION END --> */}
        </>
    )
}

export default Team