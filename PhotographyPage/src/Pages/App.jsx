import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";
import About from "./About";
import Investment from "./Investment";
import Contact from "./Contact";
import Navbar from "../component/Navbar";
// import Event from "../component/Event";
function App() {
  return (
    < div >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/investment' element={<Investment />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/event' element={<Event />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
