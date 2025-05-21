"use client"

import { useState, useEffect, useRef, type TouchEvent } from "react"
import Image from "next/image"

const Gallery = () => {
  // Images array for the mobile slider
  const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery1.jpg", // Duplicated to match your original gallery
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
  ]

 
  const [currentSlide, setCurrentSlide] = useState(0)

 
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Auto-slide functionality (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [galleryImages.length])


  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    // Minimum swipe distance (in px)
    const minSwipeDistance = 50

    const distance = touchStartX.current - touchEndX.current

    if (Math.abs(distance) < minSwipeDistance) return

    if (distance > 0) {
     
      setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
    } else {
   
      setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
    }
  }

  // Function to get the appropriate dot index for the limited dots display
  const getDotIndex = (index: number) => {
  
    return Math.floor((index * 5) / galleryImages.length)
  }

  return (
    <>
      {/* Mobile Slider - Only visible on mobile screens */}
      <div className="block md:hidden w-full py-16 bg-white">
        <div className="relative px-4">
          <div
            className="rounded-3xl overflow-hidden h-[400px] w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              width={400}
              height={400}
              src={galleryImages[currentSlide] || "/placeholder.svg"}
              alt={`Gallery image ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slide Indicators - Only 5 dots */}
          <div className="flex justify-center mt-4 gap-2">
            {[0, 1, 2, 3, 4].map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => {
                  // Calculate which slide this dot represents
                  const targetSlide = Math.floor((dotIndex * galleryImages.length) / 5)
                  setCurrentSlide(targetSlide)
                }}
                className={`w-2 h-2 rounded-full ${
                  getDotIndex(currentSlide) === dotIndex ? "bg-[#03045E] " : "bg-gray-300"
                }`}
                aria-label={`Go to slide group ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Original Desktop Gallery - Hidden on mobile */}
      <div
        className="hidden md:block relative w-full xl:w-[]  overflow-hidden bg-white py-16 mb-20"
        style={{
          width: "2180px",
          height: "671px",
          marginLeft: "-226px",
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
    </>
  )
}

export default Gallery
