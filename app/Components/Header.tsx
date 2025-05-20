// import Link from "next/link";
// import React from "react";
// // import MenuIcon from '@mui/icons-material/Menu';

// const Header: React.FC = () => {
//   return (
//     <header className="fixed flex justify-center items-center w-[1488px] h-[80px] top-[33px] px-[32px] left-[120px] rounded-[16px] pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm shadow-[0_0_8px_0_rgba(0,0,0,0.16)] bg-white/80 z-50">
//       <div className="flex justify-between items-center ">
//       {/* Logo */}
//       <div className="text-2xl font-bold">
//         <Link href="/">
//           <div className="playball-regular font-[400px] text-[42px] -tracking-4 text-[#03045E]">
//             Cader{" "}
//             <span className="playball-regular font-[400px] text-[24px] -tracking-4 text-[#000000]">
//               Rahmathulla
//             </span>
//           </div>
//         </Link>
//       </div>

//       {/* Navigation */}
//       <nav className="w-[944px] h-[48px] gap-4 flex items-center justify-center">
//         <ul className="flex items-center gap-[10px]">
//           {[
//             "About",
//             "Leadership",
//             "Ventures",
//             "Investments",
//             "Media",
//             "Contact",
//           ].map((item) => (
//             <li key={item}>
//               <Link
//                 href={`#${item.toLowerCase()}`}
//                 className="poppins-medium text-base hover:text-[#03045E] transition-colors  pl-[16px] pr-[16px] py-[8px] rounded-[8px]"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       </div>
      
//     </header>
//   );
// };

// export default Header;





import Link from "next/link";
import React, { useState, useEffect } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SideMenu from "./sidemenu";


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize to detect mobile screens
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Consider screens below 1024px as mobile
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      {!isMobile && (
        <header className="fixed flex justify-center items-center w-[1488px] h-[80px] top-[33px] px-[32px] left-[120px] rounded-[16px] pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm shadow-[0_0_8px_0_rgba(0,0,0,0.16)] bg-white/80 z-50">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <Link href="/">
                <div className="playball-regular font-[400] text-[42px] -tracking-4 text-[#03045E]">
                  Cader{" "}
                  <span className="playball-regular font-[400] text-[24px] -tracking-4 text-[#000000]">
                    Rahmathulla
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
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
                      className="poppins-medium text-base hover:text-[#03045E] transition-colors pl-[16px] pr-[16px] py-[8px] rounded-[8px]"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      )}

      {/* Mobile Header */}
      {isMobile && (
        <header className="fixed w-full left-0 top-0 px-4 py-3 flex justify-between items-center backdrop-blur-sm shadow-[0_0_8px_0_rgba(0,0,0,0.16)] bg-white/80 z-40">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              <div className="playball-regular font-[400] text-3xl -tracking-4 text-[#03045E]">
                Cader{" "}
                <span className="playball-regular font-[400] text-xl -tracking-4 text-[#000000]">
                  Rahmathulla
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-700"
            aria-label="Open menu"
          >
            <MenuRoundedIcon fontSize="large" />
          </button>
        </header>
      )}

      {/* Side Menu - Only renders and works on mobile */}
      {isMobile && <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;