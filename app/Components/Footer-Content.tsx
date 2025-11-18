import React from "react";
import Link from "next/link";
import { navigationLinks } from "../data/navigation";

const quickLinks = [
  ...navigationLinks,
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
];

function FooterContent() {
  return (
    <footer className="bg-[#101827] py-10 sm:py-12 px-4 sm:px-10 md:px-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 text-white lg:flex-row lg:items-start lg:justify-between">
        <div className="lg:max-w-2xl text-left">
          <h1 className="font-playball text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Cader{" "}
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-poppins font-semibold">
              Rahmathulla
            </span>
          </h1>
          <p className="font-poppins text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
            Purpose-led investor, operator, and board advisor accelerating
            high-impact ventures across education, technology, SaaS, and
            infrastructure. I focus on building values-aligned teams and
            scalable, resilient growth models that strengthen communities and
            deliver lasting value.
          </p>
        </div>

        <div className="w-full lg:w-1/3">
          <h2 className="font-poppins font-semibold text-xl sm:text-2xl mb-4">
            Quick Links
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:text-base font-poppins">
            {quickLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                scroll={link.href.startsWith("#")}
                className="hover:text-gray-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterContent;
