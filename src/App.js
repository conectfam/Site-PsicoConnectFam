// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import AboutHerah from './components/AboutHerah';
import Services from './components/Services';
import Contact from './components/Contact';
import ContactUs from './components/ContactUs';
import Technology from './components/Technology';
import Footer from './components/Footer';
import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Services />
              <Contact />
            </>
          } />
          <Route path="/tecnologia" element={<Technology />} />
          <Route path="/contato" element={<ContactUs />} />
          <Route path="/a-qualityseg" element={<AboutHerah />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
