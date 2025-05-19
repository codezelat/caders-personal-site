import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full px-4 pt-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white shadow-lg rounded-[20px] p-4 z-50">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <div className="font-playball text-4xl text-[#03045E]">
              Cader{" "}
              <span className="font-playball text-2xl text-black">
                Rahmathulla
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center">
          <ul className="flex items-center gap-2">
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
                  className="font-poppins font-medium text-base hover:text-[#03045E] transition-colors px-4 py-2 rounded-lg"
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

export default Header;