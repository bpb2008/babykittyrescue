import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Feeding: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center">
        <figure>Insert pic here!</figure>
        <main className="bg-[#f5f2f8] w-full flex flex-row px-[50px] py-[100px]">
          <div className="flex flex-col bg-white px-[50px] py-[50px] shadow-lg">
            <h2 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
              What to feed a newborn kitten?
            </h2>
            <p>August 3, 2021</p>
            <div>
              <h4 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                Kittens Have Formula
              </h4>
              <p>
                Newly born cats, like every other being, thrive best on their
                mother’s milk. However, some unfortunate creatures like
                abandoned or orphaned kittens, need a replacement. That is why
                we have kitten formula, such as kitten milk replacer (KMR). KMR
                is full of all the nutrients that a newborn kitty requires and
                can easily be purchased at a pet store.
              </p>
              <p>
                You need formula and an appropriate bottle with elongated
                nipple.{" "}
              </p>
              <p>
                Just don’t try feeding them Goat milk, because as healthy as it
                is for human infants, it causes diarrhea in kittens.{" "}
              </p>
              <h4 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                Feeding Frequency
              </h4>
              <p>
                To use KMR, follow the quantity on label strictly to avoid any
                health concerns.{" "}
              </p>
              <ul>
                <li>
                  For the first 10 days, infant kitties need to be fed every two
                  hours, around the clock.{" "}
                </li>
                <li>
                  If the kitten is between 11 – 18 days, reduce the feeding from
                  2 to every 4 hours.{" "}
                </li>
                <li>
                  From 2½ to 4 weeks’ kittens need to be fed every five to six
                  hours
                </li>
                <li>
                  Kittens aged 4 weeks and older only need feeding 2-3 times a
                  day. This is the age around they start weaning.{" "}
                </li>
              </ul>
              <h4 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                Early Foods
              </h4>
              <p>
                Start by mixing wet food with formula and feed with the bottle
                first. Help the growing kittens learn latching onto the bottle
                by pulling on the nipple as they suck. Slowly, start mixing dry
                food with formula and begin providing water.
              </p>
            </div>
            <p className="mt-[10px]">SHARE THIS:</p>
            <p>Insert social links here!</p>
          </div>
          <aside>
            <p>Insert Recent Posts Here!</p>
          </aside>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Feeding;
