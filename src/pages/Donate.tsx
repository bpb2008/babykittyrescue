import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Donation from "../components/Donation";

const Donate: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row justify-around">
        <h2>EVEN YOUR SMALLEST CONTRIBUTION CAN MAKE A BIG DIFFERENCE.</h2>
        <Donation />
      </div>
      <p>Baby Kitty Rescue Committee is a 501(c)(3) nonprofit corporation.</p>
      <Footer />
    </div>
  );
};

export default Donate;
