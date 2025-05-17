import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-center">
      <ul className="flex flex-row bg-[#DCCAE3] justify-center w-[1000px]">
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link to="/">HOME</Link>
        </li>
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link to="/about">ABOUT US</Link>
        </li>
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link to="/adopt">ADOPT</Link>
        </li>
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link to="/volunteer">VOLUNTEER</Link>
        </li>
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link to="/resources">RESOURCES</Link>
        </li>
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link to="/donate">DONATE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
