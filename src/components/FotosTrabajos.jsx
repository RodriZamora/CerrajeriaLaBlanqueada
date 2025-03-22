import React from 'react'
import { Modal, Button, Carousel } from 'react-bootstrap'

const FotosTrabajos = ({ show, handleClose }) => {

    const imagenes = [
        "/1Ok.webp",
        "/2Ok.webp",
        "/3Ok.webp",
        "/4Ok.webp",
        "/5Ok.webp",
        "/6Ok.webp",
        "/7Ok.webp",
        "/8Ok.webp",
        "/9Ok.webp"
    ]

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Algunos de nuestros trabajos
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel>
                    {imagenes.map((img, index) => (
                        <Carousel.Item key={index}>
                            <img src={img} alt={`Trabajo ${index + 1}`} className="d-block w-100 img-fluid" />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FotosTrabajos