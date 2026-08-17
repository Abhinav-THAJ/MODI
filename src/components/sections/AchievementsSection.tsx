"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMotionConfig } from "@/hooks/useMotionConfig";

const achievements = [
  {
    category: "Digital India", headline: "UPI & Digital Payments",
    description: "India processes more real-time digital transactions than the rest of the world combined. UPI clocked 100 billion transactions in 2023 alone — a 100× growth under the Digital India program.",
    stat: "100×", statLabel: "Growth in digital transactions", image: "/digital_india.jpg", accent: "#FF9933", lightBg: "#FFF3E0",
  },
  {
    category: "Infrastructure", headline: "Roads, Rails & Connectivity",
    description: "National highway construction pace doubled. Vande Bharat trains launched across India. 21× increase in modern railway coach production.",
    stat: "2×", statLabel: "Highway construction speed", image: "/infrastructure.jpg", accent: "#138808", lightBg: "#F0FFF0",
  },
  {
    category: "Welfare", headline: "Lifting 25 Crore from Poverty",
    description: "An estimated 25 crore people lifted out of multidimensional poverty in 12 years through JAM Trinity, direct benefit transfers and comprehensive welfare programs.",
    stat: "25 Cr", statLabel: "People lifted from poverty", image: "/welfare.jpg", accent: "#FF6200", lightBg: "#FFF8F0",
  },
];

export function AchievementsSection() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section id="achievements" className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-20"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold block mb-4" style={{ color: "#FF6200" }}>
            — A Decade of Change —
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6" style={{ color: "#1A0500" }}>Major Achievements</h2>
          <p className="max-w-2xl mx-auto text-lg font-light" style={{ color: "rgba(26,5,0,0.55)" }}>
            Landmark transformations across sectors that have reshaped India's trajectory.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20">
          {achievements.map((item, i) => (
            <motion.div key={item.headline}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }}
              transition={{ ...transition, delay: 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video border"
                  style={{ borderColor: "rgba(255,153,51,0.15)" }}
                >
                  <Image src={item.image} alt={item.headline} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                  <div className="absolute inset-0 opacity-10 rounded-3xl" style={{ background: item.accent }} />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 rounded-3xl p-8" style={{ background: item.lightBg }}>
                <span className="inline-block px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider mb-4 text-white"
                  style={{ background: item.accent }}
                >{item.category}</span>
                <h3 className="font-serif text-4xl md:text-5xl mb-5 leading-tight" style={{ color: "#1A0500" }}>{item.headline}</h3>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(26,5,0,0.65)" }}>{item.description}</p>
                <div className="flex items-end gap-4 pt-6" style={{ borderTop: `2px solid ${item.accent}20` }}>
                  <span className="font-serif text-6xl md:text-7xl font-bold" style={{ color: item.accent }}>{item.stat}</span>
                  <span className="font-mono text-sm uppercase tracking-wider pb-2" style={{ color: "rgba(26,5,0,0.4)" }}>{item.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
