import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="w-[300px]">
      <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
        NEWSLETTER
      </h3>
      <p>
        Feel the kitty love in your life. Get to know the adoption
        opportunities, volunteer positions and more with our newsletter.
      </p>
      <input
        type="email"
        placeholder="Email"
        className="border border-[#221a20] bg-[#f5f2f8] px-[20px] py-[10px] mt-[18px]"
      />
      <button className="bg-[#221a20] text-white px-[20px] py-[10px]">
        <img
          src="/images/arrow.svg"
          alt="Arrow"
          className="inline-block mr-[10px]"
        />
      </button>
    </div>
  );
};

export default Newsletter;
