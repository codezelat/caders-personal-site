'use client';
import Hero from "./Components/Hero";
import LeadershipPortfolio from "./Components/leadership";
import MediaPage from "./Components/media-page";



export default function Page() {
  return (
    <div className="bg-[#FFFFFF66] backdrop-blur-[8px] min-h-screen">
      <Hero/>
      <LeadershipPortfolio/>
      <MediaPage/>
    </div>
  )
}