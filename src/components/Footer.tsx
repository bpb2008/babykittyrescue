import React from "react";
import AboveFooter from "./AboveFooter";

const Footer: React.FC = () => {
  return (
    <div>
      <AboveFooter />
      <footer className="flex flex-row bg-[#221a20] text-white py-[20px] pl-[50px] pr-[10px] justify-between">
        <p>Copyright 2021 Baby Kitty Rescue. All Rights Reserved.</p>
        <div>
          <ul className="flex flex-row">
            <li>FB</li>
            <li>IG</li>
            <li>YT</li>
          </ul>
          <button></button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
