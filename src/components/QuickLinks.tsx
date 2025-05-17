import React from "react";
import { Link } from "react-router-dom";

const QuickLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
        QUICK LINKS
      </h3>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/adopt">Adopt</Link>
        </li>
        <li>
          <Link to="/volunteer">Volunteer</Link>
        </li>
        <li>
          <Link to="/donate">Donate Now</Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
