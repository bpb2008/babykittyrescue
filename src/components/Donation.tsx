import React, { useEffect } from "react";

const Donation: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widget.js";
    script.setAttribute("paypalExpress", "false");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        src="https://donorbox.org/embed/donate-to-baby-kitty-rescue-committee-1?default_interval=m"
        name="donorbox"
        allowpaymentrequest="allowpaymentrequest"
        seamless="seamless"
        frameborder="0"
        width="100%"
        className="w-full h-[900px] max-w-[500px] min-w-[250px] max-h-none"
        allow="payment"
      />
    </div>
  );
};

export default Donation;
