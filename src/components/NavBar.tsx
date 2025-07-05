import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT US" },
    { to: "/adopt", label: "ADOPT" },
    { to: "/volunteer", label: "VOLUNTEER" },
    { to: "/resources", label: "RESOURCES" },
    { to: "/donate", label: "DONATE" },
  ];

  return (
    <nav className="bg-[#DCCAE3]">
      <ul className="hidden md:flex justify-center w-full max-w-[1000px] mx-auto">
        {navLinks.map(({ to, label }) => (
          <li
            key={to}
            className="hover:bg-[#FAE489] py-[25px] px-[20px] text-center"
          >
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex justify-end p-4">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#DCCAE3]">
          {navLinks.map(({ to, label }) => (
            <li
              key={to}
              className="w-full text-center py-[20px] border-t border-white hover:bg-[#FAE489]"
            >
              <Link to={to} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
