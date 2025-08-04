"use client"

import type React from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/skills-section"
import PortfolioSection from "@/components/portfolio-section"
import Certificates from "@/components/certificate"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import NetworkBackground from "@/components/network-background"


export default function Home() {
  return (
 
    <main className="min-h-screen text-white relative overflow-x-hidden">
      <NetworkBackground/>
    
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Certificates />                        
      <ServicesSection />
      <PortfolioSection />
     
      
      <ContactSection />
      

      
        <Footer /> 

      
    </main>

  )
}
