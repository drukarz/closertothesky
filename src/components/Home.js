import React, { Component } from 'react';
import Navbar from "./Navbar";
import Section from "./Section";
import AboutUs from "./Sections/AboutUs";
import Attractions from "./Sections/Attractions";
import Contact from "./Sections/Contact";
import Gallery from "./Sections/Gallery";
import Offer from "./Sections/Offer";
import Registration from "./Sections/Registration";

import Top from '../assets/images/top_1920x360.jpg';

class Home extends Component{
    render(){

        const offer = <Offer/>
        const about = <AboutUs/>
        const registration = <Registration/>
        const gallery = <Gallery/>
        const attractions = <Attractions/>
        const contact = <Contact/>

        return (
            <div>
                <img src={Top} className="top-width"/>
                <div className="App">
                    <Navbar/>
                    <Section
                        sectionClass="section-1"
                        title="Oferta"
                        subtitle={offer}
                        id="section1"/>
                    <Section
                        sectionClass="section-2"
                        title="O Nas"
                        subtitle={about}
                        id="section2"/>
                    <Section
                        sectionClass="section-3"
                        title="Rezerwacja"
                        subtitle={registration}
                        dark={false}
                        id="section3"/>
                    <Section
                        sectionClass="section-4"
                        title="Galeria"
                        subtitle={gallery}
                        id="section4"/>
                    <Section
                        sectionClass="section-5"
                        title="Atrakcje"
                        subtitle={attractions}
                        dark={false}
                        id="section5"/>
                    <Section
                        sectionClass="section-6"
                        title="Kontakt"
                        subtitle={contact}
                        id="section6"/>
                </div>
            </div>
        );
    }
}

export default Home;