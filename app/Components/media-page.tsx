import Image from 'next/image';
import React from 'react';


function MediaPage() {
  const handleSubmit = () => {
    console.log('Button clicked!');
  };
  
  return (
    <div className='bg-white flex flex-col font-poppins 2xl:h-screen'>
      <div className="mx-auto py-8 px-4 sm:px-6 md:py-16 md:px-16 lg:px-32">
        {/* Header Section */}
        <div className="text-left md:text-center mb-8 md:mb-16">
          <h1 className="text-heading-responsive sm:leading-none font-bold text-black mb-4 md:mb-6">
            Media Features & Appearances
          </h1>
           <p className="text-gray-600 text-[20px] text-normal-responsive leading-relaxed md:mx-auto">
            Providing in-depth insights on effective leadership strategies, groundbreaking innovations, and emerging industry
            trends through various global platforms, fostering a community of forward-thinking professionals.
          </p>
        </div>

        {/* Media Cards */}
        <div className="w-full space-y-4 md:space-y-6 max-w-4xl items-center mx-auto justify-center">
          {/* Science Card */}
          <div className="bg-[#F4F4F4] rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-shrink-0 w-24 md:w-36">
              <Image 
                src={'/images/Science.png'} 
                alt='Science logo' 
                width={150} 
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex-1 text-left">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-1 md:mb-2">
                Global Leadership Summit
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-2 md:mb-4">
                Keynote speaker on &quot;The Future of Education in a Digital Economy&quot;
              </p>
              <button 
                onClick={handleSubmit}
                className="bg-indigo-800 text-white py-1 px-4 md:py-2 md:px-6 rounded-md text-xs md:text-sm"
              >
                Dubai, UAE - March 2025
              </button>
            </div>
          </div>

          {/* Daily Card */}
          <div className="bg-[#F4F4F4] rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-shrink-0 w-24 md:w-36">
              <Image 
                src={'/images/Mask group-1 1.svg'} 
                alt='Daily logo' 
                width={150} 
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex-1 text-left">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-1 md:mb-2">
                Global Leadership Summit
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-2 md:mb-4">
                Keynote speaker on &quot;The Future of Education in a Digital Economy&quot;
              </p>
              <button 
                onClick={handleSubmit}
                className="bg-indigo-800 text-white py-1 px-4 md:py-2 md:px-6 rounded-md text-xs md:text-sm"
              >
                Dubai, UAE - March 2025
              </button>
            </div>
          </div>

          {/* TechTV Card */}
          <div className="bg-[#F4F4F4] rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-shrink-0 w-24 md:w-36">
              <Image 
                src={'/images/Mask group-2 1.svg'} 
                alt='TechTV logo' 
                width={150} 
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex-1 text-left">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-1 md:mb-2">
                Global Leadership Summit
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-2 md:mb-4">
                Keynote speaker on &quot;The Future of Education in a Digital Economy&quot;
              </p>
              <button 
                onClick={handleSubmit}
                className="bg-indigo-800 text-white py-1 px-4 md:py-2 md:px-6 rounded-md text-xs md:text-sm"
              >
                Dubai, UAE - March 2025
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaPage;