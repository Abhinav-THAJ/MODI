"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  { 
    title: "Decade of Transformation", 
    desc: "Explore the chronological journey of governance.", 
    link: "/journey", 
    color: "#FF9933",
    image: "/infrastructure.jpg"
  },
  { 
    title: "Global Standing", 
    desc: "Discover foreign policy and international relations.", 
    link: "/awards", 
    color: "#138808",
    image: "/awards_banner.jpg"
  },
  { 
    title: "Welfare & Inclusion", 
    desc: "Dive into schemes driving grassroots empowerment.", 
    link: "/schemes", 
    color: "#FF6200",
    image: "/welfare.jpg"
  },
];

export function HomeHighlights() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between md:items-end gap-6"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold block mb-4" style={{ color: "#138808" }}>
              — Explore Further —
            </span>
            <h2 className="font-serif text-5xl md:text-6xl" style={{ color: "#1A0500" }}>
              Deep Dives
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.15 }}
              className="h-[400px] lg:h-[480px]"
            >
              <Link href={feat.link} className="block group relative w-full h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                
                {/* Background Image */}
                <Image 
                  src={feat.image} 
                  alt={feat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Colored Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: feat.color }} />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3 leading-tight">
                      {feat.title}
                    </h3>
                    <p className="font-light text-white/70 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {feat.desc}
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-2"
                        style={{ background: feat.color, color: "#fff" }}
                      >
                        <ArrowRight size={18} />
                      </div>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-white/90">
                        Explore
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
