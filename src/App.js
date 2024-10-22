import './App.css';
import { Routes, Route } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Navbar from './components/navbar';
import particles from './utils.js/particles';

function App() {
  const handleInit = async (main) => {
    await loadFull(main);  // Initialize tsparticles
  }

  return (
    <div className="App">
      {/* Particles component with options */}
      <Particles id="particles" options={particles} init={handleInit} />

      {/* Navbar */}
      <Navbar />

      {/* Main page content */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
