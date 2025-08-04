import Link from "next/link"
import Image from "next/image"
import VantaBackground from "./network-background"
import { Certificate } from "crypto"

export default function Footer() {
  return (
   
      <footer className="text-white/80 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Socials */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Image
                  src="/logo.png"
                  alt="Sahir-Ali Logo"
                  width={60}
                  height={60}
                />
                <span className="text-xl font-bold text-white">SA</span>
              </Link>
              <p className="text-gray-400 mb-6">
                We create digital experiences, websites, and AI agents that help businesses grow and provide personal support.
              </p>
              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/sahirali456"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.79 2.74 1.27 3.41.97.1-.77.41-1.27.75-1.56-2.56-.3-5.26-1.28-5.26-5.68 0-1.25.44-2.27 1.16-3.07-.12-.29-.5-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.98 0 1.97.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.61 1.57.24 2.73.12 3.02.72.8 1.15 1.82 1.15 3.07 0 4.41-2.7 5.37-5.28 5.67.42.36.8 1.07.8 2.15v3.19c0 .31.21.66.8.55A10.98 10.98 0 0 0 23.5 12c0-6.28-5.22-11.5-11.5-11.5Z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:syedsahirali639@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.4 4.25L12 13 5.4 8.25l-.9 1.2L12 15l7.5-5.55-.9-1.2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/sahir-ali-65380a33a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2h-3v-6.3c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.8 1.3-.1.2-.1.5-.1.7V21h-3s.04-11.5 0-12.7h3v1.8c.4-.6 1.2-1.4 2.9-1.4 2.1 0 3.7 1.4 3.7 4.5V21h0ZM5.3 8.3A1.7 1.7 0 1 1 5.3 5a1.7 1.7 0 0 1 0 3.3ZM7 21H3.5V8.3H7V21Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "About", "Skills", "Portfolio","Certificate", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Skills</h3>
              <ul className="space-y-3">
                {[
                  "AI Developer",
                  "WordPress Development",
                  "Electronic Engineer",
                  "Expert in Robotics",
                  "E-commerce",
                  "CIT",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="#services"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="mailto:syedsahirali639@gmail.com" className="hover:text-white transition">
                    syedsahirali639@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923213574864" className="hover:text-white transition">
                    +92 321 3574864
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
 
  )
}
