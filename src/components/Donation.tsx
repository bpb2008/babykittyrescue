import React from "react";

const Donation: React.FC = () => {
  // Need the right embedded code from Donorbox
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <iframe src="https://donorbox.org/embed/your-form-id" 
          height="900px" 
          width="100%" 
          style="max-width: 500px; min-width: 310px; max-height:none!important" 
          seamless="seamless" 
          name="donorbox" 
          frameborder="0" 
          scrolling="no"></iframe>
        <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
      `,
      }}
    />
  );
};

export default Donation;
