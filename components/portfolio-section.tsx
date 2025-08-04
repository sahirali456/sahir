import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Military-Grade Data Encryption",
    image: "/p-5.jpg",
    link: "https://secure-data-encryption456.streamlit.app/",
  },
  {
    title: "Password-Strength-Meter",
    image: "/p-4.jpg",
    link: "https://password-strength-meter-1234.streamlit.app/",
  },
  {
    title: "Personal-Library-Manager",
    image: "/p-3.jpg",
    link: "https://personal-library-manager-0.streamlit.app/",
  },
  {
    title: "Unit-converter",
    image: "/p-2.jpg",
    link: "https://unit-converter-098.streamlit.app/",
  },
  {
    title: "Business Help Bot",
    image: "/p-0.jpg",
    link: "https://business-help-bot.vercel.app/",
  },
  {
    title: "Growth-Mindset",
    image: "/p-1.jpg",
    link: "https://growth-mindset-098.streamlit.app/",
  },
];

const Robotics = [
  {
    title: "Line Following Robot",
    description: `Purpose: Follows a path autonomously using sensors.\nTech: Arduino, IR Sensors, Motors\nFeatures: Precise line tracking, adjustable speed/sensitivity, compact design.`,
  },
  {
    title: "Soccer Robot",
    description: `Purpose: Plays soccer via Bluetooth remote control.\nTech: Arduino, Bluetooth Module, Motors\nFeatures: Remote-controlled, accurate movement, strong ball control, lightweight build.`,
  },
  {
    title: "Lightweight War Bot",
    description: `Purpose: Combat robot for competitions.\nTech: Arduino, Motors, Weapon Systems\nFeatures: High agility, effective weapons, durable and light structure.`,
  },
];

const electronics = [
  {
    title: "Electronics Projects",
    description: `Variable Power Supply\nTech: Resistors, Capacitors, Transformer\nFeatures: Adjustable voltage & current, stable output, compact design.`,
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section">
      <div className="container-custom">
        {/* Main Projects Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-pink-500 mx-auto mb-4"></div>
          <p className="text-white/80">
            Explore our recent projects and see how we've build projects achieve our digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Robotics & Electronics Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-white bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 ">
          {/* Robotics Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-400">Robotics Projects</h3>
            {Robotics.map((item, index) => (
              <div key={index} className="mb-6 bg-white/10 p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-1 text-red-300">{item.title}</h4>
                <p className="whitespace-pre-line text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Electronics Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-400">Electronics Projects</h3>
            {electronics.map((item, index) => (
              <div key={index} className="mb-6 bg-white/10 p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-1 text-red-300">{item.title}</h4>
                <p className="whitespace-pre-line text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
