import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  const stats = [
    { number: "15+", text: "Active Leadership Roles" },
    { number: "4", text: "Countries" },
    { number: "12", text: "Ventures" }
  ];

  return (
    <div className="pt-[160px] pb-[20px] bg-[#ffffff]">
      <div className="flex flex-row items-center justify-center gap-[40px]">
        <div>
          <div className="poppins-medium text-[48px] leading-[120%] items-center pb-[40px]">
            About{" "}
            <span className="playball-regular text-[80px] leading-[120%] items-center">
              Cader
            </span>
          </div>
          <p className="w-[628px] h-[456px] poppins-light text-[23px] leading-[120%] items-start">
            As a multi-sector leader spanning education, technology, and
            corporate strategy, I focus on building visionary organizations that
            create lasting impact. My approach combines innovative thinking with
            practical execution, ensuring sustainable growth and meaningful
            outcomes.
            <br className="h-[24px]" />{" "}
            <span className="block mt-6">
              Throughout my career, I've prioritized three core values:
              visionary leadership that anticipates future trends, strategic
              expansion that creates opportunities, and legacy-building that
              ensures continued impact long after initial success.
            </span>
          </p>
        </div>
        <div>
          <img
            src="/images/about_hero.jpg"
            alt="Cader Rahmathulla"
            className="w-[800px] h-[523px] rounded-[32px] border-[8px] border-[#03045E] object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center mt-[40px] mb-[20px]">
        <div className="flex gap-[40px]">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="w-[470px] h-[136px] rounded-[24px] border-[4px] border-[#03045E] p-[32px] flex flex-col justify-center items-center"
            >
              <div className="poppins-bold text-[40px] leading-[120%] text-[#03045E] items-center">
                {stat.number}
              </div>
              <div className="poppins-normal text-[23px] leading-[120%] items-center">
                {stat.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;