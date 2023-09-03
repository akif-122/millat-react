import React from 'react'
import "./header.css"
const Header = ({ headerText }) => {
    return (
        <>
            {/* <!-- HEADER SECTION START --> */}
            <header id="header">
                <div class="header-content text-center">

                    {
                        headerText.subHeading ? <h4 data-aos="fade-down">{headerText.subHeading}</h4>
                            : null

                    }

                    {
                        headerText.textTop ? <p data-aos="fade-up">{headerText.textTop}</p>
                            : null
                    }

                    <h1 data-aos="fade-right">{headerText.heading}</h1>
                    {
                        headerText.textBottom ? <p data-aos="fade-up">{headerText.textBottom}</p>
                            : null
                    }

                    <div class="header-btn text-center" data-aos="zoom-in">
                        <a href={headerText.btnLink}>{headerText.btnText}</a>
                    </div>
                </div>
            </header>
            {/* <!-- HEADER SECTION END --> */}
        </>
    )
}

export default Header