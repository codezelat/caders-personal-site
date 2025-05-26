"use client";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import Button from "./ui/Button";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    "About",
    "Leadership",
    "Ventures",
    "Investments",
    "Media",
  ];

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header
className="fixed top-[33px] left-1/2 transform -translate-x-1/2 w-full 
max-w-[95%] 2xl:max-w-[1400px] px-4 py-4 z-50 bg-white/80 backdrop-blur-lg 
shadow-md rounded-[16px] flex justify-between items-center"
      >
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <div className="playball-regular text-[32px] text-[#03045E]">
              Cader <span className="text-[20px] text-black">Rahmathulla</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex gap-4 items-center">
          <ul className="flex gap-[10px] items-center">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="poppins-medium text-base hover:text-[#03045E] transition-colors px-[16px] py-[8px] rounded-[8px]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#contact">
            <Button>Contact With Cader</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-[#03045E]"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon fontSize="large" />
        </button>
      </header>

      {/* Sidebar and Overlay */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 xl:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />

          <div
            className={`fixed top-0 right-0 w-full h-screen bg-white shadow-lg z-50 transform transition-transform duration-300 xl:hidden ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <span className="text-xl font-semibold text-[#03045E]">Menu</span>
                <button onClick={() => setIsSidebarOpen(false)} aria-label="Close menu">
                  <CloseIcon />
                </button>
              </div>

              <ul className="flex flex-col items-center p-4 gap-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsSidebarOpen(false)}
                      className="text-base text-[#03045E] hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#contact"
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-base text-[#03045E] hover:underline"
                  >
                    Contact With Cader
                  </Link>
                </li>
              </ul>

              <div className="px-4 py-6 border-t text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} Cader Rahmathulla
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;

