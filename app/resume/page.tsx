"use client";

import React from "react";
import Head from "next/head";
import NetworkBackground from "@/components/network-background";

export default function SahirAliPortfolio() {
  return (
    <div>
      <NetworkBackground />
      <div id="resume">
        <Head>
          <title>Sahir Ali - Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          />
        </Head>

        <div className="font-[Inter]">
          <div className="container mx-auto p-4 sm:p-8 max-w-6xl">
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden relative">
              
              {/* Updated Save as PDF Button */}
              <a
                href="/sahir-cv.pdf"
                download
                className="no-print absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 z-10"
              >
                <i className="fas fa-file-pdf mr-2" />
                Save as PDF
              </a>

              <div className="md:flex">
                {/* Left Column */}
                <div className="w-full md:w-1/3 bg-gray-800 p-8 text-white">
                  

                  <div className="mt-10">
                    <h2 className="text-xl font-semibold border-b-2 border-gray-500 pb-2 mb-4">
                      Contact
                    </h2>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <i className="fas fa-envelope w-5 h-5 mr-3 text-blue-300" />
                        <a
                          href="mailto:sahirali9205@gmail.com"
                          className="text-gray-300 hover:text-white break-all"
                        >
                          sahirali9205@gmail.com
                        </a>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-phone w-5 h-5 mr-3 text-blue-300" />
                        <a
                          href="tel:+923213574864"
                          className="text-gray-300 hover:text-white"
                        >
                          +92 3213574864
                        </a>
                      </li>
                      <li className="flex items-center">
                        <i className="fab fa-linkedin w-5 h-5 mr-3 text-blue-300" />
                        <a
                          href="/about-image.png"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white"
                        >
                          LinkedIn Profile
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-xl font-semibold border-b-2 border-gray-500 pb-2 mb-4">
                      Education
                    </h2>
                    <p className="text-gray-300">
                      Pursuing a degree in
                      <strong className="font-semibold text-white">
                        {" "}
                        Electronics Engineering
                      </strong>{" "}
                      with a focus on semiconductors, renewable energy, and embedded
                      systems.
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-full md:w-2/3 p-8">
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-4">
                      Profile Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      A passionate Electronics Engineering student with a strong drive
                      for innovation in sustainable technology. Experienced in both
                      hardware and software development through academic coursework and
                      hands-on projects. Particularly interested in the convergence of AI,
                      Web 3.0, and eco-friendly engineering solutions to solve real-world
                      problems. A lifelong learner dedicated to continuous skill
                      development.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-4">
                      Skills
                    </h2>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">
                        E-Commerce & IT
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "C","C++","Openai Agent SDK", "Wordpress"].map((skill) => (
                          <span
                            key={skill}
                            className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-4">
                      Projects
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          Streamlit Applications
                        </h3>
                        <p className="text-gray-700 mt-1 mb-3">
                          A collection of web apps built with Python and Streamlit,
                          showcasing skills in data tools and UI development.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <a
                            href="https://secure-data-encryption456.streamlit.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition"
                          >
                            <strong>Secure Data Encryption</strong> - Privacy tool with
                            custom keys.
                          </a>
                          <a
                            href="https://lnkd.in/eX7SyXnQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition"
                          >
                            <strong>Password Strength Meter</strong> - Real-time password
                            analysis.
                          </a>
                          <a
                            href="https://lnkd.in/eSAxNEbX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition"
                          >
                            <strong>Personal Library Manager</strong> - Book collection
                            organizer with SQLite.
                          </a>
                          <a
                            href="https://lnkd.in/emKNmtXA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition"
                          >
                            <strong>Unit Converter</strong> - Versatile measurement
                            conversion tool.
                          </a>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          Robotics & Electronics
                        </h3>
                        <p className="text-gray-700 mt-1 mb-3">
                          Hands-on projects demonstrating core principles of automation,
                          control systems, and electronics.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>
                            <strong>Line Following Robot:</strong> Autonomous robot using
                            Arduino and IR sensors.
                          </li>
                          <li>
                            <strong>Soccer Robot:</strong> Remote-controlled bot with
                            Bluetooth and precision movement.
                          </li>
                          <li>
                            <strong>Lightweight War Bot:</strong> Agile and robust combat
                            robot for competitions.
                          </li>
                          <li>
                            <strong>Variable Power Supply:</strong> Foundational electronics
                            project with adjustable voltage/current.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
