import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
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
		<div className="font-['Poppins']">
			{/* HERO */}
			<section className="flex flex-wrap justify-between items-center gap-12 px-6 md:px-12 py-20 bg-white" data-aos="fade-up">
				<motion.div
					className="flex-1 min-w-[300px] flex flex-col justify-center gap-5"
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-[#1E202D] tracking-wide leading-tight">
						Bienvenido a <span className="text-[#f2cc8f]">Hotel Miami</span>
					</h2>
					<h3 className="text-2xl md:text-3xl font-medium text-[#3D405B] italic">
						Sentite como en casa, lejos de casa
					</h3>
					<p className="text-base md:text-lg text-[#50536B] leading-relaxed">
						Te damos la bienvenida a nuestro hotel, donde el confort y la calidez del norte argentino se combinan para brindarte una estadía inolvidable.
						Ubicado en pleno centro de San Miguel de Tucumán, Hotel Miami es el lugar ideal para descansar, trabajar o descubrir la ciudad.
					</p>
			

					<button
						onClick={() => setAbrirModalReserva(true)}
						className="mt-6 bg-[#3D405B] hover:bg-[#2c2f48] text-white px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
					>
						RESERVA AHORA
					</button>
				</motion.div>

				<motion.div
					className="flex-1 min-w-[300px] flex justify-center"
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<img
						src={recepcion1}
						alt="Hotel Miami"
						className="max-h-[70vh] object-contain w-full rounded-xl shadow-2xl"
					/>
				</motion.div>
			</section>

			{/* CARRUSEL + SOBRE NOSOTROS */}
			<section className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-12 py-20 bg-white">
				{/* Carrusel */}
				<motion.div
					className="w-full md:w-1/2"
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
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
							className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-[#f2cc8f] text-black rounded-full w-10 h-10 text-xl flex items-center justify-center transition cursor-pointer"
						>
							‹
						</button>
						<button
							onClick={() => setIndex((index + 1) % images.length)}
							className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-[#f2cc8f] text-black rounded-full w-10 h-10 text-xl flex items-center justify-center transition cursor-pointer"
						>
							›
						</button>

						<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
							{images.map((_, i) => (
								<button
									key={i}
									onClick={() => setIndex(i)}
									className={`w-3 h-3 rounded-full ${i === index ? "bg-[#f2cc8f]" : "bg-white/60"} transition cursor-pointer`}
								/>
							))}
						</div>
					</div>
				</motion.div>

				<motion.div
					className="w-full md:w-1/2 flex flex-col gap-5 justify-center"
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-[#1E202D]">
						Sobre <span className="text-[#f2cc8f]">Nosotros</span>
					</h2>
					<h3 className="text-xl md:text-2xl text-[#3D405B] font-medium italic">
						Hospitalidad con historia
					</h3>
					<p className="text-[#50536B] leading-relaxed text-base md:text-lg">
						Desde hace más de 20 años, el Hotel Miami recibe a viajeros de todo el país y el mundo con la calidez del norte argentino.
						Nuestra prioridad es que cada huésped se sienta como en casa, con servicios pensados para vos.
					</p>
					<p className="text-[#50536B] leading-relaxed text-base md:text-lg">
						Ubicado en el corazón de San Miguel de Tucumán, a tan solo siete cuadras de la Plaza Independencia, nuestro hotel combina comodidad, ubicación y atención personalizada.
					</p>
					<a
						href="/contactanos"
						className="mt-4 inline-block bg-[#3D405B] hover:bg-[#2c2f48] text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
					>
						CONTACTANOS
					</a>
				</motion.div>
			</section>

			{/* TESTIMONIOS */}
			<section className="w-full bg-gray-100 py-16 px-4 md:px-0" data-aos="fade-up">
				<div className="w-full max-w-5xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-[#1E202D] mb-8">Testimonios</h2>
					<div className="elfsight-app-dad592c3-4237-4ede-9f91-954d4235bd55" data-elfsight-app-lazy></div>
				</div>
			</section>

			{abrirModalReserva && (
				<ReservaModal onClose={() => setAbrirModalReserva(false)} />
			)}
		</div>
	);
};

export default Home;
