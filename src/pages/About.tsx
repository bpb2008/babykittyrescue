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
      <section className="h-[500px] bg-[url('/kittens_in_basket.jpg')] grayscale-80 bg-cover bg-center bg-fixed flex items-center justify-center lg:justify-start lg:pl-10">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            ABOUT US
          </h2>
        </div>
      </section>
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
