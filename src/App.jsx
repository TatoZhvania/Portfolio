import { useEffect } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cursor from './components/cursor/Cursor';
//test
function App() {
  useEffect(() => {
    Aos.init({
      disable: 'mobile',
      duration: 1800,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#0C090A]">
      <Cursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
