import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  // You can define props here if needed
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed w-[1488px] h-[80px] pt-[33px] rounded-[16px]   bg-[#ffffff] shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
          <div className="playball-regular font-[400px] text-[42px] -tracking-4 text-[#03045E]">Cader <span className="playball-regular font-[400px] text-[24px] -tracking-4 text-[#000000]">Rahmathulla</span>
            </div></Link>
          
            
        </div>
        
        <nav className=" md:block ">
          <ul className="flex space-x-8">
            <li>
              <Link href="#home" className="hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-600 transition-colors">
                Leadership
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-600 transition-colors">
                Ventures
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600 transition-colors">
                Investments
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600 transition-colors">
                Media
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
            
          </ul>
        </nav>

        <button className="">
          {/* Hamburger menu icon for mobile */}
         
        </button>
      </div>
    </header>
  );
};

export default Header;