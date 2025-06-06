import React from "react";
import Link from "next/link";

function FooterContent() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Ventures", href: "#ventures" },
    { name: "Media", href: "#media" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-[#101827] py-8 px-4 sm:px-10 md:py-12 md:px-14">
      <div className="max-w-6xl mx-auto text-left md:text-center">
        {/* Name */}
        <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playball mb-4 md:mb-6">
          Cader{" "}
          <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">
            Rahmathulla
          </span>
        </h1>

        {/* Description */}
        <p className="font-poppins text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 mx-0 md:mx-auto max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Quick Links Title */}
        <h2 className="text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold mb-3 md:mb-4">
          Quick Links
        </h2>

        {/* Links */}
        <div className="flex flex-wrap justify-start md:justify-center gap-x-4 gap-y-2 text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-poppins">
          {links.map((link) => (
            <Link key={link.name} href={link.href} scroll={true} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterContent;
