import Link from "next/link";
import React from "react";


const Header: React.FC = () => {
  return (
    <header className="fixed flex justify-center items-center w-[1488px] h-[80px] top-[33px] px-[32px] left-[120px] rounded-[16px] pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm shadow-[0_0_8px_0_rgba(0,0,0,0.16)] bg-white/80 z-50">
      <div className="flex justify-between items-center ">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">
          <div className="playball-regular font-[400px] text-[42px] -tracking-4 text-[#03045E]">
            Cader{" "}
            <span className="playball-regular font-[400px] text-[24px] -tracking-4 text-[#000000]">
              Rahmathulla
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="w-[944px] h-[48px] gap-4 flex items-center justify-center">
        <ul className="flex items-center gap-[10px]">
          {[
            "About",
            "Leadership",
            "Ventures",
            "Investments",
            "Media",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="poppins-medium text-base hover:text-[#03045E] transition-colors  pl-[16px] pr-[16px] py-[8px] rounded-[8px]"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      </div>
      
    </header>
  );
};

export default Header;