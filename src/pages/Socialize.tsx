import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Socialize: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center">
        <figure>Insert pic here!</figure>
        <main className="bg-[#f5f2f8] w-full flex flex-col items-center py-[100px]">
          <div className="flex flex-col w-[300px] bg-white px-[50px] py-[50px] shadow-lg">
            <h2 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
              Help Kittens Socialize
            </h2>
            <p>Insert blog post here!</p>
            <p className="mt-[10px]">SHARE THIS:</p>
            <p>Insert social links here!</p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Socialize;
