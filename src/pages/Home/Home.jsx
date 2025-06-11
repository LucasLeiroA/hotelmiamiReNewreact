import './Home.css';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReservaModal from '../../components/FormReservation/ReservaModal';
import recepcion1 from '../../assets/images/recepceion2New.webp';
import recepcion2 from '../../assets/images/recepcion1New.webp';
import recepcion3 from '../../assets/images/recepcion3new.webp';
import recepcion4 from '../../assets/images/recepcion4New.webp';

const Home = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.setAttribute('data-use-service-core', '');
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    const images = [recepcion2, recepcion3, recepcion4];
    const [abrirModalReserva, setAbrirModalReserva] = useState(false);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);


    return (
        <>
            <section className="hero">
                <div>
                    <div className="welcome">
                        <h2>Bienvenido a Hotel Miami</h2>
                    </div>
                    <h3>Sentite como en casa, lejos de casa</h3>
                    <p>
                        Te damos la bienvenida a nuestro hotel, donde el confort y la calidez del norte argentino se combinan para brindarte una estadía inolvidable.
                        Ubicado en pleno centro de San Miguel de Tucumán, Hotel Miami es el lugar ideal para descansar, trabajar o descubrir la ciudad.
                        Disfrutá de habitaciones modernas, atención personalizada y una ubicación estratégica a pasos de todo.
                    </p>
                    <div className="book-now">
                        <button className="reserva-btn" onClick={() => setAbrirModalReserva(true)}>
                            <span>RESERVA AHORA</span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={recepcion1} alt="Hotel Miami" />
                </div>
            </section>

            <div className="flex-container">
                <section className="flex-tools w-full md:w-1/2">
                    <div className="carousel-container">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                src={images[index]}
                                alt={`Imagen ${index + 1}`}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="carousel-image"
                            />
                        </AnimatePresence>

                        <button
                            onClick={() => setIndex((index - 1 + images.length) % images.length)}
                            className="carousel-button prev"
                            aria-label="Anterior"
                        >
                            ‹
                        </button>

                        <button
                            onClick={() => setIndex((index + 1) % images.length)}
                            className="carousel-button next"
                            aria-label="Siguiente"
                        >
                            ›
                        </button>

                        <div className="carousel-dots">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`dot ${i === index ? 'active' : ''}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </section>


                <section className="flex-tools">
                    <div className="intro">
                        <div className="welcome">
                            <h2>Sobre Nosotros</h2>
                        </div>
                        <h3>Hospitalidad con historia</h3>
                        <p>
                            Desde hace más de 20 años, el Hotel Miami recibe a viajeros de todo el país y el mundo,
                            brindando una experiencia familiar, segura y placentera. Nuestro equipo trabaja día a día
                            para hacerte sentir en casa, estés donde estés.
                        </p>
                        <p>
                            Ubicado en el corazón de San Miguel de Tucumán, a tan solo siete cuadras de la Plaza Independencia,
                            el hotel combina una atención cálida y personalizada con instalaciones modernas y confortables.
                            Cada una de nuestras habitaciones está diseñada para ofrecer el máximo descanso, con servicios
                            como aire acondicionado, TV por cable, Wi-Fi gratuito y baño privado.
                        </p>
                        <p>
                            Ya sea que vengas por turismo, trabajo o simplemente a desconectar, vas a encontrar en nosotros
                            el equilibrio justo entre precio, comodidad y ubicación estratégica. Nos enorgullece que nuestros
                            huéspedes valoren especialmente la limpieza, la tranquilidad del lugar y el trato cordial del personal.
                        </p>
                        <p>
                            En Hotel Miami, creemos que cada estadía es una oportunidad para crear recuerdos. Te invitamos
                            a conocernos y a formar parte de esta gran familia de viajeros que nos eligen año tras año.
                        </p>

                        <div className="contact-us">
                            <a href="/contactanos">
                                <span>CONTACTANOS</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>



            <div className="floaters">
                <div className="w-90">
                    <div className="welcome">
                        <h2>Testimonios</h2>
                    </div>
                    <div className="elfsight-app-dad592c3-4237-4ede-9f91-954d4235bd55" data-elfsight-app-lazy></div>
                </div>
            </div>

            {abrirModalReserva && (
                <ReservaModal onClose={() => setAbrirModalReserva(false)} />
            )}



        </>
    );
};

export default Home;
