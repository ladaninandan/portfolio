
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skils from './components/Skils';
import Services from './components/Services';


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skils />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      {/* <Home />
      <Projects />
      <Contact />
      <About /> */}
      <Footer />

    </BrowserRouter >
  );
}

export default App;
