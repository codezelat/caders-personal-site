import React from "react";
import Link from "next/link";

function FooterPage() {
  return (
    <div className="bg-[#03045E] font-poppins">
      <div className="flex flex-col gap-2 items-center justify-between py-5 px-4 md:px-14 text-white text-sm sm:text-base md:flex-row">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Cader Rahmathulla. All rights reserved.
        </p>
        <Link
          href="/privacy"
          className="text-center underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export default FooterPage;
