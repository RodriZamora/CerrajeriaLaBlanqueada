import React, { useRef } from 'react'
import Menu from './Menu'
import Banner from './Banner'
import Servicios from './Services';
import Contacto from './Contact';
import GoogleReviewsWidget from './GoogleReviewsWidget';
import AboutUs from './AboutUs';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

function Contenido() {

    const serviciosRef = useRef(null);
    const aboutUsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Menu serviciosRef={serviciosRef} aboutUsRef={aboutUsRef} contactRef={contactRef}></Menu>
            <Banner serviciosRef={serviciosRef}></Banner>
            <Servicios ref={serviciosRef}></Servicios>
            <AboutUs ref={aboutUsRef}></AboutUs>
            <GoogleReviewsWidget></GoogleReviewsWidget>
            <Contacto ref={contactRef}></Contacto>
            <Footer></Footer>
            <WhatsAppButton></WhatsAppButton>
        </>

    )
}

export default Contenido