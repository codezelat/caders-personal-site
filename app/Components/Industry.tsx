import React from "react";
import Image from "next/image";

const Industry: React.FC = () => {
  return (
    <div className="relative w-full h-[850px] overflow-hidden">
      {/* Main city image */}
      <Image
        src="/images/gradient.jpg" 
        alt="Industry Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black/20 z-10" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
        <h1 className="text-poppins-bold text-heading-responsive text-[48px] font-bold sm:leading-nomal ">
          Investing in <br/> Visionaries Reshaping Industries
        </h1>
        <div className="gap-[40px] flex flex-col items-center justify-center mt-4">
          <p className="text-normal-responsive  font-[500px] mb-4 max-w-xl">
          Focus on innovation-driven, scalable, and values-aligned opportunities.
        </p>
        <p className="text-[23px] text-normal-responsive font-medium">
          Education | Technology | SaaS | Infrastructure.
        </p>
        </div>
        
      </div>
    </div>
  );
};

export default Industry;
