'use client';
import React from 'react';
import Image from 'next/image';

const LeadershipPortfolio = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Leadership Portfolio</h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          A track record of executive leadership across diverse sectors, driving innovation and strategic growth.
        </p>
      </div>

      <div className="relative">
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
          <div className="w-1/3 pr-6">
            <div className="flex justify-end items-center h-24 mb-32">
              <Image 
                src="/images/lbcicon.png"
                alt="London Business Consultancy"
                width={175}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex justify-end items-center h-24 mb-32">
              <Image 
                src="/images/sitsicon.jpg"
                alt="SITC Campus"
                width={175}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex justify-end items-center h-24">
              <Image 
                src="/images/codezelaicon.png"
                alt="Codezela Technologies"
                width={175}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Middle column - Timeline nodes and horizontal lines */}
          <div className="w-1/3 relative">
            {/* First node and line */}
            <div className="relative flex items-center h-24 mb-32">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 border-t-2 border-black border-dashed"></div>
            </div>
            
            {/* Second node and line */}
            <div className="relative flex items-center h-24 mb-32">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 border-t-2 border-black border-dashed"></div>
            </div>
            
            {/* Third node and line */}
            <div className="relative flex items-center h-24">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 border-t-2 border-black border-dashed"></div>
            </div>
          </div>
          
          {/* Right column - Text content */}
          <div className="w-1/3 pl-6">
            <div className="flex flex-col justify-center h-24 mb-32">
              <p className="text-gray-600 text-sm mb-1">Expanding Global Strategy</p>
              <h3 className="text-xl font-bold">Executive Board Member – LBC UK</h3>
            </div>
            <div className="flex flex-col justify-center h-24 mb-32">
              <p className="text-gray-600 text-sm mb-1">Transforming Education</p>
              <h3 className="text-xl font-bold">CEO – SITC Campus</h3>
            </div>
            <div className="flex flex-col justify-center h-24">
              <p className="text-gray-600 text-sm mb-1">Fueling Digital Innovation</p>
              <h3 className="text-xl font-bold">COO – Codezela Technologies</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipPortfolio;