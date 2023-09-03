import React from 'react'
import Liberary from './sections/Liberary/Liberary'
import Elearning from './sections/eLearning/Elearning'
import Participation from './sections/Participation/Participation'
import UpComingEvent from './sections/UpComingEvent/UpComingEvent'
import NewsEnvet from './sections/NewsEvent/NewsEnvet'
import Contact from './sections/Contact/Contact'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Header from '../../components/Header/Header'
const Home = () => {
    const headerText = {
        subHeading: "The Best Publishing",
        heading: "WELCOME TO MILLAT PUBLISHERS",
        textTop: "",
        textBottom: "Education is our Passion",
        btnText: "Read More",
        btnLink: "#"
    }
    return (
        <>
            <Navbar />
            <Header headerText={headerText} />
            <Liberary />
            <Elearning />
            <Participation />
            <UpComingEvent />
            <NewsEnvet />
            <Contact />
            <Footer />
        </>
    )
}

export default Home