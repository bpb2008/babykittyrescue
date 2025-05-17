import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="w-[300px]">
      <h3>NEWSLETTER</h3>
      <p>
        Feel the kitty love in your life. Get to know the adoption
        opportunities, volunteer positions and more with our newsletter.
      </p>
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded px-2 py-1"
      />
      <button>Arrow</button>
    </div>
  );
};

export default Newsletter;
