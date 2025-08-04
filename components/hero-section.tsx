import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
      <div className="py-24 container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
           

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              <span className="bg-gradient-to-r from-red-400 to-pink-500 rounded-lg bg-clip-text text-transparent">
              I build{" "}Interactive  Technologies
              </span>
            </h1>

            <p className="text-lg text-white/60 max-w-lg">
              I build intelligent systems that blend AI, robotics, and electronics to solve real-world problems.
With a focus on innovation and efficiency, I build smart technologies for the future.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="btn  px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl  border-0"
              >
                Get Started
              </Link>
              <Link
                href="#portfolio"
                className="btn bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl  border-0"
              >
                View My Work
              </Link>
            </div>

        
          </div>

      <div className="py-24 relative flex items-center justify-center">
  {/* Outer circle with gradient border */}
  <div className=" bg-gradient-to-r from-red-500 to-pink-500 p-1 rounded-full">
    {/* Inner white circle (acts like background) */}
    <div className="bg-black rounded-full">
      <Image
        src="/hero-image.png"
        alt="Hero image"
        width={300}
        height={300}
        className="rounded-full object-cover w-96 h-96 border-4 border-transparent"
      />
    </div>
  </div>
</div>
</div>
      </div>
    
  )
}
