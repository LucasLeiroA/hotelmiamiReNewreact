import { useEffect } from 'react';
import AOS from 'aos';
import AppRouter from './routes/AppRouter';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return <AppRouter />;
}

export default App;
