"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMotionConfig } from "@/hooks/useMotionConfig";

const awards = [
  { name: "Order of King Abdulaziz",         country: "Saudi Arabia",  year: 2016, code: "sa", accent: "#138808" },
  { name: "Order of Zayed",                  country: "UAE",           year: 2019, code: "ae", accent: "#FF9933" },
  { name: "Order of St. Andrew the Apostle", country: "Russia",        year: 2019, code: "ru", accent: "#FF6200" },
  { name: "King Hamad Order of Renaissance", country: "Bahrain",       year: 2019, code: "bh", accent: "#D4881E" },
  { name: "Order of the Druk Gyalpo",        country: "Bhutan",        year: 2021, code: "bt", accent: "#FF9933" },
  { name: "Grand Cross of Legion of Honour", country: "France",        year: 2023, code: "fr", accent: "#138808" },
  { name: "Order of the Nile",               country: "Egypt",         year: 2023, code: "eg", accent: "#FF6200" },
  { name: "Champions of the Earth",          country: "United Nations", year: 2018, code: "un", accent: "#138808" },
  { name: "Legion of Merit",                 country: "USA",           year: 2020, code: "us", accent: "#FF9933" },
  { name: "Order of Izzuddin",               country: "Maldives",      year: 2019, code: "mv", accent: "#D4881E" },
];

export function AwardsSection() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section id="awards" className="py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FFF3E0 0%, #FFF8F0 100%)" }}
    >
      <div className="container mx-auto px-6">
        {/* Banner image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-20 h-64 md:h-72 shadow-xl border"
          style={{ borderColor: "rgba(255,153,51,0.2)" }}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <Image
            src="/awards_banner.jpg"
            alt="International honours and medals"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Light overlay so text is readable on the photo */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(255,248,240,0.93) 0%, rgba(255,248,240,0.75) 50%, rgba(255,248,240,0.2) 100%)" }} />

          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
            <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold mb-4" style={{ color: "#FF6200" }}>
              — World Recognition —
            </span>
            <h2 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "#1A0500" }}>
              International Honours
            </h2>
            <p className="text-lg max-w-lg font-light" style={{ color: "rgba(26,5,0,0.6)" }}>
              Over two dozen civilian honours & state decorations from nations across four continents.
            </p>
          </div>
        </motion.div>

        {/* Award cards - Premium Redesign */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={award.name}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative rounded-3xl overflow-hidden p-8 transition-all duration-500 border shadow-sm hover:shadow-xl"
              style={{
                background: "linear-gradient(145deg, #FFFFFF 0%, #FFF8F0 100%)",
                borderColor: "rgba(255,153,51,0.2)"
              }}
            >
              {/* Giant Watermark Year */}
              <div className="absolute -bottom-8 -right-4 font-serif text-[120px] font-black leading-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2"
                style={{
                  WebkitTextStroke: `2px ${award.accent}`,
                  color: "transparent",
                  opacity: 0.08
                }}
              >
                {award.year}
              </div>

              {/* Glowing accent orb on hover */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ background: award.accent, transform: "translate(30%, -30%)" }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <div className="flex items-start justify-between">
                  <div
                    className="relative w-12 h-9 rounded-sm shadow-sm overflow-hidden border border-gray-200 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://flagcdn.com/w80/${award.code}.png`} alt={`${award.country} flag`} className="object-cover w-full h-full" />
                  </div>
                  <span
                    className="px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest border shadow-sm transition-colors duration-300 group-hover:text-white"
                    style={{ 
                      color: award.accent, 
                      borderColor: "rgba(255,153,51,0.2)", 
                      background: "rgba(255,255,255,0.7)" 
                    }}
                  >
                    {award.country}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-3xl leading-tight mb-4 transition-colors duration-300 group-hover:text-orange-600"
                    style={{ color: "#1A0500" }}
                  >
                    {award.name}
                  </h4>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-0.5 rounded-full transition-all duration-700 w-12 group-hover:w-24"
                      style={{ background: award.accent }}
                    />
                    <span className="font-mono text-xs tracking-widest uppercase transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ color: award.accent }}>
                      Honoured
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
