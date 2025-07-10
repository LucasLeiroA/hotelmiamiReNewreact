import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] text-[#363951] px-6 py-12 border-t border-gray-200 font-sans">
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {/* Ubicación */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Dónde estamos</h3>
          <iframe
            title="Ubicación Hotel Miami"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5546007090343!2d-65.2099700238131!3d-26.822307189433833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c161f33f1e5%3A0xfcfd2fa5b866a35c!2sHOTEL%20MIAMI!5e0!3m2!1ses-419!2sar!4v1749131035610!5m2!1ses-419!2sar"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg w-full h-48 shadow-md border-0"
          ></iframe>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <p className="text-sm mb-2">📍 Junín 580, San Miguel de Tucumán</p>
          <p className="text-sm mb-2">📞 +54 9 3815 84-7361</p>
          <p className="text-sm">Consultas las 24 hs, todos los días.</p>
        </div>

        {/* Menú */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menú</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="relative inline-block transition-all duration-200 hover:text-[#f2cc8f] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#f2cc8f] after:transition-all after:duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/facilities"
                className="relative inline-block transition-all duration-200 hover:text-[#f2cc8f] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#f2cc8f] after:transition-all after:duration-300"
              >
                Instalaciones
              </Link>
            </li>
            <li>
              <Link
                to="/habitaciones"
                className="relative inline-block transition-all duration-200 hover:text-[#f2cc8f] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#f2cc8f] after:transition-all after:duration-300"
              >
                Habitaciones
              </Link>
            </li>
            <li>
              <Link
                to="/contactanos"
                className="relative inline-block transition-all duration-200 hover:text-[#f2cc8f] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#f2cc8f] after:transition-all after:duration-300"
              >
                Contáctanos
              </Link>
            </li>
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
