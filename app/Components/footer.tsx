import React from "react";

function FooterPage() {
  return (
    <div className="bg-[#03045E] font-poppins">
      <div className="flex flex-col md:flex-row items-center justify-between py-5 px-4 md:px-14 gap-2 md:gap-0">
        {/* Copyright text */}
        <p className="text-white text-center md:text-left text-small-responsive  order-2 md:order-1 xl:pl-28">
          © 2025 Cader Rahmathulla. All rights reserved
        </p>

        {/* Terms and Privacy Policy */}
        <p className="text-white text-center md:text-right text-small-responsive order-1 md:order-2 xl:pr-28">
          Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default FooterPage;
