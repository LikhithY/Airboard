/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

function SmallCard({img, location, distance}) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
     hover:bg-red-100 hover:scale-105 transition duration-200 ease-out">
    {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} fill className="rounded-lg" />

      </div>



    {/* Right */}
    <div>
        <h2 className="font-semibold">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
    </div>
    </div>
  )
}

export default SmallCard