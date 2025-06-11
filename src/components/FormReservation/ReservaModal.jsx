import { useState } from 'react';
import { createPortal } from 'react-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import './ReservaModal.css';

const ReservaModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        tipoHabitacion: '',
        fechaEntrada: null,
        fechaSalida: null,
        cantidadPersonas: '',
        mensaje: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {


        e.preventDefault();
        if (!formData.fechaEntrada || !formData.fechaSalida) {
            toast.error('Por favor, seleccioná ambas fechas.');
            return;
        }

        if (formData.fechaSalida <= formData.fechaEntrada) {
            toast.error('La fecha de salida debe ser posterior a la fecha de entrada.');
            return;
        }


        if (!formData.tipoHabitacion) {
            toast.error('Por favor, seleccioná un tipo de habitación.');
            return;
        }

        setLoading(true);

        const dataToSend = {
            ...formData,
            fechaEntrada: formData.fechaEntrada?.toLocaleDateString() || '',
            fechaSalida: formData.fechaSalida?.toLocaleDateString() || '',
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                dataToSend,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            toast.success('¡Tu reserva fue enviada con éxito! Pronto recibirás la confirmación.');

            setTimeout(() => {
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    tipoHabitacion: '',
                    fechaEntrada: null,
                    fechaSalida: null,
                    cantidadPersonas: '',
                    mensaje: ''
                });
                onClose();
            }, 2000);
        } catch (error) {
            toast.error('Error al enviar la reserva. Intentá más tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />

            {createPortal(
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-button" onClick={onClose}>×</button>
                        <h2>Formulario de Reserva</h2>

                        <form onSubmit={handleSubmit} className="reserva-form">
                            <input type="text" name="nombre" placeholder="Nombre completo" required value={formData.nombre} onChange={handleChange} />
                            <input type="email" name="email" placeholder="Correo electrónico" required value={formData.email} onChange={handleChange} />
                            <input type="tel" name="telefono" placeholder="Teléfono de contacto" required value={formData.telefono} onChange={handleChange} />

                            <select name="tipoHabitacion" required value={formData.tipoHabitacion} onChange={handleChange}>
                                <option value="">Seleccionar tipo de habitación</option>
                                <option value="Habitación Individual">Habitación Individual</option>
                                <option value="Habitación Doble">Habitación Doble</option>
                                <option value="Departamento Familiar">Departamento Familiar</option>
                            </select>

                            <div className="date-picker-group">
                                <DatePicker
                                    selected={formData.fechaEntrada}
                                    onChange={(date) => setFormData({ ...formData, fechaEntrada: date })}
                                    placeholderText="Fecha de entrada"
                                    dateFormat="dd/MM/yyyy"
                                    className="datepicker-input"
                                    required
                                />
                                <DatePicker
                                    selected={formData.fechaSalida}
                                    onChange={(date) => setFormData({ ...formData, fechaSalida: date })}
                                    placeholderText="Fecha de salida"
                                    dateFormat="dd/MM/yyyy"
                                    className="datepicker-input"
                                    required
                                />
                            </div>

                            <input type="number" name="cantidadPersonas" placeholder="Cantidad de personas" min="1" required value={formData.cantidadPersonas} onChange={handleChange} />

                            <textarea name="mensaje" placeholder="Mensaje adicional (opcional)" value={formData.mensaje} onChange={handleChange}></textarea>

                            <button type="submit" className="enviar-btn" disabled={loading}>
                                {loading ? 'Enviando...' : 'Enviar reserva'}
                            </button>
                        </form>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default ReservaModal;
