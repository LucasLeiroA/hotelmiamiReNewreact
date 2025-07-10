import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReservaModal from '../../components/FormReservation/ReservaModal';
import recepcion1 from '../../assets/images/recepceion2New.webp';
import recepcion2 from '../../assets/images/recepcion1New.webp';
import recepcion3 from '../../assets/images/recepcion3new.webp';
import recepcion4 from '../../assets/images/recepcion4New.webp';

const Home = () => {
  const images = [recepcion2, recepcion3, recepcion4];
  const [index, setIndex] = useState(0);
  const [abrirModalReserva, setAbrirModalReserva] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="flex flex-wrap justify-between items-stretch gap-8 px-6 md:px-12 py-16 bg-white" data-aos="fade-up">
        <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-4">
          <h2 className="text-4xl font-bold text-[#1E202D] tracking-wide">Bienvenido a Hotel Miami</h2>
          <h3 className="text-2xl font-medium text-[#1E202D]">Sentite como en casa, lejos de casa</h3>
          <p className="text-base text-[#50536B] leading-relaxed">
            Te damos la bienvenida a nuestro hotel, donde el confort y la calidez del norte argentino se combinan para brindarte una estadía inolvidable.
            Ubicado en pleno centro de San Miguel de Tucumán, Hotel Miami es el lugar ideal para descansar, trabajar o descubrir la ciudad.
          </p>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setAbrirModalReserva(true)}
              className="relative inline-block px-6 py-3 font-semibold text-white bg-gradient-to-br from-[#3D405B] to-[#2C2F4A] rounded-md overflow-hidden hover:from-[#f2cc8f] hover:to-[#f2cc8f] transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">RESERVA AHORA</span>
            </button>
          </div>
        </div>

        <div className="flex-1 min-w-[300px] flex justify-center" data-aos="zoom-in">
          <img
            src={recepcion1}
            alt="Hotel Miami"
            className="max-h-[70vh] object-contain w-full rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* CARRUSEL + SOBRE NOSOTROS */}
      <div className="flex flex-col md:flex-row justify-between gap-8 px-6 md:px-12 py-16 bg-white">
        {/* Carrusel */}
        <section className="w-full md:w-1/2" data-aos="fade-right">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`Imagen ${index + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>

            <button
              onClick={() => setIndex((index - 1 + images.length) % images.length)}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-[#f2cc8f] text-black rounded-full w-10 h-10 text-2xl flex items-center justify-center transition cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={() => setIndex((index + 1) % images.length)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-[#f2cc8f] text-black rounded-full w-10 h-10 text-2xl flex items-center justify-center transition cursor-pointer"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === index ? "bg-[#f2cc8f]" : "bg-white/50"
                  } transition cursor-pointer`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Sobre nosotros */}
        <section className="w-full md:w-1/2 flex flex-col gap-4 justify-center" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-[#1E202D]">Sobre Nosotros</h2>
          <h3 className="text-xl text-[#1E202D] font-medium">Hospitalidad con historia</h3>
          <p className="text-[#50536B] leading-relaxed">
            Desde hace más de 20 años, el Hotel Miami recibe a viajeros de todo el país y el mundo...
          </p>
          <p className="text-[#50536B] leading-relaxed">
            Ubicado en el corazón de San Miguel de Tucumán, a tan solo siete cuadras de la Plaza Independencia...
          </p>
          <p className="text-[#50536B] leading-relaxed">
            Ya sea que vengas por turismo, trabajo o simplemente a desconectar...
          </p>
          <p className="text-[#50536B] leading-relaxed">
            En Hotel Miami, creemos que cada estadía es una oportunidad para crear recuerdos...
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="/contactanos"
              className="relative inline-block px-6 py-3 font-semibold text-white bg-gradient-to-br from-[#3D405B] to-[#2C2F4A] rounded-md overflow-hidden hover:from-[#f2cc8f] hover:to-[#f2cc8f] transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">CONTACTANOS</span>
            </a>
          </div>
        </section>
      </div>

      {/* TESTIMONIOS */}
      <section className="w-full bg-gray-100 py-12 flex justify-center" data-aos="fade-up">
        <div className="w-full max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E202D] mb-6">Testimonios</h2>
          <div className="elfsight-app-dad592c3-4237-4ede-9f91-954d4235bd55" data-elfsight-app-lazy></div>
        </div>
      </section>

      {abrirModalReserva && (
        <ReservaModal onClose={() => setAbrirModalReserva(false)} />
      )}
    </>
  );
};

export default Home;
