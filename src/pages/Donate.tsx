import React from "react";
import Donation from "../components/Donation";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Donate: React.FC = () => {
  return (
    <div className="min-h-[100svh] flex flex-col">
      {/* If Header is fixed/sticky, keep it. Otherwise, you can remove sticky styles in the Header component */}
      <Header />

      {/* Main scrollable area */}
      <main className="relative flex-1 overflow-y-auto overflow-x-hidden pt-16">
        {/* Background layer */}
        <div
          className="pointer-events-none absolute inset-0 bg-[url('/kittens_in_basket.jpg')] bg-cover bg-center grayscale z-0"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between text-white">
          <section className="flex flex-col justify-center items-center px-4 md:px-16 py-10">
            <div className="flex flex-col lg:flex-row justify-around items-center w-full max-w-7xl gap-8">
              <div className="text-center lg:text-left lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-2 font-extrabold leading-tight text-white">
                  EVEN YOUR <br />
                  SMALLEST <br />
                  CONTRIBUTION <br />
                  CAN MAKE A BIG <br />
                  DIFFERENCE.
                </h2>
              </div>

              <div className="lg:w-1/2 w-full">
                <Donation />
              </div>
            </div>
          </section>

          <div className="relative z-10 bg-white/90 text-center py-4 text-black text-sm">
            Baby Kitty Rescue Committee is a 501(c)(3) nonprofit corporation.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
