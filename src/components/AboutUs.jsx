import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const AboutUs = forwardRef((prop, ref) => {
    return (
        <div ref={ref} className='container-aboutUs'>
            <section className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <motion.h2
                            className='h2-aboutUs'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            ¿QUIÉNES SOMOS?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                        >
                            Más de 40 años brindando confianza y seguridad en Montevideo
                        </motion.p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            En <strong>Cerrajería La Blanqueada</strong>, sabemos que la seguridad y la confianza son fundamentales cuando se trata de cerrajería.
                            Con más de 40 años de experiencia en Montevideo, nos hemos consolidado como una cerrajería reconocida por nuestro profesionalismo,
                            compromiso y atención de calidad.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, delay: 0.2 }}
                        >
                            Contamos con un equipo de cerrajeros altamente capacitados, en constante formación, para ofrecerte soluciones modernas y eficientes.
                            Nos especializamos en la apertura de puertas, cambio y reparación de cerraduras, instalación de sistemas de seguridad y otros servicios
                            relacionados, siempre utilizando las mejores herramientas y técnicas disponibles.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.0 }}>
                            Compromiso con la seguridad y la satisfacción del cliente
                            Nuestro objetivo es brindarte tranquilidad y un servicio confiable. Trabajamos con
                            responsabilidad y rapidez, garantizando soluciones seguras para hogares, comercios y
                            vehículos. Además, contamos con un servicio de cerrajería de emergencia disponible las
                            24 horas para atenderte en situaciones urgentes cuando más lo necesites.

                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.2, delay: 0.2 }}>
                            En Cerrajería La Blanqueada, nos distinguimos por ofrecer precios accesibles y presupuestos
                            transparentes, asegurando que nuestros clientes siempre sepan el costo de cada servicio antes
                            de realizar cualquier intervención.
                        </motion.p>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <motion.p
                        className="fw-bold"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5 }}
                    >
                        Cerrajería La Blanqueada - &nbsp;
                        <span className='spanAboutUs'>
                            <span className="text-primary">Tu seguridad,&nbsp;</span>
                            <span className='text-danger'>nuestra prioridad.</span>
                        </span>
                    </motion.p>
                </div>
            </section>
        </div>
    );
});


export default AboutUs;


