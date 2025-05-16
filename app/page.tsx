import Image from 'next/image'
import '../app/globals.css'

export default function Page() {
  return(
      <>
    <div className="bg-[#FFFFFF66]">
      <h1>
        Driving growth across sectors through purpose-led leadership
      </h1>
      <Image
        src={'/images/caderimage.png'} alt='cader' width={50} height={50}/>
    </div>
  </>
  )

}