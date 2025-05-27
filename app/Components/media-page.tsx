import Image from "next/image";
import React from "react";

function MediaPage() {
  const handleSubmit = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="bg-white flex flex-col font-poppins">
      <div className="mx-auto py-8 px-4 sm:px-6 md:py-16 md:px-16 lg:px-32">
        {/* Header Section */}
        <div className="text-left md:text-center mb-16 md:mb-16">
          <h1 className="text-heading-responsive sm:text-4xl md:text-5xl font-bold text-black mb-10 md:mb-6">
            Media Features & Appearances
          </h1>
          <p className="text-gray-600 text-md leading-relaxed md:mx-auto">
            Providing in-depth insights on effective leadership strategies,
            groundbreaking innovations, and emerging industry trends through
            various global platforms, fostering a community of forward-thinking
            professionals.
          </p>
        </div>

        {/* Media Cards */}
        <div className="w-full space-y-16 max-w-[1236px] mx-auto flex flex-col items-start justify-start">
          {/* Science Card */}
          <div className="bg-[#F4F4F4] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full h-[250px]">
            {/* Mobile: Text first, Desktop: Image first */}
            <div className="flex-1 text-left flex flex-col items-start md:order-2">
              <h2 className="text-sm 2xs:text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2">
                Global Leadership Summit
              </h2>
              <p className="text-gray-600 text-xs xs:text-sm md:text-base mb-2 md:mb-4">
                Keynote speaker on &quot;The Future of Education in a Digital
                Economy&quot;
              </p>
              <button
                onClick={handleSubmit}
                className="bg-indigo-800 text-white py-1 px-4 md:py-2 md:px-6 rounded-md text-xs md:text-sm"
              >
                Dubai, UAE - March 2025
              </button>
            </div>
            <div className="flex-shrink-0 w-[200px] md:w-36 flex justify-center md:order-1 md:mx-20">
              <Image
                src={"/images/Science.png"}
                alt="Science logo"
                width={200}
                height={107}
                className="object-contain"
              />
            </div>
          </div>

          {/* Daily Card */}
          <div className="bg-[#F4F4F4] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full h-[250px]">
            {/* Mobile: Text first, Desktop: Image first */}
            <div className="flex-1 text-left flex flex-col items-start md:order-2">
              <h2 className="text-sm 2xs:text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2">
                Global Leadership Summit
              </h2>
              <p className="text-gray-600 text-xs xs:text-sm md:text-base mb-2 md:mb-4">
                Keynote speaker on &quot;The Future of Education in a Digital
                Economy&quot;
              </p>
              <button
                onClick={handleSubmit}
                className="bg-indigo-800 text-white py-1 px-4 md:py-2 md:px-6 rounded-md text-xs md:text-sm"
              >
                Dubai, UAE - March 2025
              </button>
            </div>
            <div className="flex-shrink-0 w-[200px] md:w-36 flex justify-center md:order-1 md:mx-20">
              <Image
                src={"/images/Mask group-1 1.svg"}
                alt="Daily logo"
                width={200}
                height={107}
                className="object-contain"
              />
            </div>
          </div>

          {/* TechTV Card */}
          <div className="bg-[#F4F4F4] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full h-[250px]">
            {/* Mobile: Text first, Desktop: Image first */}
            <div className="flex-1 text-left flex flex-col items-start md:order-2">
              <h2 className="text-sm 2xs:text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2">
                Global Leadership Summit
              </h2>
              <p className="text-gray-600 text-xs xs:text-sm md:text-base mb-2 md:mb-4">
                Keynote speaker on &quot;The Future of Education in a Digital
                Economy&quot;
              </p>
              <button
                onClick={handleSubmit}
                className="bg-indigo-800 text-white py-1 px-4 md:py-2 md:px-6 rounded-md text-xs md:text-sm"
              >
                Dubai, UAE - March 2025
              </button>
            </div>
            <div className="flex-shrink-0 w-[200px] md:w-36 flex justify-center md:order-1 md:mx-20">
              <Image
                src={"/images/Mask group-2 1.svg"}
                alt="TechTV logo"
                width={200}
                height={107}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaPage;
