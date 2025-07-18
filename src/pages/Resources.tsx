import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ChevronsRight,
} from "lucide-react";

const Resources: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <section className="h-[500px] bg-[url('/kittens_in_basket.jpg')] grayscale-80 bg-cover bg-center bg-fixed flex items-center justify-center lg:justify-start lg:pl-10">
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              RESOURCES
            </h2>
          </div>
        </section>
        <div className="flex flex-col items-center">
          <main className="bg-[#f5f2f8] w-full flex flex-col lg:flex-row justify-between px-6 lg:px-[100px]">
            <div className="flex flex-col gap-[30px] w-full lg:w-2/3">
              <Link to="/resources/feeding">
                <div className="flex flex-col w-full max-w-[500px] px-6 py-10 break-words">
                  <img
                    src="/kitten_in_hand2.jpg"
                    alt="striped kitten being held by a human"
                    className="w-[500px] h-auto pb-6"
                  />
                  <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                    WHAT TO FEED A NEWBORN KITTEN?
                  </h3>
                  <p>
                    Kittens Have Formula Newly born cats, like every other
                    being, thrive best on their mother’s milk. However, some
                    unfortunate creatures like abandoned or orphaned kittens,
                  </p>
                  <p className="mt-[10px]">
                    <span className="inline-flex items-center gap-1 font-semibold hover:underline">
                      READ MORE <ChevronsRight size={16} />
                    </span>
                  </p>
                </div>
              </Link>
              <Link to="/resources/care">
                <div className="flex flex-col w-full max-w-[500px] px-6 py-10 break-words">
                  <img
                    src="/kitten_in_hand.jpg"
                    alt="tiny cat in the palm of a human hand"
                    className="w-[500px] h-[300px] pb-6"
                  />
                  <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                    NEONATAL CARE FOR KITTENS
                  </h3>
                  <p>
                    Taking care of kittens aged 0 days up to 4 weeks old, is
                    called neonatal care and is the hardest part of caregiving
                    routine. Nature
                  </p>
                  <p className="mt-[10px]">
                    <span className="inline-flex items-center gap-1 font-semibold hover:underline">
                      READ MORE <ChevronsRight size={16} />
                    </span>
                  </p>
                </div>
              </Link>
              <Link to="/resources/socialize">
                <div className="flex flex-col w-full max-w-[500px] px-6 py-10 break-words">
                  <img
                    src="/neonatal.jpg"
                    alt="a brown kitten held in human hands"
                    className="w-[500px] h-[300px] pb-6"
                  />
                  <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                    HELP KITTENS SOCIALIZE
                  </h3>
                  <p>
                    With kittens, you need to be watchful. Spitting, hissing,
                    and hiding are all expressions of fear, not signs of
                    aggression and must be treated with
                  </p>
                  <p className="mt-[10px]">
                    <span className="inline-flex items-center gap-1 font-semibold hover:underline">
                      READ MORE <ChevronsRight size={16} />
                    </span>
                  </p>
                </div>
              </Link>
            </div>
            <aside className="bg-[#f5f2f8] bg-fixed bg-[length:100%_100%] p-[30px] w-full lg:w-[360px] mt-8 lg:mt-0">
              <div>
                <img
                  src="/kitten_handoff.jpg"
                  alt="a human child handing a tiny kitten to an adult"
                  className="w-[300px] mb-6 h-[240px]"
                />
                <div className="flex flex-col items-center">
                  <img
                    src="/Baby_Kitty_Logo_Transparent.png"
                    alt="Baby Kitty Rescue Logo"
                    width={170}
                    height={170}
                    className="w-[170px] h-[170px]"
                  />
                  <ul className="flex flex-row justify-center gap-[15px] mt-[10px]">
                    <li>
                      <Link to="https://www.facebook.com/babykittyrescue">
                        <Facebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/babykittyrescue">
                        <Instagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/@babykittyrescuecommittee6888">
                        <Youtube />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.twitter.com/babykittyrescue">
                        <Twitter />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[300px] mt-[50px]">
                <Newsletter />
              </div>
            </aside>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
