import { Code, Palette, LineChart, Smartphone, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-10 h-10 text-pink-400" aria-label="Palette icon" />,
    title: "AI Developer",
    description:
      "Creating intelligent AI chatbot system that help peoples solves their problems.",
  },
  {
    icon: <Code className="w-10 h-10 text-pink-400" aria-label="Code icon" />,
    title: "Wordpress Development",
    description:
      "Custom web applications built with the latest technologies and best practices.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-pink-400" aria-label="Smartphone icon" />,
    title: "Electronic Engineer",
    description:
      "Certified Electric Engineer with expertise in designing and implementing electrical systems.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-pink-400" aria-label="Line chart icon" />,
    title: "Expert in Robotics",
    description:
      "Designing and building robots for various applications, from industrial automation to consumer products.",
  },
  {
    icon: <Globe className="w-10 h-10 text-pink-400" aria-label="Globe icon" />,
    title: "E-commerce",
    description:
      "Experience in building and managing e-commerce platforms, ensuring smooth transactions and user experience.",
  },
  {
    icon: <Zap className="w-10 h-10 text-pink-400" aria-label="Zap icon" />,
    title: "CIT",
    description:
      "Skilled in creating and managing IT systems, ensuring optimal performance and security.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            Our Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-white/80">
            Merging Smart Technologies with Engineering Excellence | Electrical Engineering Graduate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
