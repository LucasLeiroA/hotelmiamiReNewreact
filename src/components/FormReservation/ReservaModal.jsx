import { useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

const ReservaModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoHabitacion: "",
    fechaEntrada: null,
    fechaSalida: null,
    cantidadPersonas: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);

  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f2cc8f] focus:border-[#f2cc8f] transition-all text-sm text-gray-800 placeholder-gray-400";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fechaEntrada || !formData.fechaSalida) {
      toast.error("Por favor, seleccioná ambas fechas.");
      return;
    }

    if (formData.fechaSalida <= formData.fechaEntrada) {
      toast.error("La fecha de salida debe ser posterior a la fecha de entrada.");
      return;
    }

    if (!formData.tipoHabitacion) {
      toast.error("Por favor, seleccioná un tipo de habitación.");
      return;
    }

    setLoading(true);

    const dataToSend = {
      ...formData,
      fechaEntrada: formData.fechaEntrada?.toLocaleDateString() || "",
      fechaSalida: formData.fechaSalida?.toLocaleDateString() || "",
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        dataToSend,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("¡Tu reserva fue enviada con éxito!");

      setTimeout(() => {
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          tipoHabitacion: "",
          fechaEntrada: null,
          fechaSalida: null,
          cantidadPersonas: "",
          mensaje: "",
        });
        onClose();
      }, 2000);
    } catch (error) {
      toast.error("Error al enviar la reserva. Intentá más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      {createPortal(
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-[999] px-4">
          <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-2xl relative animate-fade-in">
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500 transition cursor-pointer"
            >
              &times;
            </button>
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
              Formulario de Reserva
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                required
                value={formData.nombre}
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
                name="telefono"
                placeholder="Teléfono de contacto"
                required
                value={formData.telefono}
                onChange={handleChange}
                className={inputClass}
              />

              <select
                name="tipoHabitacion"
                required
                value={formData.tipoHabitacion}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Seleccionar tipo de habitación</option>
                <option value="Habitación Individual">Habitación Individual</option>
                <option value="Habitación Doble">Habitación Doble</option>
                <option value="Departamento Familiar">Departamento Familiar</option>
              </select>

              <div className="flex gap-4 flex-wrap">
                <DatePicker
                  selected={formData.fechaEntrada}
                  onChange={(date) =>
                    setFormData({ ...formData, fechaEntrada: date })
                  }
                  placeholderText="Fecha de entrada"
                  dateFormat="dd/MM/yyyy"
                  className={`${inputClass} cursor-pointer`}
                  required
                />
                <DatePicker
                  selected={formData.fechaSalida}
                  onChange={(date) =>
                    setFormData({ ...formData, fechaSalida: date })
                  }
                  placeholderText="Fecha de salida"
                  dateFormat="dd/MM/yyyy"
                  className={`${inputClass} cursor-pointer`}
                  required
                />
              </div>

              <input
                type="number"
                name="cantidadPersonas"
                placeholder="Cantidad de personas"
                min="1"
                required
                value={formData.cantidadPersonas}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              />

              <textarea
                name="mensaje"
                placeholder="Mensaje adicional (opcional)"
                value={formData.mensaje}
                onChange={handleChange}
                className={`${inputClass} resize-y min-h-[80px]`}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#f2cc8f] text-[#1e202d] py-2.5 rounded-lg font-semibold transition hover:bg-[#e6bc7c] disabled:opacity-50 cursor-pointer"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar reserva"}
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
