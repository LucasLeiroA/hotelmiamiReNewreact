import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] text-[#363951] px-6 py-12 border-t border-gray-200 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Ubicación */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Dónde estamos</h3>
          <div className="rounded-lg overflow-hidden shadow-md aspect-video border border-gray-200">
            <iframe
              title="Ubicación Hotel Miami"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5546007090343!2d-65.2099700238131!3d-26.822307189433833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c161f33f1e5%3A0xfcfd2fa5b866a35c!2sHOTEL%20MIAMI!5e0!3m2!1ses-419!2sar!4v1749131035610!5m2!1ses-419!2sar"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        {/* Contacto */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-[#f2cc8f]" />
              Junín 580, San Miguel de Tucumán
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#f2cc8f]" />
              +54 9 3815 84-7361
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} className="text-[#f2cc8f]" />
              Consultas las 24 hs
            </li>
          </ul>
        </div>

        {/* Menú */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Menú</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Inicio", to: "/" },
              { name: "Instalaciones", to: "/facilities" },
              { name: "Habitaciones", to: "/habitaciones" },
              { name: "Contáctanos", to: "/contactanos" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-block hover:text-[#f2cc8f] transition font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-[#363951]">
        &copy; {new Date().getFullYear()} Hotel Miami – Diseñado por{" "}
        <a
          href="https://www.linkedin.com/in/lucasleiro"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-2 hover:text-[#f2cc8f] transition"
        >
          Lucas Leiro
        </a>
      </div>
    </footer>
  );
};

export default Footer;
