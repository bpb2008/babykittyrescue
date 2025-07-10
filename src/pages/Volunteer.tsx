import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Volunteer: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <section className="h-[500px] bg-[url('/kittens_in_basket.jpg')] grayscale-80 bg-cover bg-center bg-fixed flex items-center justify-center lg:justify-start lg:pl-10">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            VOLUNTEER
          </h2>
        </div>
      </section>
      <div className="flex flex-col items-center">
        <main className="bg-[#f5f2f8] w-full flex flex-col items-center py-[100px]">
          <div className="flex flex-col w-[300px] bg-white px-[50px] py-[50px] shadow-lg">
            <h2 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
              COMING SOON
            </h2>
            <p>Check back later to see how you can get involved!</p>
            <p className="mt-[10px]">August 2, 2021</p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Volunteer;
