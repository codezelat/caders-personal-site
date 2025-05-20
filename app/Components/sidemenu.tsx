import React, { useEffect } from "react";
import Link from "next/link";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      
      {/* Side Menu */}
      <div 
        className={`fixed top-0 right-0 w-full max-w-xs h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="text-lg font-medium text-[#03045E]">Menu</h2>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <CloseRoundedIcon />
            </button>
          </div>
          
          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1">
              {["About", "Leadership", "Ventures", "Investments", "Media", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="block px-6 py-3 text-lg font-medium hover:bg-gray-100 hover:text-[#03045E]"
                    onClick={onClose}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Footer */}
          <div className="px-6 py-4 border-t">
            <div className="playball-regular text-2xl text-[#03045E]">
              Cader <span className="text-black text-lg">Rahmathulla</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;