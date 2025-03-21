import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';

const UbicacionMaps = () => {

    const [isLoading, setIsLoading] = useState(true);
    const linkMaps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.2340403627145!2d-56.16100462430242!3d-34.87546887190055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f814eb4261da3%3A0x23eb3c729f136500!2sCerrajer%C3%ADa%20La%20Blanqueada!5e0!3m2!1ses!2suy!4v1741046599217!5m2!1ses!2suy";

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        < div className="mt-4 position-relative" >
            {
                isLoading && (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                        <Spinner animation="border" variant="primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </Spinner>
                    </div>
                )
            }
            <iframe
                title="Google Maps"
                src={linkMaps}
                width="100%"
                height="400px"
                className={`fade-in ${!isLoading ? 'show' : ''}`}
                style={{ border: 0, display: isLoading ? 'none' : 'block' }}
                allowFullScreen=""
                loading="lazy"
                onLoad={() => setIsLoading(false)}
            />

        </div >
    )
};

export default UbicacionMaps
