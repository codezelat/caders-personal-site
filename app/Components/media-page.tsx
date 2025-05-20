import Image from 'next/image';
import React from 'react'
import Button from './ui/Button';

function MediaPage() {

    const handleSubmit = () => {
        console.log('Button clicked!');
    };
    
  return (
    <div className='bg-white flex flex-col items-center justify-center font-poppins'>
      <div className="mx-auto  py-16 px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-heading-responsive text-black mb-6">
            Media Features & Appearances
          </h1>
          <p className="text-gray-600 text-sm text-small-responsive font-poppins leading-relaxed ">
            Providing in-depth insights on effective leadership strategies, groundbreaking innovations, and emerging industry
            trends through various global platforms, fostering a community of forward-thinking professionals.
          </p>
        </div>

        {/* Media Cards */}
        <div className="w-full space-y-8">
          {/* Science Card */}
          <div className="bg-[#F4F4F4] rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image 
                src={'/images/Science.png'} 
                alt='Science logo' 
                width={150} 
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-black mb-3 text-normal-responsive">
                Global Leadership Summit
              </h2>
              <p className="text-gray-600 mb-4 text-lg text-small-responsive">
                Keynote speaker on &quot;The Future of Education in a Digital Economy&quot;
              </p>
                <Button onClick={handleSubmit}>
                    Dubai, UAE - March 2025
                </Button>
            </div>
          </div>

          {/* Daily Card */}
          <div className="bg-[#F4F4F4] rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image 
                src={'/images/Mask group-1 1.svg'} 
                alt='Daily logo' 
                width={150} 
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-black mb-3 text-normal-responsive">
                Global Leadership Summit
              </h2>
              <p className="text-gray-600 mb-4 text-lg text-small-responsive">
                Keynote speaker on &quot;The Future of Education in a Digital Economy&quot;
              </p>
                <Button onClick={handleSubmit}>
                    Dubai, UAE - March 2025
                </Button>

              
            </div>
          </div>

          {/* TechTV Card */}
          <div className="bg-[#F4F4F4] rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image 
                src={'/images/Mask group-2 1.svg'} 
                alt='TechTV logo' 
                width={150} 
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-black mb-3 text-normal-responsive">
                Global Leadership Summit
              </h2>
              <p className="text-gray-600 mb-4 text-lg text-small-responsive">
                Keynote speaker on &quot;The Future of Education in a Digital Economy&quot;
              </p>
                <Button onClick={handleSubmit}>
                    Dubai, UAE - March 2025
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaPage;