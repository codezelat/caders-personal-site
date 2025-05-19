
'use client';
import Image from 'next/image';
import leadershipData from '../data/leadershipData';

const LeadershipPortfolio = () => {
  return (
    <div className="w-full max-w-5xl relative flex items-start justify-between mx-auto py-16 px-4">
      {/* Left Column - All Logos */}
      <div className="flex flex-col items-end w-1/3 pr-8">
        {leadershipData.map((item, index) => (
          <div 
            key={item.id} 
            className={`p-2.5 relative ${index !== leadershipData.length - 1 ? 'mb-32' : ''}`}
            style={{ width: item.logoWidth, height: item.logoHeight }}
          >
            <Image 
              src={item.logoSrc}
              alt={item.logoAlt}
              width={item.logoWidth}
              height={item.logoHeight}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Center Column - Timeline with Lines */}
      <div className="relative flex flex-col items-center" style={{ minHeight: '600px' }}>
        {/* Vertical Dotted Line */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 border-l-4 border-dotted border-blue-500"
          style={{ 
            height: '532px',
            top: '0px'
          }}
        />
        
        {/* Blue Diamond at Top */}
        <div className="relative z-10 mb-8">
          <div className="w-6 h-6 bg-blue-500 transform rotate-45"></div>
        </div>
        
        {/* Timeline Items with Horizontal Lines */}
        {leadershipData.map((item) => (
          <div key={`timeline-${item.id}`} className="relative flex items-center mb-32 last:mb-0">
            {/* Horizontal Dotted Line */}
            <div 
              className="border-t-2 border-dotted border-gray-400"
              style={{ width: '214px' }}
            />
            {/* Black Dot at End */}
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        ))}
        
        {/* Blue Circle at Bottom */}
        <div className="relative z-10 mt-8">
          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Right Column - All Text Content */}
      <div className="flex flex-col w-2/3 pl-8">
        {leadershipData.map((item, index) => (
          <div key={item.id} className={index !== leadershipData.length - 1 ? 'mb-32' : ''}>
            <p className="text-gray-600 text-sm">{item.category}</p>
            <h3 className="text-xl font-bold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipPortfolio;
