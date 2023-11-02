import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";
import About from "./About";
import Investment from "./Investment";
import Contact from "./Contact";
import Navbar from "../component/Navbar";
import Event from "../component/potfolio/Event";
// import Business from "../component/potfolio/Business";
import Business from "../component/potfolio/Business";
import Studio from "../component/potfolio/Studio";
import Lifestyle from "../component/potfolio/Lifestyle";

function App() {
  return (
    < div >
      <Router>
     
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          
          <Route path='/contact' element={<Contact />} />
          <Route path='/event' element={<Event />} />
          <Route path='/lifestyle' element={<Lifestyle />} />
          <Route path='/business' element={<Business/>} />
          <Route path='/studio' element={<Studio />} />

        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
