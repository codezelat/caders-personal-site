'use client';
import Image from 'next/image'
import Header from './Components/Header'
import LeadershipPortfolio from './Components/leadership'
import MediaPage from './Components/media-page'
import Button from './Components/ui/Button' 


export default function Page() {
  const handleExploreClick = () => {
    console.log('Explore My Ventures clicked');
  };

  return (
    <div className="bg-[#e9e9e9] min-h-screen">
      <Header/>
      {/* Main container with padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-32 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 py-8 lg:py-16">
          <div className="mb-6">
            <h1 className="font-playball text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-[#03045E] mb-8">Cader</h1>
            <h1 className="font-playball text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-black -mt-2 sm:-mt-4 md:-mt-6">
              Rahmathulla
            </h1>
          </div>
          
          <p className="font-poppins text-xl sm:text-2xl md:text-3xl font-medium leading-tight text-gray-700 mb-6 max-w-md">
            Driving growth across sectors through purpose-led leadership
          </p>       
          
          <div className="flex flex-wrap items-center gap-2 text-base md:text-lg font-medium text-gray-800 mb-8">
            <span>Investor</span>
            <span className="mx-1 md:mx-2">|</span>
            <span>CEO</span>
            <span className="mx-1 md:mx-2">|</span>
            <span>Visionary Leader</span>
            <span className="mx-1 md:mx-2">|</span>
            <span>Board Strategist</span>
          </div>

          <Button onClick={handleExploreClick}>
            Explore My Ventures
          </Button>
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative w-full md:w-[80%] lg:w-full">
            <Image
              src="/images/CaderImage.svg"
              alt="Cader Rahmathulla"
              width={1080}
              height={959}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <LeadershipPortfolio/>
      <MediaPage/>
    </div>
  )
}