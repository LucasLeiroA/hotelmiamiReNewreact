import habitaciones from '../../assets/images/habitaciones3.webp';
import pileta from '../../assets/images/fotoPiletaNew.webp';
import cochera from '../../assets/images/cochera1.webp';
import './Facilities.css';
import ReservaModal from '../../components/FormReservation/ReservaModal';
import { useState } from 'react';

const Facilities = () => {



	const [abrirModalReserva, setAbrirModalReserva] = useState(false);

	return (
		<div className="facilities-container">

			<section className="facilities-hero">
				<div className="hero-content">
					<h3>Instalaciones pensadas para tu bienestar</h3>
					<p>
						En <span className="highlight">Hotel Miami</span>, cada rincón está diseñado para ofrecerte una <span className="highlight">experiencia cómoda</span>, <span className="highlight">moderna</span> y <span className="highlight">acogedora</span>. Descubrí todos los servicios que tenemos preparados para vos.
					</p>
					<div className="book-now">
						<button className="reserva-btn" onClick={() => setAbrirModalReserva(true)}>
							<span>RESERVA AHORA</span>
						</button>
					</div>
				</div>
			</section>


			<div className="facility-row">
				<div className="facility-text">
					<h4>Habitaciones</h4>
					<h1>Habitaciones Cómodas</h1>
					<p>
						Sumergite en el <span className="highlight">confort y calidez</span> de nuestras <span className="highlight">habitaciones cómodas</span>, diseñados para brindarte una <span className="highlight">experiencia relajante</span> en pleno corazón de Tucumán. Cada espacio ha sido cuidadosamente ambientado para combinar <span className="highlight">funcionalidad</span> con <span className="highlight">estilo</span>, pensando en los <span className="highlight">viajeros exigentes</span> que buscan algo más que un lugar donde dormir. Descubrí el equilibrio perfecto entre <span className="highlight">comodidad</span> y <span className="highlight">hospitalidad</span> que caracteriza a Hotel Miami.
					</p>
				</div>
				<div className="facility-image">
					<img src={habitaciones} alt="Habitaciones hotel" />
				</div>
			</div>

			<div className="facility-row reverse">
				<div className="facility-text">
					<h4>Piscina</h4>
					<h1>Piscina en la Terraza</h1>
					<p>
						Descubrí nuestra <span className="highlight">piscina en la terraza</span>, un espacio exclusivo con <span className="highlight">vistas panorámicas</span> al centro de Tucumán. Diseñada para ofrecer una <span className="highlight">experiencia relajante</span> y memorable, es el lugar ideal para <span className="highlight">desconectar del bullicio</span> y sumergirte en un entorno de <span className="highlight">tranquilidad y confort</span>. Disfrutá de sus <span className="highlight">aguas cristalinas</span>, contemplá el paisaje urbano desde lo alto y relajate en nuestras <span className="highlight">zonas de descanso</span>, pensadas para brindarte <span className="highlight">momentos únicos</span> en el corazón de la ciudad.
					</p>
				</div>
				<div className="facility-image">
					<img src={pileta} alt="Piscina en terraza" />
				</div>
			</div>

			<div className="facility-row">
				<div className="facility-text">
					<h4>Cochera Interna</h4>
					<h1>Servicio de Cochera Interna</h1>
					<p>
						En <span className="highlight">Hotel Miami</span> priorizamos tu <span className="highlight">tranquilidad</span> y la <span className="highlight">seguridad de tu vehículo</span>. Por eso, contamos con un <span className="highlight">servicio de cochera interna</span> disponible <span className="highlight">las 24 horas</span>, pensado para ofrecerte mayor comodidad durante tu estadía. Mantené tu auto <span className="highlight">protegido y siempre accesible</span>, ya sea que nos visites por trabajo o por placer. Con nuestra cochera interna, disfrutar de Tucumán será mucho más cómodo y seguro.
					</p>
				</div>
				<div className="facility-image">
					<img src={cochera} alt="Cochera interna hotel" />
				</div>
			</div>
			{abrirModalReserva && (
				<ReservaModal onClose={() => setAbrirModalReserva(false)} />
			)}

		</div>
	);
};

export default Facilities;
