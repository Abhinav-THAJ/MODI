"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { Shield, Zap, Globe2, HeartHandshake } from "lucide-react";

const pillars = [
  { 
    id: "01",
    title: "Inclusive Growth", 
    sanskrit: "Sabka Saath, Sabka Vikas",
    desc: "Uplifting the bottom of the pyramid through targeted welfare, financial inclusion, and housing for all.",
    colSpan: "md:col-span-2 lg:col-span-2",
    icon: HeartHandshake,
    color: "#FF9933"
  },
  { 
    id: "02",
    title: "Digital India", 
    sanskrit: "Tech-Driven Governance",
    desc: "Building the world's largest public digital infrastructure.",
    colSpan: "md:col-span-1 lg:col-span-1",
    icon: Zap,
    color: "#4CAF50"
  },
  { 
    id: "03",
    title: "Self-Reliant", 
    sanskrit: "Aatmanirbhar Bharat",
    desc: "Transforming India into a global manufacturing hub while securing defense capabilities.",
    colSpan: "md:col-span-1 lg:col-span-1",
    icon: Shield,
    color: "#FF6200"
  },
  { 
    id: "04",
    title: "Global Friend", 
    sanskrit: "Vishwa Mitra",
    desc: "Cementing India's position as a voice for the Global South and a reliable international partner.",
    colSpan: "md:col-span-2 lg:col-span-2",
    icon: Globe2,
    color: "#138808"
  },
];

export function HomeStats() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: "#FF9933", transform: "translate(-50%, -50%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.07] pointer-events-none" style={{ background: "#138808", transform: "translate(30%, 30%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-16 md:mb-20"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold block mb-4" style={{ color: "#FF6200" }}>
            — Core Philosophy —
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight" style={{ color: "#1A0500" }}>
            The Pillars of <br/><span style={{ color: "#FF6200" }}>New India</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.1 }}
              className={`relative p-8 md:p-10 rounded-3xl overflow-hidden group border transition-all duration-500 shadow-sm hover:shadow-xl bg-white ${pillar.colSpan}`}
              style={{ borderColor: "rgba(255,153,51,0.2)" }}
            >
              {/* Giant Watermark Number */}
              <div className="absolute -bottom-10 -right-6 font-serif text-[180px] font-black leading-none opacity-15 pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:opacity-30" style={{ color: pillar.color }}>
                {pillar.id}
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6 bg-[#FFF8F0]"
                  style={{ borderColor: "rgba(255,153,51,0.2)", color: pillar.color }}
                >
                  <pillar.icon size={26} strokeWidth={1.5} />
                </div>
                
                <div className="mt-auto">
                  <span className="font-mono text-[10px] tracking-widest uppercase font-bold mb-2 block" style={{ color: pillar.color }}>
                    {pillar.sanskrit}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: "#1A0500" }}>
                    {pillar.title}
                  </h3>
                  <p className="font-light leading-relaxed max-w-md transition-colors duration-500" style={{ color: "rgba(26,5,0,0.6)" }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
