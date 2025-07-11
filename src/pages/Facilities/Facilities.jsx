import { useEffect, useState } from "react";
import habitaciones from "../../assets/images/habitaciones3.webp";
import pileta from "../../assets/images/fotoPiletaNew.webp";
import cochera from "../../assets/images/cochera1.webp";
import ReservaModal from "../../components/FormReservation/ReservaModal";
import AOS from "aos";

const data = [
	{
		title: "Habitaciones Cómodas",
		subtitle: "Habitaciones",
		image: habitaciones,
		content: `Sumergite en el confort y calidez de nuestras habitaciones cómodas, diseñadas para brindarte una experiencia relajante en pleno corazón de Tucumán. Cada espacio ha sido cuidadosamente ambientado para combinar funcionalidad con estilo, pensando en los viajeros exigentes que buscan algo más que un lugar donde dormir.`,
	},
	{
		title: "Piscina en la Terraza",
		subtitle: "Piscina",
		image: pileta,
		content: `Descubrí nuestra piscina en la terraza, un espacio exclusivo con vistas panorámicas al centro de Tucumán. Diseñada para ofrecer una experiencia relajante y memorable, es el lugar ideal para desconectar y sumergirte en un entorno de tranquilidad y confort.`,
	},
	{
		title: "Servicio de Cochera Interna",
		subtitle: "Cochera Interna",
		image: cochera,
		content: `Contamos con un servicio de cochera interna disponible las 24 horas, pensado para ofrecerte mayor comodidad y seguridad durante tu estadía. Mantené tu auto protegido y siempre accesible mientras disfrutás de tu visita.`,
	},
];

const Facilities = () => {
	const [abrirModalReserva, setAbrirModalReserva] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	return (
		<div className="w-[90%] mx-auto flex flex-col gap-20 mb-24 font-['Roboto']">
			{/* Hero Section */}
			<section className="text-center py-20" data-aos="fade-up">
				<h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
					Instalaciones pensadas para tu bienestar
				</h3>
				<p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
					En <span className="text-[#f2cc8f] font-semibold">Hotel Miami</span>, cada rincón está diseñado para ofrecerte una{" "}
					<span className="text-[#f2cc8f] font-semibold">experiencia cómoda</span>,{" "}
					<span className="text-[#f2cc8f] font-semibold">moderna</span> y{" "}
					<span className="text-[#f2cc8f] font-semibold">acogedora</span>. Descubrí todos los servicios que tenemos preparados para vos.
				</p>
				<button
					onClick={() => setAbrirModalReserva(true)}
					className="mt-8 bg-[#3D405B] text-white px-8 py-3 rounded-md hover:bg-[#2c2f48] transition duration-300 cursor-pointer text-lg"
				>
					RESERVA AHORA
				</button>
			</section>

			{/* Facilities Sections */}
			{data.map((item, index) => (
				<div
					key={index}
					className={`flex flex-col-reverse lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
						} items-center gap-12`}
					data-aos="fade-up"
				>
					{/* Text Content */}
					<div className="flex-1">
						<h4 className="text-[#f2cc8f] text-base md:text-lg font-semibold mb-2 uppercase tracking-wide">
							{item.subtitle}
						</h4>
						<h2 className="text-2xl md:text-4xl font-bold text-[#1E202D] mb-4">
							{item.title}
						</h2>
						<p className="text-gray-600 text-base leading-relaxed">
							{item.content}
						</p>
					</div>

					{/* Image */}
					<div className="flex-1 max-w-[600px] w-full overflow-hidden rounded-lg shadow-lg">
						<img
							src={item.image}
							alt={item.title}
							className="w-full h-[400px] object-cover rounded-lg transition-transform duration-500 hover:scale-105 cursor-pointer"
						/>
					</div>
				</div>
			))}
			{abrirModalReserva && (
				<ReservaModal onClose={() => setAbrirModalReserva(false)} />
			)}
		</div>
	);
};

export default Facilities;
