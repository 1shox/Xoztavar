import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'
import React from 'react'
// import { Logo } from './assets'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
