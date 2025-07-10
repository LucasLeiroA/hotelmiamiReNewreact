import { useState, useEffect } from "react";
import img1 from "../../assets/images/habitaciones1.webp";
import img2 from "../../assets/images/habitaciones4.webp";
import img3 from "../../assets/images/habitaciones3.webp";
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
  {
    title: "Departamentos Familiares",
    description:
      "Amplios y equipados para brindar comodidad a toda la familia. Sentite como en casa durante tus vacaciones o viajes de negocios.",
    image: img3,
  },
];

const Habitaciones = () => {
  const [abrirModalReserva, setAbrirModalReserva] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-[90%] mx-auto py-10 font-['Roboto']">
      {/* HERO */}
      <motion.section
        className="text-center mb-12"
        data-aos="fade-up"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-[#1e202d]">Habitaciones</h3>
        <p className="max-w-3xl mx-auto mt-4 text-[#50536B] leading-relaxed text-lg">
          Descubrí nuestras {" "}
          <span className="text-[#f2cc8f] font-semibold">acogedoras habitaciones</span>, ideales para tu estadía. Ya sea que estés aquí por {" "}
          <span className="text-[#f2cc8f] font-semibold">negocios</span> o por {" "}
          <span className="text-[#f2cc8f] font-semibold">placer</span>, disfrutá de nuestra {" "}
          <span className="text-[#f2cc8f] font-semibold">hospitalidad</span> y {" "}
          <span className="text-[#f2cc8f] font-semibold">comodidades</span>.
        </p>
        <div className="mt-6">
          <button
            onClick={() => setAbrirModalReserva(true)}
            className="bg-[#3D405B] hover:bg-[#2c2f48] text-white px-6 py-3 rounded-md transition duration-300 cursor-pointer shadow-md hover:shadow-lg"
          >
            RESERVA AHORA
          </button>
        </div>
      </motion.section>

      {/* GRILLA */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {habitaciones.map((item, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <figcaption className="p-4">
              <h2 className="text-xl font-bold text-[#1e202d] mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-[#50536B] leading-relaxed">
                {item.description.split(/(comodidad|funcionalidad|acogedor|equipados|placentero|vacaciones|negocios)/gi).map((text, index) => {
                  const highlights = ["comodidad", "funcionalidad", "acogedor", "equipados", "placentero", "vacaciones", "negocios"];
                  return highlights.includes(text.toLowerCase()) ? (
                    <span key={index} className="text-[#f2cc8f] font-semibold">{text}</span>
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
