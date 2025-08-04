"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import VantaBackground from "./network-background";

export default function AboutSection() {
  return (
   
      <section id="about" className="section py-24 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="py-12 relative flex items-center justify-center">
              <div className=" bg-gradient-to-r from-red-500 to-pink-500 p-1 rounded-full">
                <div className="bg-black rounded-full">
                  <Image
                    src="/about-image.png"
                    alt="about image"
                    width={300}
                    height={300}
                    className="rounded-full object-cover w-96 h-96 border-4 border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="text-white animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm font-medium text-primary">
                  About Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg bg-clip-text text-transparent leading-snug">
                I can Create AI Agents <br /> and Python Projects
              </h2>

              <p className="text-white/80 mb-6 leading-relaxed">
                Motivated and detail-oriented entry-level Software and
                Electronics learner with hands-on exposure to AI, E-commerce,
                and IT systems. Adept at problem-solving, quick learning, and
                collaborating within team-based environments. Eager to
                contribute to software house projects involving web
                technologies, embedded systems, or AI. Known for strong
                communication skills, fast adaptability, and a passion for
                innovation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Expert Team",
                  "Innovative Solutions",
                  "Client-Focused Approach",
                  "Timely Delivery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/resume"
                className="btn btn-primary bg-gradient-to-r from-red-500 to-pink-500 text-white transition duration-300 px-6 py-3 rounded-full shadow-lg"
              >
                Visit Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    
  );
}
