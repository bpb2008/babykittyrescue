import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhoWeAre from "../components/WhoWeAre";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="h-screen bg-[url('/kittens_in_basket.jpg')] grayscale-80 bg-cover bg-center bg-fixed"></section>
      <main>
        <WhoWeAre />
        <OurMission />
        <OurVision />
      </main>
      <Footer />
    </div>
  );
};

export default About;
