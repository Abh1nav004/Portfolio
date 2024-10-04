
import './App.css';
import {Routes, Route}  from'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      {/* particles js */}

      {/* navbar */}
      <Navbar/>
      
      {/*main page content */}
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/about' element={<About/>}/>
        <Route index path='/contact' element={<Contact/>}/>
        <Route index path='/resume' element={<Resume/>}/>
        <Route index path='/portfolio' element={<Portfolio/>}/>
        <Route index path='/skills' element={<Skills/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
