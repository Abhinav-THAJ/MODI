"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { Smartphone, Download, MessageSquare, Users, Rss } from "lucide-react";

export function HomeConnect() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Text */}
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 border bg-[#FFF8F0]"
            style={{ borderColor: "rgba(255,153,51,0.2)" }}
          >
            <Smartphone size={16} color="#FF6200" />
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#FF6200]">
              Official NaMo App
            </span>
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight" style={{ color: "#1A0500" }}>
            Connect Directly <br/>With The PM
          </h2>
          <p className="font-light text-lg leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0" style={{ color: "rgba(26,5,0,0.6)" }}>
            Join millions of citizens on the official Narendra Modi App. Receive real-time updates, read exclusive insights, and share your ideas directly with the Prime Minister to help shape the future of India.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href="https://apps.apple.com/in/app/narendra-modi/id1016781909" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden shadow-md transition-transform hover:scale-105 border"
              style={{ background: "#FFFFFF", borderColor: "rgba(255,153,51,0.3)" }}
            >
              <Download size={18} color="#FF6200" />
              <span className="relative z-10 font-mono text-xs uppercase font-bold tracking-widest" style={{ color: "#1A0500" }}>
                Get for iOS
              </span>
            </a>
            
            <a href="https://play.google.com/store/apps/details?id=com.narendramodiapp" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden shadow-md transition-transform hover:scale-105 border"
              style={{ background: "#FFFFFF", borderColor: "rgba(255,153,51,0.3)" }}
            >
              <Download size={18} color="#FF6200" />
              <span className="relative z-10 font-mono text-xs uppercase font-bold tracking-widest" style={{ color: "#1A0500" }}>
                Get for Android
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: App Mockup/Visual */}
        <motion.div 
          className="flex-1 w-full relative flex justify-center lg:justify-end mt-12 lg:mt-0"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
        >
          {/* Abstract Phone Frame */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] h-[580px] sm:h-[640px] rounded-[40px] border-[12px] relative overflow-hidden shadow-2xl bg-[#FFF8F0] mx-auto"
            style={{ borderColor: "#1A0500" }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-6 bg-[#1A0500] rounded-b-2xl z-20" />
            
            {/* Screen Content */}
            <div className="absolute inset-0 pt-16 px-4 sm:px-6 flex flex-col bg-white">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6 mx-auto flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg"
                style={{ background: "linear-gradient(135deg, #FF9933, #FF6200)" }}
              >
                NM
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-center mb-6 sm:mb-10" style={{ color: "#1A0500" }}>NaMo App</h4>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Rss, text: "Exclusive News" },
                  { icon: MessageSquare, text: "Direct Feedback" },
                  { icon: Users, text: "Volunteer Network" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#FFF8F0] shadow-sm border" style={{ borderColor: "rgba(255,153,51,0.2)" }}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" color="#FF6200" />
                    <span className="font-mono text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#1A0500]">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <a href="https://www.narendramodi.in/namoapp" target="_blank" rel="noopener noreferrer" className="mt-auto mb-8 sm:mb-10 mx-auto w-4/5 h-12 sm:h-14 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold tracking-widest uppercase shadow-xl hover:scale-105 transition-transform cursor-pointer"
                style={{ background: "#1A0500" }}
              >
                Download
              </a>
            </div>
          </div>

          {/* Decorative elements behind phone */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl -z-10 pointer-events-none" style={{ background: "#FF6200" }} />
        </motion.div>

      </div>
    </section>
  );
}
