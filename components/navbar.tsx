"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"


const navLinks = [
  {  name: "Home", href: "/"  },
  { name: "About", href: "#about" },
  {name:"Certificates", href:"#certificates"},
  { name: "Skills", href: "#services" },
  { name: "Projects", href: "#portfolio" },
  { name: "Contact", href: "#contact" },

]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
<header className="h-16 fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm">

      <div className="container-custom">
        <div className="flex items-center justify-between p">
          <Link href="/" className="flex items-center gap-2 rounded-lg text-2xl">
            <Image src="/logo.png" alt="Sahir Logo" width={80} height={80} />
          </Link>

          {/* Desktop Navigation */}
          <nav className=" hidden md:flex items-center gap-8 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className=" flex items-center gap-2 text-white/80 hover:text-red-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button type="button" className="md:hidden text-secondary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className=" md:hidden py-4 px-4 bg-[#23153c]  backdrop-blur-md  border-t">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 text-white/50 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
           
          </ul>
        </nav>
      )}
    </header>
  )
}
