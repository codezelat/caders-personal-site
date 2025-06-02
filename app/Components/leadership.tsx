"use client";
import Image from "next/image";
import MobileviewLeadershipPage from "./mobileview-leadership";

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
            <div className="flex justify-end items-center h-24 mb-32">
              <div className="w-[200px] h-[60px] sm:h-[80px] relative">
                <Image
                  src="/images/lbcicon.png"
                  alt="London Business Consultancy"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex justify-end items-center h-24 mb-32">
              <div className="w-[200px] h-[70px] sm:h-[50px] relative">
                <Image
                  src="/images/Sitc.jpg"
                  alt="SITC Campus"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex justify-end items-center h-24">
              <div className="w-[207px] h-[90px] sm:h-[120px] relative">
                <Image
                  src="/images/codezela.png"
                  alt="Codezela Technologies"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Middle column - Timeline nodes and horizontal lines */}
          <div className="w-1/3 relative">
            {/* First node and line */}
            <div className="relative flex items-center h-24 mb-32">
              {/* Center node */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              {/* Line from center to right */}
              <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 border-t-2 border-black border-dashed"></div>
              {/* Right dot */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
            </div>

            {/* Second node and line */}
            <div className="relative flex items-center h-24 mb-32">
              {/* Center node */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              {/* Line from center to right */}
              <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 border-t-2 border-black border-dashed"></div>
              {/* Right dot */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
            </div>

            {/* Third node and line */}
            <div className="relative flex items-center h-24">
              {/* Center node */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              {/* Line from center to right */}
              <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 border-t-2 border-black border-dashed"></div>
              {/* Right dot */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
            </div>
          </div>

          {/* Right column - Text content */}
          <div className="w-1/3 pl-10">
            <div className="flex flex-col justify-center h-24 mb-32">
              <p className="text-gray-600 text-lg mb-1 ">
                Expanding Global Strategy
              </p>
              <h3 className="text-[20px] font-bold">
                Executive Board Member – LBC UK
              </h3>
            </div>
            <div className="flex flex-col justify-center h-24 mb-32">
              <p className="text-gray-600 text-lg mb-1">
                Transforming Education
              </p>
              <h3 className="text-[20px] font-bold">CEO – SITC Campus</h3>
            </div>
            <div className="flex flex-col justify-center h-24">
              <p className="text-gray-600 text-lg mb-1">
                Fueling Digital Innovation
              </p>
              <h3 className="text-[20px] font-bold">
                COO – Codezela Technologies
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Only visible on mobile */}
      <MobileviewLeadershipPage />
    </div>
  );
};

export default LeadershipPortfolio;
