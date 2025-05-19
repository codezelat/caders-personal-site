import Image from 'next/image';
import React from 'react';

const Leadership = () => {
  return (
    <div className='bg-[#ffffff]'>
          <div className="container mx-auto flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-2 text-center">Leadership Portfolio</h1>
      <p className="text-center text-gray-700 mb-16 max-w-3xl">
        A track record of executive leadership across diverse sectors, driving innovation and strategic growth.
      </p>

      <div className="w-full max-w-5xl relative flex">
        {/* Left Column - All Logos */}
        <div className="flex flex-col items-end w-1/3 pr-8">
          {/* LBC Logo */}
          <div className="mb-24 p-2.5 w-[247px] h-[80px] relative">
            <Image 
              src="/images/lbcicon.png" 
              alt="London Business Consultancy" 
              layout="fill" 
              objectFit="contain"
            />
          </div>
          
          {/* SITC Logo */}
          <div className="mb-24 p-2.5 w-[200px] h-[90px] relative">
            <Image 
              src="/images/sitsicon.jpg" 
              alt="SITC Campus" 
              layout="fill" 
              objectFit="contain"
            />
          </div>
          
          {/* Codezela Logo */}
          <div className="p-2.5 w-[207px] h-[120px] relative">
            <Image 
              src="/images/codezelaicon.png" 
              alt="Codezela Technologies" 
              layout="fill" 
              objectFit="contain"
            />
          </div>
        </div>

        {/* Center Column - Timeline */}
        <div className="flex flex-col items-center justify-between relative" style={{width: '80px'}}>
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2">
            <Image 
              src="/images/Line 1.svg" 
              alt="dotted line" 
              width={1728} 
              height={954} 
              layout="fixed"
            />
          </div>
          
          {/* Connecting Lines */}
          <Image src={'/images/Line 2.svg'} alt='doterline'width={214}height={200}/>
        </div>

        {/* Right Column - All Text Content */}
        <div className="flex flex-col w-2/3 pl-8">
          {/* LBC Content */}
          <div className="mb-24">
            <p className="text-gray-600 text-sm">Expanding Global Strategy</p>
            <h3 className="text-xl font-bold">Executive Board Member – LBC UK</h3>
          </div>
          
          {/* SITC Content */}
          <div className="mb-24">
            <p className="text-gray-600 text-sm">Transforming Education</p>
            <h3 className="text-xl font-bold">CEO – SITC Campus</h3>
          </div>
          
          {/* Codezela Content */}
          <div>
            <p className="text-gray-600 text-sm">Fueling Digital Innovation</p>
            <h3 className="text-xl font-bold">COO – Codezela Technologies</h3>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Leadership;