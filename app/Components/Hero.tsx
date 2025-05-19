'use client';

import Image from 'next/image';
import Button from './ui/Button';

import React from 'react';
import { heroData } from '../data/herodata';


const Hero = () => {
  const handleExploreClick = () => {
    console.log('Explore My Ventures clicked');
    // Add navigation logic here
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-32 flex flex-col-reverse lg:flex-row items-center justify-between pt-32 md:pt-40">
      {/* Left Content */}
      <div className="w-full lg:w-3/5 py-8 lg:py-16">
        <div className="mb-6">
          <h1 className="font-playball text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-[#03045E] mb-8">
            {heroData.firstName}
          </h1>
          <h1 className="font-playball text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-black -mt-2 sm:-mt-4 md:-mt-6">
            {heroData.lastName}
          </h1>
        </div>
        
        <p className="font-poppins text-xl sm:text-2xl md:text-3xl font-medium leading-tight text-gray-700 mb-6 max-w-md">
          {heroData.tagline}
        </p>       
        
        <div className="flex flex-wrap items-center gap-2 text-base md:text-lg font-medium text-gray-800 mb-8">
          {heroData.roles.map((role, index) => (
            <React.Fragment key={role}>
              <span>{role}</span>
              {index < heroData.roles.length - 1 && (
                <span className="mx-1 md:mx-2">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <Button onClick={handleExploreClick}>
          {heroData.ctaText}
        </Button>
      </div>
      
      {/* Right Image */}
      <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
        <div className="relative w-full md:w-[80%] lg:w-full">
          <Image
            src={heroData.imageSrc}
            alt={heroData.imageAlt}
            width={1080}
            height={959}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;