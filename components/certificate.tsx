"use client";

import React, { useState } from "react";
import NetworkBackground from "./network-background";
import Image from "next/image";

const cards = [
  {
    title: "Participation in PROBATTLE at IBA University",
    description:
      "Participated in PROBATTLES at IBA, demonstrating problem-solving and teamwork in a competitive setting.",
    image: "/c-1.jpg",
    link: "https://drive.google.com/uc?export=download&id=1ForuQl2y9NRhx-8mSjLghEw2CHpgT-QM",
  },
  {
    title: "WordPress Certificate",
    description:
      "Completed WordPress training including website creation, theme customization, and plugin integration.",
    image: "/c-4.jpg",
    link: "https://drive.google.com/uc?export=download&id=1JvjOymiYh23Nk_snlHzM1zp0Amicj1jL",
  },
  {
    title: "Internship in Robotics",
    description:
      "Interned in Robotics with hands-on work on sensors, motor control, and automation systems.",
    image: "/c-5.jpg",
    link: "https://drive.google.com/uc?export=download&id=1JvFjD8Wd7wcbA0mgv3iEaK2c5nO_aW65",
  },
  {
    title: "CIT Certificates",
    description:
      "Learned MS Office, internet fundamentals, and essential computer skills in the CIT program.",
    image: "/c-2.jpg",
    link: "https://drive.google.com/uc?export=download&id=19uldDoM-4OJx4lkqlDN4n50gyIeDoILG",
  },
  {
    title: "English Language",
    description:
      "Completed English language training focused on grammar, vocabulary, and effective communication.",
    image: "/c-3.jpg",
    link: "https://drive.google.com/uc?export=download&id=1nDnsmLgI_CHC_xGbhntbdp3Ob5CrFGdZ",
  },
];

type SelectedType = {
  image: string;
  link: string;
  title: string;
} | null;

const Certificates: React.FC = () => {
  const [selected, setSelected] = useState<SelectedType>(null);

  return (
    <div id="certificates" className="relative min-h-screen w-full overflow-x-hidden text-white">
      <NetworkBackground />

      <div className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg bg-clip-text text-transparent">
          My Certificates
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-pink-500 mx-auto mb-2"></div>
        <p className="text-white/80 text-center mb-4">
          Explore my certifications earned through participation, training, and internships.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm shadow-xl hover:scale-105 flex flex-col border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div
                onClick={() =>
                  setSelected({ image: card.image, link: card.link, title: card.title })
                }
                className="relative w-full h-52 mb-4 overflow-hidden rounded-md cursor-pointer"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-white/80 mb-4">{card.description}</p>

              <button
                onClick={() =>
                  setSelected({ image: card.image, link: card.link, title: card.title })
                }
                className="mt-auto bg-gradient-to-r from-red-500 to-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-lg transition"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-white text-3xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <Image
              src={selected.image}
              alt={`Certificate - ${selected.title}`}
              width={800}
              height={600}
              className="mx-auto rounded-xl shadow-lg mb-4 object-contain"
            />

            <a
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
            >
              Download Certificate
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
