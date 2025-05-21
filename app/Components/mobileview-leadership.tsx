import Image from "next/image"

function MobileviewLeadershipPage() {
  return (
    <div className="md:hidden space-y-16">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-[200px] h-[80px] relative mb-2">
          <Image
            src="/images/lbcicon.png"
            alt="London Business Consultancy"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-600 text-sm mb-1">Expanding Global Strategy</p>
          <h3 className="text-xl font-bold">Executive Board Member – LBC UK</h3>
        </div>
      </div>
      {/* Second role */}
      <div className="relative">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-[200px] h-[200px] relative mb-2">
            <Image
              src="/images/Sitc.jpg"
              alt="SITC Campus"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-sm mb-1">Transforming Education</p>
            <h3 className="text-xl font-bold">CEO – SITC Campus</h3>
          </div>
        </div>
      </div>

      {/* Third role */}
      <div className="relative">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-[207px] h-[200px] relative mb-2">
            <Image
              src="/images/codezela.png"
              alt="Codezela Technologies"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-sm mb-1">Fueling Digital Innovation</p>
            <h3 className="text-xl font-bold">COO – Codezela Technologies</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileviewLeadershipPage
