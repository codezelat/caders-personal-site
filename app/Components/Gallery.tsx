import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div 
      className="relative w-full xl:w-[]  overflow-hidden bg-white py-16"
      style={{
        width: "2180px",
        height: "671px",
        marginLeft: "-226px" 
        
      }}
    >
      {/* Gallery Grid */}
      <div className="grid grid-cols-6 gap-5 " style={{ height: "671px" }}>
        {/* Column 1 - Two stacked images */}
        <div className="flex flex-col space-y-5">
          <div className="rounded-3xl overflow-hidden" style={{ height: "325px" }}>
            <Image 
              width={317}
              height={325}
              src="/images/gallery1.jpg" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ height: "325px" }}>
            <Image 
              width={317}
              height={325}
              src="/images/gallery2.jpg" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Column 2 - Single tall image */}
        <div className="rounded-3xl overflow-hidden" style={{ height: "671px" }}>
          <Image 
            width={408}
            height={671}
            src="/images/gallery3.jpg" 
            alt="Gallery image" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Column 3-4 - Four images in a grid (spanning 2 columns) */}
        <div className="col-span-2 grid grid-cols-2 gap-5">
          <div className="rounded-3xl overflow-hidden" style={{ height: "325px" }}>
            <Image 
              width={317}
              height={325}
              src="/images/gallery4.jpg" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ height: "325px" }}>
            <Image 
              width={317}
              height={325}
              src="/images/gallery3.jpg" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ height: "325px" }}>
            <Image 
              width={317}
              height={325}
              src="/images/gallery5.jpg" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ height: "325px" }}>
            <Image 
              width={317}
              height={325}
              src="/images/gallery4.jpg" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Column 5 - Single tall image */}
        <div className="rounded-3xl overflow-hidden" style={{ height: "671px" }}>
          <Image 
            width={408}
            height={671}
            src="/images/gallery2.jpg" 
            alt="Gallery image" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Column 6 - Two stacked images */}
        <div className="flex flex-col space-y-5">
          <div className="rounded-3xl overflow-hidden" style={{ height: "325px" }}>
            <Image 
              width={317}
              height={325}
              src="/images/gallery5.jpg" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ height: "325px" }}>
            <Image 
              width={317}
              height={325}
              src="/images/gallery1.jpg" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;