import React from "react"
import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
    const numeroWpp = '59898346119'
    const whatsappMessage = "Hola, me gustaría obtener más información sobre..";
    const whatsappLink = `https://wa.me/${numeroWpp}?text=${encodeURIComponent(whatsappMessage)}`;


    return (
        <a href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button">
            <FaWhatsapp size={40}></FaWhatsapp>
        </a>
    )

};

export default WhatsAppButton;