import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";

const Resources: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <section className="h-screen bg-[url('/kittens_in_basket.jpg')] grayscale-80 bg-cover bg-center bg-fixed"></section>
      <div className="flex flex-col items-center">
        <main className="bg-[#f5f2f8] w-full flex flex-row justify-between px-[100px]">
          <div className="flex flex-col gap-[30px]">
            <Link to="/resources/feeding">
              <div className="flex flex-col w-[500px] px-[50px] py-[50px]">
                <img
                  src="/kitten_in_hand2.jpg"
                  alt="striped kitten being held by a human"
                />
                <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                  WHAT TO FEED A NEWBORN KITTEN?
                </h3>
                <p>
                  Check back later to see our kittens that are available for
                  adoption!
                </p>
                <p className="mt-[10px]">READ MORE</p>
              </div>
            </Link>
            <Link to="/resources/care">
              <div className="flex flex-col w-[500px] px-[50px] py-[50px]">
                <img
                  src="/kitten_in_hand.jpg"
                  alt="tiny cat in the palm of a human hand"
                />
                <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                  NEONATAL CARE FOR KITTENS
                </h3>
                <p>
                  Check back later to see our kittens that are available for
                  adoption!
                </p>
                <p className="mt-[10px]">READ MORE</p>
              </div>
            </Link>
            <Link to="/resources/socialize">
              <div className="flex flex-col w-[500px] px-[50px] py-[50px]">
                <img
                  src="/neonatal.jpg"
                  alt="a brown kitten held in human hands"
                />
                <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                  HELP KITTENS SOCIALIZE
                </h3>
                <p>
                  Check back later to see our kittens that are available for
                  adoption!
                </p>
                <p className="mt-[10px]">READ MORE</p>
              </div>
            </Link>
          </div>
          <aside className="bg-[#f5f2f8] bg-fixed bg-[length:100%_100%] p-[30px] w-[360px]">
            <div>
              <img
                src="kitten_handoff.jpg"
                alt="a human child handing a tiny kitten to an adult"
              />
              <img
                src="/Baby_Kitty_Logo_Transparent.png"
                className="w-[170px] h-[170px]"
              />
              <ul className="flex flex-row justify-center gap-[15px] mt-[10px]">
                <li>FB</li>
                <li>IG</li>
                <li>YT</li>
                <li>TW</li>
              </ul>
            </div>
            <div className="w-[300px] mt-[50px]">
              <Newsletter />
            </div>
          </aside>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
