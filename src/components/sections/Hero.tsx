"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { ChevronDown } from "lucide-react";

const quickFacts = [
  { label: "Born",       value: "17 Sep 1950", sub: "Vadnagar, Gujarat" },
  { label: "Party",      value: "BJP",          sub: "Bharatiya Janata Party" },
  { label: "Gujarat CM", value: "2001–2014",    sub: "13 Years" },
  { label: "PM Terms",   value: "3 Terms",      sub: "Since May 2014" },
];

export function Hero() {
  const { shouldReduceMotion } = useMotionConfig();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #FFF3E8 50%, #FFFDF5 100%)" }}
    >
      {/* Tricolour stripe at very top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex z-20">
        <div className="flex-1" style={{ background: "#FF9933" }} />
        <div className="flex-1" style={{ background: "#FFFFFF" }} />
        <div className="flex-1" style={{ background: "#138808" }} />
      </div>

      {/* Subtle Ashoka wheel watermark */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none opacity-[0.04]">
        <Image src="/hero_bg.jpg" alt="" fill className="object-cover" priority />
      </div>

      {/* Saffron glow — bottom-left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "#FF9933" }} />
      {/* Green glow — top-right */}
      <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#138808" }} />

      <div className="container mx-auto px-6 pt-32 pb-0 relative z-10 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 min-h-screen">

        {/* ── Text ── */}
        <motion.div className="flex-1 max-w-2xl lg:pt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <motion.span className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase font-bold mb-6 block"
            style={{ color: "#FF6200" }}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <span className="w-8 h-px" style={{ background: "#FF6200" }} />
            14th · 15th · 16th Prime Minister of India
            <span className="w-8 h-px" style={{ background: "#FF6200" }} />
          </motion.span>

          <motion.h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6"
            style={{ color: "#1A0500" }}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            Modi
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF9933, #FF6200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Mantra
            </span>
          </motion.h1>

          <motion.div 
            className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-transparent border-l-4 border-orange-500 max-w-xl"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-lg md:text-xl font-serif text-gray-800 leading-snug italic">
              "MODI MANTRA is the sweetness of <strong className="text-orange-600 font-bold">Good Governance</strong>. <strong className="text-green-700 font-bold">Transformative Development</strong>. <strong className="text-orange-800 font-bold">Visionary Leadership</strong>. This is our motto."
            </p>
          </motion.div>

          {/* Quick Facts Strip */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border shadow-lg"
            style={{ background: "#FFFFFF", borderColor: "rgba(255,153,51,0.2)" }}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {quickFacts.map((fact) => (
              <div key={fact.label} className="px-5 py-4 border-r last:border-r-0 hover:bg-orange-50 transition-colors"
                style={{ borderColor: "rgba(255,153,51,0.15)" }}
              >
                <span className="font-mono text-[10px] tracking-widest uppercase block mb-1" style={{ color: "rgba(26,5,0,0.4)" }}>{fact.label}</span>
                <span className="font-serif text-xl block leading-tight" style={{ color: "#1A0500" }}>{fact.value}</span>
                <span className="font-mono text-[10px] tracking-wider mt-1 block" style={{ color: "#FF6200" }}>{fact.sub}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Modi Photo ── */}
        <motion.div className="flex-shrink-0 w-full max-w-xs md:max-w-md lg:max-w-[500px] xl:max-w-[600px] lg:ml-auto"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            {/* Saffron glow */}
            <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-25" style={{ background: "radial-gradient(ellipse, #FF9933 0%, transparent 70%)" }} />

            {/* Photo — local PNG, black bg dissolved via mix-blend-mode */}
            <div className="relative aspect-[3/4]">
              <Image
                src="/modi_portrait.png"
                alt="Prime Minister Narendra Modi in a saffron kurta."
                fill
                className="object-contain object-top"
                style={{ mixBlendMode: "multiply" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>



            {/* Tricolour thread */}
            <div className="absolute -top-12 -right-2 w-1.5 h-3/4 rounded-full overflow-hidden flex flex-col shadow-md">
              <div className="flex-1" style={{ background: "#FF9933" }} />
              <div className="flex-1 bg-white border-y border-gray-100" />
              <div className="flex-1" style={{ background: "#138808" }} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,153,51,0.6)" }}
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
