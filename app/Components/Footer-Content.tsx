import React from 'react'

function FooterContent() {
  return (
    <div className='bg-[#101827] py-8 px-4 md:py-12 md:px-14'>
      <div className='max-w-6xl mx-auto text-center'>
        {/* Name */}
        <h1 className='text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playball mb-4 md:mb-6'>
          Cader <span className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl'>Rahmathulla</span>
        </h1>
        
        {/* Description */}
        <p className='text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        {/* Quick Links Title */}
        <h2 className='text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold mb-3 md:mb-4'>
          Quick Links
        </h2>
        
        {/* Links */}
        <p className='text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl'>
          About | Leadership | Ventures | Investments | Media | Contact
        </p>
      </div>
    </div>
  )
}

export default FooterContent;