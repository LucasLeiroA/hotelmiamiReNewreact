import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Facilities from '../pages/Facilities/Facilities';
import Contactanos from '../pages/Contacto/Contactanos';
import Navbar from '../components/NavBar/Navbar';
import BtnWsp from '../components/BtnWsp/BtnWsp';
import Home from '../pages/Home/Home';
import Footer from '../components/Footer/Footer'
import Habitaciones from '../pages/Habitaciones/Habitaciones';
import ScrollToTop from "../components/ScrollToTop";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <BtnWsp />
      <Footer />
    </Router>
  );
};

export default AppRouter;
