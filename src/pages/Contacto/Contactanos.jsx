import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contactanos.css';

const Contactanos = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
		message: ''
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const templateParams = {
			from_name: formData.fullName,
			from_email: formData.email,
			phone_number: formData.phoneNumber,
			message: formData.message,
		};

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_ID,
				templateParams,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);

			toast.success('¡Mensaje enviado correctamente! Te responderemos a la brevedad.');

			setTimeout(() => {
				setFormData({
					fullName: '',
					email: '',
					phoneNumber: '',
					message: ''
				});
			}, 2000);
		} catch (error) {
			toast.error('Ocurrió un error al enviar el mensaje. Intentá nuevamente más tarde.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="contact-main">
			<ToastContainer position="top-right" autoClose={3000} />
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
								<input type="text" name="fullName" placeholder="Nombre Completo" required value={formData.fullName} onChange={handleChange} />
							</div>
							<div className="input-field">
								<input type="email" name="email" placeholder="Correo Electrónico" required value={formData.email} onChange={handleChange} />
							</div>
							<div className="input-field">
								<input type="tel" name="phoneNumber" placeholder="Número de Teléfono" required value={formData.phoneNumber} onChange={handleChange} />
							</div>
							<div className="input-field">
								<textarea name="message" placeholder="Mensaje" required value={formData.message} onChange={handleChange}></textarea>
							</div>
							<div className="input-field">
								<button type="submit" className="submit-btn" disabled={loading}>
									{loading ? 'Enviando...' : 'ENVIAR'}
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
