import React, { forwardRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import FotosTrabajos from './FotosTrabajos';

const Servicios = forwardRef((props, ref) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div ref={ref} className='container-fluid services-container'>
            {/*  <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src="/video-cropper.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
            </div> */}

            {/* Contenido */}
            <div className="services-content">
                <h2 className='h2-services'>SERVICIOS</h2>
                <div className='row justify-content-evenly'>
                    <article className='col-12 col-md-4'>
                        <img src="/cerrajeria3Ok.webp" alt="imagen cerrajeria residencial" className='img-fluid' />
                        <h4>Cerrajería Residencial</h4>
                        <p>Para casas y apartamentos</p>
                    </article>

                    <article className='col-12 col-md-4'>
                        <img src="/cerrajeria1Ok.webp" alt="imagen cerrajeria empresas" className='img-fluid' />
                        <h4>Cerrajería Empresas</h4>
                        <p>Para empresas y comercios</p>
                    </article>

                    <article className='col-12 col-md-4'>
                        <img src="/cerrajeriaAutomotrizOk.webp" alt="imagen cerrajeria automotriz" className='img-fluid' />
                        <h4>Cerrajería Automotriz</h4>
                        <p>Para vehículos</p>
                    </article>
                </div>

                <Button className='boton-Services' onClick={() => setShowModal(true)}>
                    Ver algunos trabajos..
                </Button>

                <FotosTrabajos show={showModal} handleClose={() => setShowModal(false)} />
            </div>
        </div>
    );
});

export default Servicios