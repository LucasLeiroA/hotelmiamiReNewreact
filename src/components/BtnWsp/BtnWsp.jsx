import './BtnWsp.css';

const BtnWsp = () => {
  const phoneNumber = "3815847361";
  const message = "Hola! Estoy interesado en reservar en el Hotel Miami";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-wsp"
      title="Escribinos por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        width="28"
        height="28"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0012 0a12 12 0 00-10.37 17.94L0 24l6.24-1.63A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.94 11.94 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.4l-.36-.21-3.7.97.99-3.6-.23-.37A10 10 0 1122 12c0 5.52-4.48 10-10 10zm5.32-7.67c-.28-.14-1.65-.81-1.9-.9s-.44-.14-.62.14-.71.9-.87 1.08-.32.21-.6.07a8.17 8.17 0 01-2.39-1.47 8.98 8.98 0 01-1.66-2.06c-.17-.28 0-.43.13-.57.13-.14.28-.32.42-.48.14-.17.18-.28.28-.46.1-.18.05-.35 0-.5s-.61-1.47-.84-2.02c-.22-.52-.45-.45-.62-.46-.16 0-.35-.02-.54-.02s-.5.07-.76.36c-.26.28-1 1-.98 2.44.01 1.44 1.03 2.83 1.18 3.02.14.2 2.03 3.1 4.92 4.24.69.3 1.22.48 1.63.62.68.21 1.3.18 1.78.11.54-.08 1.65-.67 1.88-1.31.23-.65.23-1.2.16-1.31-.07-.11-.26-.17-.54-.3z" />
      </svg>
    </a>
  );
};

export default BtnWsp;
