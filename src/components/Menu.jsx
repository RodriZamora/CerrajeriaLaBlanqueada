import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Menu = ({ serviciosRef, aboutUsRef, contactRef }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToServicios = () => {
        if (serviciosRef?.current) {
            serviciosRef.current.scrollIntoView({ behavior: 'smooth' })
            setMenuOpen(false);
        }
    }

    const scrollToAboutUs = () => {
        if (aboutUsRef?.current) {
            aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    }

    const scrollToContact = () => {
        if (contactRef?.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    }

    return (
        <div>
            <header className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-4 col-lg-4 d-flex justify-content-start px-lg-5'>
                        <figure className="mb-0">
                            <img src="/cartelLogoOk.webp" alt="imagen cartel" />
                        </figure>
                    </div>
                    <div className='col-8 col-lg-8 d-flex justify-content-end px-lg-5'>
                        <nav className='d-none d-md-flex'>
                            <ul className="d-flex justify-content-center list-unstyled mb-0 gap-4">
                                <li><a href="#" onClick={scrollToAboutUs} className='no-break'>Quienes somos</a></li>
                                <li><a href="#" onClick={scrollToServicios} >Servicios</a></li>
                                <li><a href="#" onClick={scrollToContact}>Contacto</a></li>
                            </ul>
                        </nav>
                        {/* Botón de menú para pantallas pequeñas */}
                        <button
                            className="d-md-none btn btn-outline-primary"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FaBars />
                        </button>



                    </div>
                </div>

            </header>
            {/* {menuOpen && (
                <nav className={`d-md-none ${menuOpen ? 'menu-open' : ''}`}>
                    <ul className="d-flex flex-column align-items-center list-unstyled mb-0 gap-3">
                        <li><a href="#" onClick={scrollToAboutUs} className='no-break'>Quienes somos</a></li>
                        <li><a href="#" onClick={scrollToServicios}>Servicios</a></li>
                        <li><a href="#" onClick={scrollToContact}>Contacto</a></li>
                    </ul>
                </nav>
            )} */}
            {menuOpen && (
                <nav className={`d-md-none menu-open ${menuOpen ? 'open' : 'closed'}`}>
                    <ul className="d-flex flex-column align-items-center list-unstyled mb-0 gap-3">
                        <li><a href="#" onClick={scrollToAboutUs} className='no-break'>Quienes somos</a></li>
                        <li><a href="#" onClick={scrollToServicios}>Servicios</a></li>
                        <li><a href="#" onClick={scrollToContact}>Contacto</a></li>
                    </ul>
                </nav>
            )}
            
        </div>


    );
};

export default Menu;
