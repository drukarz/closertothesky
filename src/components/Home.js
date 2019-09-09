import React, { Component } from 'react';
import Navbar from "./Navbar";
import Section from "./Section";
import AboutUs from "./Pages/AboutUs";
import Attractions from "./Pages/Attractions";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Offer from "./Pages/Offer";
import Registration from "./Pages/Registration";

import Top from '../assets/images/TOP_1920x280.jpg';

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
                        title="Oferta"
                        subtitle={offer}
                        dark={true}
                        id="section1"/>
                    <Section
                        title="O Nas"
                        subtitle={about}
                        dark={false}
                        id="section2"/>
                    <Section
                        title="Rezerwacja"
                        subtitle={registration}
                        dark={true}
                        id="section3"/>
                    <Section
                        title="Galeria"
                        subtitle={gallery}
                        dark={false}
                        id="section4"/>
                    <Section
                        title="Atrakcje"
                        subtitle={attractions}
                        dark={true}
                        id="section5"/>
                    <Section
                        title="Kontakt"
                        subtitle={contact}
                        dark={false}
                        id="section6"/>
                </div>
            </div>
        );
    }
}

export default Home;