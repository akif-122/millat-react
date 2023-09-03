import React from 'react'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar"
import Story from './sections/story/Story';
import Portfolio from './sections/portfolio/Portfolio';
import Team from './sections/Team/Team';
import Service from './sections/service/Service';
import Footer from "../../components/Footer/Footer"

const About = () => {
    const headerText = {
        subHeading: "",
        heading: "WE ARE HERE",
        textTop: "Improving Education",
        textBottom: "",
        btnText: "Read More",
        btnLink: "#"
    }
    return (
        <>
            <Navbar/>
            <Header headerText={headerText} />
            <Story/>
            <Portfolio/>
            <Team/>
            <Service/>
            <Footer/>
        </>
    )
}

export default About