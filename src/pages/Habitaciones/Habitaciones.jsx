import { useState, useEffect } from "react";
import img1 from "../../assets/images/habitaciones1.webp";
import img2 from "../../assets/images/habitaciones4.webp";
import ReservaModal from "../../components/FormReservation/ReservaModal";
import AOS from "aos";
import { motion } from "framer-motion";

const habitaciones = [
  {
    title: "Habitaciones Estándar",
    description:
      "Diseñadas para ofrecerte comodidad y funcionalidad durante tu estadía. Equipadas con todo lo necesario para un descanso placentero.",
    image: img1,
  },
  {
    title: "Habitaciones Dobles",
    description:
      "Ideales para parejas o amigos. Ofrecen un diseño acogedor y todas las comodidades necesarias.",
    image: img2,
  },
];

const Habitaciones = () => {
  const [abrirModalReserva, setAbrirModalReserva] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-[90%] mx-auto py-12 font-['Roboto']">
      <motion.section
        className="text-center mb-14"
        data-aos="fade-up"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-bold text-[#1e202d] mb-4">Habitaciones</h3>
        <p className="max-w-2xl mx-auto text-[#50536B] leading-relaxed text-lg">
          Descubrí nuestras{" "}
          <span className="text-[#f2cc8f] font-semibold">
            acogedoras habitaciones
          </span>, ideales para tu estadía. Ya sea que estés aquí por{" "}
          <span className="text-[#f2cc8f] font-semibold">negocios</span> o por{" "}
          <span className="text-[#f2cc8f] font-semibold">placer</span>, disfrutá de nuestra{" "}
          <span className="text-[#f2cc8f] font-semibold">hospitalidad</span> y{" "}
          <span className="text-[#f2cc8f] font-semibold">comodidades</span>.
        </p>

        <button
          onClick={() => setAbrirModalReserva(true)}
          className="mt-6 px-6 py-3 bg-[#3D405B] hover:bg-[#2c2f48] text-white font-semibold rounded-lg shadow-md transition duration-300 cursor-pointer"
        >
          RESERVA AHORA
        </button>
      </motion.section>

      <section className="flex flex-wrap justify-center gap-8">
        {habitaciones.map((item, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <figcaption className="p-5">
              <h2 className="text-2xl font-bold text-[#1e202d] mb-3">
                {item.title}
              </h2>
              <p className="text-sm text-[#50536B] leading-relaxed">
                {item.description.split(
                  /(comodidad|funcionalidad|acogedor|equipados|placentero|vacaciones|negocios)/gi
                ).map((text, index) => {
                  const highlights = [
                    "comodidad",
                    "funcionalidad",
                    "acogedor",
                    "equipados",
                    "placentero",
                    "vacaciones",
                    "negocios",
                  ];
                  return highlights.includes(text.toLowerCase()) ? (
                    <span
                      key={index}
                      className="text-[#f2cc8f] font-semibold"
                    >
                      {text}
                    </span>
                  ) : (
                    <span key={index}>{text}</span>
                  );
                })}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </section>

      {abrirModalReserva && (
        <ReservaModal onClose={() => setAbrirModalReserva(false)} />
      )}
    </div>
  );
};

export default Habitaciones;
