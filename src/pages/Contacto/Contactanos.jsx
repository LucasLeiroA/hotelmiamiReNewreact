import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contactanos.css'

const Contactanos = () => {

	const [loading, setLoading] = useState(false);



	useEffect(() => {
		emailjs.init('BrlJNsPl27qygISG_');
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true); // activar spinner

		const templateParams = {
			from_name: e.target.fullName.value,
			from_email: e.target.email.value,
			phone_number: e.target.phoneNumber.value,
			message: e.target.message.value,
		};

		emailjs
			.send('service_dmpokdb', 'template_wthoygc', templateParams)
			.then(() => {
				Swal.fire({
					icon: 'success',
					title: 'Mensaje enviado',
					text: 'Gracias por contactarnos. Te responderemos pronto.',
					confirmButtonColor: '#3D405B',
				});
				e.target.reset();
			})
			.catch(() => {
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: 'Ocurrió un problema al enviar tu mensaje. Intentá nuevamente.',
					confirmButtonColor: '#3D405B',
				});
			})
			.finally(() => {
				setLoading(false); // desactivar spinner
			});
	};


	return (
		<main className="contact-main">
			<div className="inner-contact-main">
				<div className="contact-text-container">
					<h2>Contáctanos</h2>
					<h3>¡Nos encantaría conocerte!</h3>
					<p className="h3-pragraph">
						En Hotel Miami, nuestro mayor deseo es crear experiencias memorables...
					</p>
				</div>
				<hr />
				<div className="contact-form-container">
					<div className="inner-contact-form-container">
						<h4>También puedes dejarnos un mensaje</h4>
						<form id="contact-form" onSubmit={handleSubmit}>
							<div className="input-field">
								<input type="text" name="fullName" placeholder="Nombre Completo" required />
							</div>
							<div className="input-field">
								<input type="email" name="email" placeholder="Correo Electrónico" required />
							</div>
							<div className="input-field">
								<input type="tel" name="phoneNumber" placeholder="Número de Teléfono" required />
							</div>
							<div className="input-field">
								<textarea name="message" placeholder="Mensaje" required></textarea>
							</div>
							<div className="input-field">
								<button type="submit" className="submit-btn" disabled={loading}>
									{loading ? <span className="spinner-button"></span> : 'ENVIAR'}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Contactanos;
