import React from 'react'

function FooterPage() {
  return (
    <div className='bg-[#03045E] font-poppins'>
      <div className='flex flex-col md:flex-row items-center justify-between py-3 px-4 md:px-14 gap-2 md:gap-0'>
        {/* Copyright text */}
        <h1 className='text-white text-center md:text-left text-sm xs:text-base sm:text-lg md:text-xl lg:text-[24px] order-2 md:order-1'>
          © 2025 Cader Rahmathulla. All rights reserved
        </h1>
        
        {/* Terms and Privacy Policy */}
        <h1 className='text-white text-center md:text-right text-sm xs:text-base sm:text-lg md:text-xl lg:text-[24px] order-1 md:order-2'>
          Terms of Use  |  Privacy Policy
        </h1>
      </div>
    </div>
  )
}

export default FooterPage;