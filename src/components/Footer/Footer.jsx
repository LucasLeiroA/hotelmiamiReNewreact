import './Footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">

				<div>
					<h3>Dónde estamos</h3>
					<div>
						<iframe
							title="Ubicación Hotel Miami"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5546007090343!2d-65.2099700238131!3d-26.822307189433833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c161f33f1e5%3A0xfcfd2fa5b866a35c!2sHOTEL%20MIAMI!5e0!3m2!1ses-419!2sar!4v1749131035610!5m2!1ses-419!2sar"
							allowFullScreen="" 
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>

				<div>
					<h3>Contacto</h3>
					<p>📍 Junín 580, T4000 San Miguel de Tucumán, Tucumán</p>
					<p>📞 +54 9 3815 84-7361</p>
					<p>Respondemos consultas las 24 hs, todos los días.</p>
				</div>

				<div>
					<h3>Menú</h3>
					<ul>
						<li><a href="/">Inicio</a></li>
						<li><a href="/facilities">Instalaciones</a></li>
						<li><a href="/habitaciones">Habitaciones</a></li>
						<li><a href="/contactanos">Contáctanos</a></li>
					</ul>
				</div>
			</div>

			<div className="footer-bottom">
				&copy; {new Date().getFullYear()} Hotel Miami - Todos los derechos reservados.
			</div>
		</footer>
	);
};

export default Footer;
