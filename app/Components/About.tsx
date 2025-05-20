import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  const stats = [
    { number: "15+", text: "Active Leadership Roles" },
    { number: "4", text: "Countries" },
    { number: "12", text: "Ventures" },
  ];

  return (
    <div className="pt-[100px] sm:pt-[60px] xs:pt-[40px] pb-[20px] bg-[#ffffff] xl:px-[120px] lg:px-[80px] md:px-[40px] px-[20px]">
      <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col 2xs:flex-col  items-center justify-center gap-[40px]">
        <div>
          <div className="poppins-medium text-heading-responsive  leading-[120%] items-center pb-[40px]">
            About{" "}
            <span className="playball-regular text-[80px] leading-[120%] items-center">
              Cader
            </span>
          </div>
          <p className="w-auto xl:w-[628px] lg:w-[400px] h-auto poppins-light text-[23px] text-text-normal-responsive leading-relaxed items-start">
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
          <Image
            width={800}
            height={523}
            src="/images/about_hero.jpg"
            alt="Cader Rahmathulla"
            className="w-auto h-auto rounded-[32px] border-[8px] border-[#03045E] object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex  justify-center  mt-[40px] mb-[20px]">
        <div className="flex xl:flex-row md:flex-row lg:flex-row sm:flex-col xs:flex-col 2xs:flex-col gap-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-[470px]  xl:w-[370px] lg:w-[250px] md:w-[200px] sm:w-[370px] xs:w-[320px] 2xs:w-[270px]  h-[136px] rounded-[24px] border-[4px] border-[#03045E] p-[32px] flex flex-col justify-center items-center"
            >
              <div className="poppins-bold text-[40px] xl:text-[40px] lg:text-[40px] md:text-[36px] sm:text-[30px] xs:text-[30px] 2xs:text-[30px] leading-[120%] text-[#03045E] items-center">
                {stat.number}
              </div>
              <div className="poppins-normal text-[23px] text-text-normal-responsive leading-[120%] items-center">
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
