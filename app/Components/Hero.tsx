"use client";

import Image from "next/image";
import Button from "./ui/Button";
import React from "react";
import { heroData } from "../data/herodata";

const Hero = () => {
  const handleExploreClick = () => {
    console.log("Explore My Ventures clicked");
  };

  return (
    <div
      className="relative bg-[#efecff] 2xl:px-60 lg:px-28 md:px-10 sm:px-10 px-5 
             flex flex-col-reverse lg:flex-row items-center justify-between
             pt-24 sm:pt-10 md:pt-20 lg:pt-40 xl:pt-96  pb-20 
             xl:h-screen  overflow-hidden"
    >
      {/* Left Content */}
      <div className="w-full lg:w-3/5 pb-10 lg:pb-16 z-10">
        <div className="mb-6">
          <h1 className="font-playball text-[40px] 2xs:text-[44px] xs:text-[48px] sm:text-[56px] md:text-7xl lg:text-8xl xl:text-[128px] leading-none tracking-tight text-[#03045E] mb-8">
            {heroData.firstName}
          </h1>
          <h1 className="font-playball text-[40px] 2xs:text-[44px] xs:text-[48px] sm:text-[56px] md:text-7xl lg:text-8xl xl:text-[128px] leading-none tracking-tight text-black -mt-2 sm:-mt-4 md:-mt-6">
            {heroData.lastName}
          </h1>
        </div>

        <p className="font-poppins text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-medium leading-tight text-gray-700 mb-6 max-w-md">
          {heroData.tagline}
        </p>

        <div className="font-poppins flex flex-wrap items-center gap-2 text-[14px] xs:text-[15px] sm:text-base font-medium text-gray-800 mb-8">
          {heroData.roles.map((role, index) => (
            <React.Fragment key={role}>
              <span>{role}</span>
              {index < heroData.roles.length - 1 && (
                <span className="mx-1 md:mx-2">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <Button className="xl:mb-60" onClick={handleExploreClick}>
          {heroData.ctaText}
        </Button>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block absolute right-0  h-full w-1/2 justify-end pt-40 xl:pt-40">
        <Image
          src={heroData.imageSrc}
          alt={heroData.imageAlt}
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      {/* Mobile/Tablet Image (fallback) */}
      <div className="lg:hidden w-full flex justify-center mb-10">
        <div className="relative w-full h-[500px] md:h-[700px]">
          <Image
            src={heroData.imageSrc}
            alt={heroData.imageAlt}
            fill
            className="object-cover  md:object-bottom rounded-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
