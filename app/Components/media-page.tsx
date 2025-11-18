import Image from "next/image";
import React from "react";

const mediaFeatures = [
  {
    id: 1,
    title: "Global Leadership Summit",
    description:
      'Keynote on "The Future of Education in a Digital Economy" highlighting scalable EdTech ecosystems.',
    dateline: "Dubai, UAE · March 2025",
    logo: "/images/Science.png",
    logoAlt: "Science & Technology Forum",
  },
  {
    id: 2,
    title: "International Business Daily",
    description:
      "In-depth interview on building resilient operating models across emerging markets.",
    dateline: "London, UK · January 2025",
    logo: "/images/Mask group-1 1.svg",
    logoAlt: "International Business Daily",
  },
  {
    id: 3,
    title: "TechTV Prime",
    description:
      "Roundtable with SaaS founders discussing responsible AI and deployment velocity.",
    dateline: "Singapore · October 2024",
    logo: "/images/Mask group-2 1.svg",
    logoAlt: "TechTV Prime",
  },
];

function MediaPage() {
  return (
    <div className="bg-white flex flex-col font-poppins">
      <div className="mx-auto py-8 px-4 md:py-10 md:px-16 sm:px-10 xs:px-10 lg:px-32">
        {/* Header Section */}
        <div className="text-left md:text-center mb-10 md:mb-16 sm:mb-10">
          <h1 className="text-heading-responsive sm:text-4xl md:text-5xl font-bold text-black mb-10  md:mb-6 sm:mb-6">
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
        <div className="w-full space-y-16 xs:space-y-10 sm:space-y-10 max-w-[1236px] mx-auto flex flex-col items-start justify-start">
          {mediaFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#F4F4F4] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8  w-full h-[305px]"
            >
              <div className="flex-1 text-left flex flex-col items-start md:order-2">
                <h2 className="text-sm 2xs:text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-xs xs:text-sm md:text-base mb-2 md:mb-4">
                  {feature.description}
                </p>
                <span className="bg-indigo-800 text-white py-1 px-4 md:py-2 md:px-6 rounded-md text-xs md:text-sm font-medium">
                  {feature.dateline}
                </span>
              </div>
              <div className="shrink-0 w-[200px] md:w-36 flex justify-center md:order-1 md:mx-20">
                <Image
                  src={feature.logo}
                  alt={feature.logoAlt}
                  width={200}
                  height={107}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MediaPage;
