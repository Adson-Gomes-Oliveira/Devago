import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Admin from './pages/Admin';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/home/Header';
import Footer from './components/home/Footer';
import ParticlesBackground from './helpers/particles/ParticlesBG';

import './app.css';

function App() {
  const location = useLocation();

  return (
    <section className="home">
      <ParticlesBackground />
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Do not exist</h1>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </section>
  );
}

export default App;
