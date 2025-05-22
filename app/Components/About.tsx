"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const stats = [
    { number: "15+", text: "Active Leadership Roles" },
    { number: "4", text: "Countries" },
    { number: "12", text: "Ventures" },
  ];

  const galleryImages = [
    "/images/gallery4.jpg",
    "/images/gallery1.jpg",
    "/images/gallery3.jpg",
    "/images/gallery2.jpg",
  ];

  // Set up the image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="pt-[100px] sm:pt-[60px] xs:pt-[40px] pb-[20px] bg-[#ffffff] xl:px-[120px] lg:px-[80px] md:px-[40px] px-[20px]">
      <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col 2xs:flex-col items-center justify-center gap-[40px]">
        <div>
          <div className="poppins-medium text-heading-responsive leading-[120%] sm:leading-none items-center pb-[40px]">
            About{" "}
            <span className="playball-regular text-[80px] leading-[120%] items-center">
              Cader
            </span>
          </div>
          <p className="w-auto text-normal-responsive xl:w-[628px] lg:w-[400px] h-auto poppins-light text-[23px] text-text-normal-responsive leading-relaxed items-start">
            As a multi-sector leader spanning education, technology, and
            corporate strategy, I focus on building visionary organizations that
            create lasting impact. My approach combines innovative thinking with
            practical execution, ensuring sustainable growth and meaningful
            outcomes.
            <br className="h-[24px]" />{" "}
            <span className="block mt-6 text-normal-responsive">
              Throughout my career, I&apos;ve prioritized three core values:
              visionary leadership that anticipates future trends, strategic
              expansion that creates opportunities, and legacy-building that
              ensures continued impact long after initial success.
            </span>
          </p>
        </div>

        {/* Fixed height image carousel container */}
        <div className="relative w-full 2xs:w-[320px] xs:w-[375px] sm:w-[425px] md:px-10 sm:px-5 xs:px-5 2xs:px-5 md:w-[700px] lg:w-[800px] h-[220px] xs:h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
          {/* Image carousel with fade transition */}
          <div className="relative w-full h-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px] border-[4px] md:border-[6px] lg:border-[8px] border-[#03045E] overflow-hidden">
            {galleryImages.map((src, index) => (
              <Image
                key={index}
                src={src || "/placeholder.svg"}
                alt={`Cader Rahmathulla ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 320px) 100vw, (max-width: 375px) 375px, (max-width: 425px) 425px, (max-width: 768px) 700px, 800px"
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex  justify-center  mt-[40px] mb-[20px]">
        <div className="flex xl:flex-row md:flex-row lg:flex-row sm:flex-col xs:flex-col 2xs:flex-col gap-32 xl:gap-[25px] md:gap-[20px] lg:gap-[20px] sm:gap-[10px] xs:gap-[10px] 2xs:gap-[10px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-[470px]  xl:w-[370px] lg:w-[280px] md:w-[220px] sm:w-[370px] xs:w-[320px] 2xs:w-[270px]  h-[136px] rounded-[24px] border-[4px] border-[#03045E] p-[32px] flex flex-col justify-center items-center"
            >
              <div className="poppins-bold text-[40px] xl:text-[40px] lg:text-[40px] md:text-[36px] sm:text-[30px] xs:text-[30px] 2xs:text-[30px] leading-[120%] text-[#03045E] items-center">
                {stat.number}
              </div>
              <div className="poppins-normal text-[23px] text-normal-responsive leading-[120%] items-center">
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
