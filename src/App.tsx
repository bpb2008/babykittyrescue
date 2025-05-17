import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Adopt from "./pages/Adopt";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import Resources from "./pages/Resources";
import Feeding from "./pages/Feeding";
import Care from "./pages/Care";
import Socialize from "./pages/Socialize";

const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="resources" element={<Resources />} />
          <Route path="/resources/feeding" element={<Feeding />} />
          <Route path="/resources/care" element={<Care />} />
          <Route path="/resources/socialize" element={<Socialize />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
