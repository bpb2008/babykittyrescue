import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <img className="border-red-500" /> {/* Add your logo here */}
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
