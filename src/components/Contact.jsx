import React, { forwardRef, /* useState */ } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import UbicacionMaps from './UbicacionMaps';

const Contact = forwardRef((prop, ref) => {

  //const [showMap, setShowMap] = useState(false);
  const whatsappNumber = "59898346119";
  const whatsappMessage = "Hola, me gustaría obtener más información sobre..";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Container ref={ref} fluid className=" px-5 contact-Container">
      <Row className="align-items-center">
        {/* Sección de "Contactanos" */}
        <Col lg={8} md={12} sm={12} className="text-center p-4">
          <h2>Contactanos</h2>
          <p className="py-2">
            ¿Tienes alguna pregunta, necesitas un presupuesto o más información sobre nuestros productos y servicios? <br/>
            Envíanos un mensaje y te responderemos lo antes posible.
          </p>
          
          <Button variant="success" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Escríbenos por WhatsApp
          </Button>

          <UbicacionMaps />
          <a className='verGoogleMaps'
            href="https://www.google.com/maps?q=Cerrajería+La+Blanqueada"
            target='_blank'
            rel="noopener noreferrer">
            Ver en Google Maps
          </a>

        </Col>

        {/* Sección de "Información" */}
        <Col lg={4} md={12} sm={12} className="p-4 text-center">
          <h2 className='pb-4'>Información</h2>
          <Row className="g-3">
            <Col lg={12} md={4} sm={4} xs={6}>
              <article className="d-flex align-items-center gap-3">
                <FaPhone style={{ color: 'red' }} size={24} />
                <div>
                  <h5>Teléfonos</h5>
                  <p className='mb-1 pb-1 no-bold'>+598 98 346 119</p>
                  <p className='no-bold'>2487 8973</p>
                </div>
              </article>
            </Col>

            <Col lg={12} md={4} sm={4} xs={6}>
              <article className="d-flex align-items-center gap-3">
                <FaClock style={{ color: 'red' }} size={24} />
                <div>
                  <h5>Horario</h5>
                  <p className='mb-1 pb-1 no-bold'>Lunes a Viernes de 9 a 18 horas </p>
                  <p className='no-bold'>Sábado de 9 a 13 horas </p>
                </div>
              </article>
            </Col>

            <Col lg={12} md={4} sm={4} xs={12}>
              <article className="d-flex align-items-center gap-3">
                <FaMapMarkerAlt style={{ color: 'red' }} size={24} />
                <div>
                  <h5>Ubicación</h5>
                  <p className='no-bold'>Montevideo, Uruguay</p>
                </div>
              </article>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );

});

export default Contact;
