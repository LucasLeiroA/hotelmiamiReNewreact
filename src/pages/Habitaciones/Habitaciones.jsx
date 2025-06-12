import img1 from '../../assets/images/habitaciones1.webp';
import img2 from '../../assets/images/habitaciones4.webp';
import img3 from '../../assets/images/habitaciones3.webp';
import './Habitaciones.css'
import ReservaModal from '../../components/FormReservation/ReservaModal';
import { useState } from 'react';



const Habitaciones = () => {

	const [abrirModalReserva, setAbrirModalReserva] = useState(false);



	return (
		<div className="habitaciones-container">
			<section className="habitaciones-hero">
				<h3>Habitaciones</h3>
				<p>
					Descubre nuestras <span className="highlight">acogedoras habitaciones</span>, ideales para tu estadía. Ya sea que estés aquí por <span className="highlight">negocios</span> o por <span className="highlight">placer</span>, disfrutá de nuestra <span className="highlight">hospitalidad</span> y <span className="highlight">comodidades</span>.
				</p>
				<div className="book-now">
					<button className="reserva-btn" onClick={() => setAbrirModalReserva(true)}>
						<span>RESERVA AHORA</span>
					</button>
				</div>
			</section>

			<section className="habitaciones-grid">
				<figure>
					<img src={img1} alt="Habitaciones Estándar" />
					<figcaption>
						<h2>Habitaciones Estándar</h2>
						<p>Diseñadas para ofrecerte <span className="highlight">comodidad</span> y <span className="highlight">funcionalidad</span> durante tu estadía. Equipadas con todo lo necesario para un <span className="highlight">descanso placentero</span>.</p>
					</figcaption>
				</figure>

				<figure>
					<img src={img2} alt="Habitaciones Dobles" />
					<figcaption>
						<h2>Habitaciones Dobles</h2>
						<p>Ideales para <span className="highlight">parejas o amigos</span>. Ofrecen un diseño <span className="highlight">acogedor</span> y todas las <span className="highlight">comodidades necesarias</span>.</p>
					</figcaption>
				</figure>

				{/* <figure>
					<img src={img3} alt="Departamentos Familiares" />
					<figcaption>
						<h2>Departamentos Familiares</h2>
						<p>Amplios y <span className="highlight">equipados</span> para brindar <span className="highlight">comodidad a toda la familia</span>. Sentite como en casa durante tus <span className="highlight">vacaciones</span> o <span className="highlight">viajes de negocios</span>.</p>
					</figcaption>
				</figure> */}
			</section>
			{abrirModalReserva && (
				<ReservaModal onClose={() => setAbrirModalReserva(false)} />
			)}
		</div>
	);
};

export default Habitaciones;
