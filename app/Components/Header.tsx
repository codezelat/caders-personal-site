"use client";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import {
  contactLink,
  navigationLinks,
  type NavigationLink,
} from "../data/navigation";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("");

  const navItems = navigationLinks.filter((link) => link.id !== "contact");

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
  function handleClick(item: NavigationLink): void {
    setActiveItem(item.id);
    setIsSidebarOpen(false);
  }

  return (
    <>
      <header className="fixed top-[16px] left-[220px] xl:left-[120px] lg:left-[5px] md:left-0 sm:left-0 xs:left-0 2xs:left-0  w-full px-4 py-5 z-50 justify-start bg-transparent shadow-none flex  -mt-4 xl:pr-[220px]">
        <div className="w-fit lg:w-full max-w-full 2xl:max-w-[2200px] bg-white/70 backdrop-blur-sm rounded-[16px] px-4 py-3 sm:px-2 xs:px-2 2xs:px-2 sm:py-1 xs:py-1 2xs:py-1 shadow-md flex justify-between items-center">
          {/* Logo - Hidden on mobile, visible on lg and above */}
          <div className="text-2xl font-bold hidden lg:block">
            <Link href="/">
              <div className="playball-regular text-[32px] text-[#03045E]">
                Cader{" "}
                <span className="text-[20px] text-black">Rahmathulla</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-4 items-center">
            <ul className="flex gap-[10px] items-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="poppins-medium text-base hover:text-[#03045E] transition-colors px-[16px] py-[8px] rounded-[8px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {contactLink && (
              <Link href={contactLink.href}>
              <Button>Contact With Cader</Button>
            </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#03045E]"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </header>

      {/* Sidebar and Overlay */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />

          <div
            className={`fixed top-0 right-0 w-full h-screen bg-white shadow-lg z-50 transform transition-transform duration-300 lg:hidden ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between px-4 py-4 ">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>

              <ul className="flex flex-col items-center p-4 gap-5 w-full">
                {navItems.map((item) => (
                  <li key={item.id} className="w-full">
                    <Link
                      href={item.href}
                      onClick={() => handleClick(item)}
                      className={`block text-lg font-bold text-center p-2 rounded-[8px] transition-colors w-full
          ${
            activeItem === item.id
              ? "bg-gray-200 text-[#03045E]" // <-- ACTIVE: new text color
              : "text-[#03055ea5] hover:underline"
          }`}
                    >
                      {item.label}
                    </Link>
                    <hr className="border-t border-gray-300 w-3/4 mx-auto" />
                  </li>
                ))}

                {contactLink && (
                  <li className="w-full">
                    <Link
                      href={contactLink.href}
                      onClick={() => handleClick(contactLink)}
                      className={`block text-lg font-bold text-center p-2 rounded-[8px] transition-colors w-full ${
                        activeItem === contactLink.id
                          ? "bg-gray-200 text-[#03045E]"
                          : "bg-[#03045E] text-white hover:bg-[#050674]"
                      }`}
                    >
                      Contact With Cader
                    </Link>
                  </li>
                )}
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
