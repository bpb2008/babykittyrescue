import React from "react";
import AboveFooter from "./AboveFooter";

const Footer: React.FC = () => {
  return (
    <div>
      <AboveFooter />
      <footer className="flex flex-row bg-[#221a20] text-white py-[20px] pl-[50px] pr-[20px] justify-between">
        <p>Copyright 2021 Baby Kitty Rescue. All Rights Reserved.</p>
        <div className="flex flex-row gap-[30px]">
          <ul className="flex flex-row gap-[15px]">
            <li>FB</li>
            <li>IG</li>
            <li>YT</li>
          </ul>
          <button className="bg-[#DCCAE3]">
            <a href="">Arrow</a> {/* Needs to link to top of page */}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
