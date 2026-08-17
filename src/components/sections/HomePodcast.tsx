"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { Mic, Play, Radio, Headphones } from "lucide-react";

export function HomePodcast() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#FFF8F0" }}>
      {/* Abstract soundwave background */}
      <div className="absolute inset-0 opacity-[0.04] flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-[#FF6200] absolute" style={{ animation: "ping 10s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
        <div className="w-[600px] h-[600px] rounded-full border border-[#FF6200] absolute" style={{ animation: "ping 8s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
        <div className="w-[400px] h-[400px] rounded-full border border-[#FF6200] absolute" style={{ animation: "ping 6s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Text */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 border bg-white"
            style={{ borderColor: "rgba(255,153,51,0.2)" }}
          >
            <Radio size={16} color="#FF6200" />
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#FF6200]">
              Monthly Radio Programme
            </span>
          </div>
          
          <h2 className="font-serif text-5xl md:text-7xl mb-6" style={{ color: "#1A0500" }}>
            Mann Ki Baat
          </h2>
          <p className="font-light text-lg leading-relaxed max-w-lg mb-10 mx-auto md:mx-0" style={{ color: "rgba(26,5,0,0.6)" }}>
            A unique and unprecedented initiative to establish a direct dialogue with the citizens. Every month, millions tune in to hear inspiring stories of grassroots changemakers from across India.
          </p>

          <button className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full overflow-hidden shadow-[0_4px_20px_rgba(255,153,51,0.3)] transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #FF9933, #FF6200)" }}
          >
            <span className="relative z-10 font-mono text-sm uppercase font-bold text-white tracking-widest">
              Listen to Episodes
            </span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Headphones size={16} className="text-white" />
            </div>
            {/* Hover fill */}
            <div className="absolute inset-0 bg-[#FF6200] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* Right Side: Player UI UI */}
        <motion.div 
          className="flex-1 w-full max-w-md"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <div className="rounded-3xl p-8 border shadow-xl relative overflow-hidden bg-white"
            style={{ borderColor: "rgba(255,153,51,0.2)" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-1.5 bg-[#FF9933] rounded-full" 
                    style={{ 
                      height: `${12 + Math.random() * 20}px`,
                      animation: `pulse ${1 + Math.random()}s infinite alternate` 
                    }} 
                  />
                ))}
              </div>
              <Mic size={24} color="rgba(26,5,0,0.2)" />
            </div>

            {/* Play Button */}
            <div className="flex justify-center mb-12">
              <div className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_10px_30px_rgba(255,153,51,0.3)]"
                style={{ background: "linear-gradient(135deg, #FF9933, #FF6200)" }}
              >
                <Play size={40} color="white" className="ml-2" />
              </div>
            </div>

            {/* Track Info */}
            <div className="text-center">
              <h4 className="font-serif text-2xl mb-2" style={{ color: "#1A0500" }}>Episode 110</h4>
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF6200] mb-6">Latest Broadcast</p>
              
              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,153,51,0.15)" }}>
                <div className="w-1/3 h-full bg-[#FF6200] rounded-full" />
              </div>
              <div className="flex justify-between mt-3 font-mono text-[10px]" style={{ color: "rgba(26,5,0,0.4)" }}>
                <span>12:04</span>
                <span>34:15</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
