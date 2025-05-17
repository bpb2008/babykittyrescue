import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Adopt from "./pages/Adopt";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
