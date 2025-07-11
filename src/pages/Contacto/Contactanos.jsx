import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contactanos = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

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

			toast.success("¡Mensaje enviado correctamente! Te responderemos a la brevedad.");

			setTimeout(() => {
				setFormData({
					fullName: "",
					email: "",
					phoneNumber: "",
					message: "",
				});
			}, 2000);
		} catch (error) {
			toast.error("Ocurrió un error al enviar el mensaje. Intentá nuevamente más tarde.");
		} finally {
			setLoading(false);
		}
	};

	const inputClass =
		"w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f2cc8f] focus:border-[#f2cc8f] transition-all text-sm text-gray-800 placeholder-gray-400";

	return (
		<div className="w-full bg-white font-['Roboto']">
			<ToastContainer position="top-right" autoClose={3000} />
			<div className="w-[90%] max-w-4xl mx-auto py-20" data-aos="fade-up">
				{/* Encabezado */}
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Contáctanos
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
						En <span className="text-[#f2cc8f] font-semibold">Hotel Miami</span> queremos que tengas una experiencia completa. ¿Tenés dudas, sugerencias o querés realizar una consulta? Completá el formulario y te responderemos a la brevedad.
					</p>
				</div>

				{/* Formulario */}
				<form onSubmit={handleSubmit} className="space-y-5">
					<input
						type="text"
						name="fullName"
						placeholder="Nombre completo"
						required
						value={formData.fullName}
						onChange={handleChange}
						className={inputClass}
					/>

					<input
						type="email"
						name="email"
						placeholder="Correo electrónico"
						required
						value={formData.email}
						onChange={handleChange}
						className={inputClass}
					/>

					<input
						type="tel"
						name="phoneNumber"
						placeholder="Teléfono de contacto"
						required
						value={formData.phoneNumber}
						onChange={handleChange}
						className={inputClass}
					/>

					<textarea
						name="message"
						placeholder="Mensaje"
						required
						rows="5"
						value={formData.message}
						onChange={handleChange}
						className={`${inputClass} resize-y min-h-[120px]`}
					></textarea>

					<button
						type="submit"
						className="w-full bg-[#f2cc8f] text-[#1e202d] py-2.5 rounded-lg font-semibold transition hover:bg-[#e6bc7c] disabled:opacity-50 cursor-pointer"
						disabled={loading}
					>
						{loading ? "Enviando..." : "Enviar mensaje"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contactanos;
