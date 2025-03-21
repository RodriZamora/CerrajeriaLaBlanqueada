import React from 'react';

function Banner({ serviciosRef }) {

    const scrollToServicios = () => {
        if (serviciosRef.current) {
            serviciosRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="banner-content container-fluid d-flex align-items-center">
            <div className='row w-100 text-center'>
                <div className="col-12">
                    <h1 className="title-abrimosPuertas">TU SEGURIDAD</h1>
                </div>
                <div className="col-12">
                    <h1 className="title-cerramosPreocupaciones">NUESTRA PRIORIDAD</h1>
                </div>
                <div className="col-12 boton-banner">
                    <button onClick={scrollToServicios}>
                        Conocé nuestros servicios
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
