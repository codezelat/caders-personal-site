"use client";
import Image from "next/image";
import MobileviewLeadershipPage from "./mobileview-leadership";
import { leadershipData } from "../data/leadershipData";

const LeadershipPortfolio = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 sm:pt-[40px] mb-28 px-4 sm:px-10 xs:px-10 font-poppins 2xl:h-screen">
      {/* Updated header with left-alignment on mobile screens */}
      <div className="text-left md:text-center mb-8 md:mb-16">
        <h1 className="text-heading-responsive font-bold text-black mb-6 md:mb-10">
          Leadership Portfolio
        </h1>
        <p className="text-gray-600  text-md leading-relaxed md:mx-auto pb-10 ">
          A track record of executive leadership across diverse sectors, driving
          innovation and strategic growth.
        </p>
      </div>

      {/* Desktop Timeline - Hidden on mobile */}
      <div className="relative hidden md:block">
        {/* Main container */}
        <div className="flex relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0">
            <div className="h-full border-l-4 border-blue-600 border-dashed"></div>
          </div>

          {/* Diamond at top */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="w-6 h-6 rotate-45 bg-blue-600"></div>
          </div>

          {/* Circle at bottom */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10">
            <div className="w-6 h-6 rounded-full bg-[#03045E]"></div>
          </div>

          {/* Left column - Logos */}
          <div className="w-1/3 pr-10">
            {leadershipData.map((role, index) => (
              <div
                key={role.id}
                className={`flex justify-end items-center h-24 ${
                  index < leadershipData.length - 1 ? "mb-32" : ""
                }`}
              >
                <div
                  className="relative"
                  style={{
                    width: role.logoWidth,
                    height: role.logoHeight,
                  }}
                >
                  <Image
                    src={role.logoSrc}
                    alt={role.logoAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Middle column - Timeline nodes and horizontal lines */}
          <div className="w-1/3 relative">
            {leadershipData.map((role, index) => (
              <div
                key={`timeline-${role.id}`}
                className={`relative flex items-center h-24 ${
                  index < leadershipData.length - 1 ? "mb-32" : ""
                }`}
              >
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
                <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 border-t-2 border-black border-dashed"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              </div>
            ))}
          </div>

          {/* Right column - Text content */}
          <div className="w-1/3 pl-10">
            {leadershipData.map((role, index) => (
              <div
                key={`description-${role.id}`}
                className={`flex flex-col justify-center h-24 ${
                  index < leadershipData.length - 1 ? "mb-32" : ""
                }`}
              >
                <p className="text-gray-600 text-lg mb-1 ">{role.category}</p>
                <h3 className="text-[20px] font-bold">{role.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - Only visible on mobile */}
      <MobileviewLeadershipPage />
    </div>
  );
};

export default LeadershipPortfolio;
