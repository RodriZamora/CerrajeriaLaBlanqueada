import { useEffect, useState } from "react";

const GoogleReviewsWidget = () => {

    const [error, setError] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;

        script.onload = () => {
            setError(false);
        }
        script.onerror = () => {
            setError(true);
        }

        document.body.appendChild(script);



        // Cleanup al desmontar el componente
        return () => {
            document.body.removeChild(script);
        };
    }, []);



    return (
        < div className="reseñas-container" >
            <h2 className="h2-reseñas">NUESTROS CLIENTES DICEN 👇</h2>
            {
                error ? (
                    <div className="error-message text-center fw-bold">¡Lo sentimos! No se pudieron cargar las reseñas.</div>
                ) : (
                    /* <div className="elfsight-app-0d0d2c18-ebd5-40fa-909c-3b27dbbc644e" data-elfsight-app-lazy></div> rodri*/
                    < div className="elfsight-app-c022c751-0a55-4292-9b3e-8235a5b5b561" data-elfsight-app-lazy></div> /* max */
                )
            }
        </div >
    );
};

export default GoogleReviewsWidget;