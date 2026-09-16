"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import Image from "next/image";

const visions = [
  {
    title: "Promoting Sporting Excellence",
    icon: "🏆",
    description: "To identify and encourage talented young athletes and aspiring champions, providing opportunities, guidance, and support to help them reach national and international levels.",
    image: "/images/vision/sports_excellence_1789551585587.jpg",
  },
  {
    title: "Tribal & Underserved Students",
    icon: "🎓",
    description: "To promote education, scholarships, skill development, and career opportunities for talented students, helping them overcome barriers and build brighter futures.",
    image: "/images/vision/tribal_education_1789551492529.jpg",
  },
  {
    title: "Women Empowerment",
    icon: "👩‍💼",
    description: "To encourage women and young girls to become confident leaders, entrepreneurs, and professionals, contributing to India's social and economic development.",
    image: "/images/vision/women_empowerment_1789551505817.jpg",
  },
  {
    title: "India's Intellectual Power",
    icon: "💡",
    description: "To nurture the knowledge, creativity, innovation, and critical thinking of young Indians. Encouraging young minds to create solutions for the challenges of tomorrow.",
    image: "/images/vision/intellectual_power_1789551518577.jpg",
  },
  {
    title: "Building the N-Gen of India",
    icon: "🚀",
    description: "To create opportunities for the next generation to become skilled, creative, productive, entrepreneurial, and globally competitive citizens.",
    image: "/images/vision/next_generation_1789551532618.jpg",
  },
  {
    title: "Building India's Future",
    icon: "🌏",
    description: "To bring together the strengths of education, sports, innovation, and entrepreneurship, creating opportunities for talented people to contribute to India's future.",
    image: "/images/vision/future_talent_1789551548892.jpg",
  }
];

export function HomeVision() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Background subtle noise/texture could go here */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Sleek Intro */}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm tracking-widest uppercase font-mono mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Vision & Mission
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6"
                style={{ 
                  background: "linear-gradient(135deg, #FF9933 0%, #E65C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
              MODI MANTRA
            </h2>
            
            <p className="text-3xl md:text-5xl font-serif text-[#1A0500] mb-10 leading-tight">
              Empowering the <span className="italic font-light text-orange-600">Next Generation</span> of India
            </p>
            
            <div className="max-w-3xl mx-auto space-y-6 text-gray-500 text-lg md:text-xl font-light leading-relaxed">
              <p>
                Envisioned as a platform to inspire, encourage, and empower the Next Generation (N-Gen) of India—a generation that is creative, productive, innovative, and determined to contribute to a progressive India.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Premium Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {visions.map((vision, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ ...transition, delay: idx * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden h-[420px] bg-gray-900 cursor-pointer"
            >
              <Image
                src={vision.image}
                alt={vision.title}
                fill
                className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-2xl mb-6 shadow-xl">
                  {vision.icon}
                </div>
                <h4 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">
                  {vision.title}
                </h4>
                <p className="text-gray-300 font-light leading-relaxed opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {vision.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The New "Our Mantra" Section - Dark & Glowing */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={transition}
          className="relative rounded-[3rem] overflow-hidden bg-[#0A0A0A] py-24 px-6 md:px-16 lg:px-24 text-center border border-white/10 shadow-2xl"
        >
          {/* Abstract Glowing Orbs */}
          <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-[#FF9933] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[#138808] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm tracking-widest uppercase font-mono mb-16 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Our Core Mantra
            </div>
            
            <h3 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white leading-tight mb-20 max-w-5xl mx-auto">
              <span className="text-orange-500 opacity-50 block mb-4 text-4xl">"</span>
              Discover Talent. Empower People. Develop Leaders. Create Champions. Build the Future of India.
              <span className="text-orange-500 opacity-50 block mt-4 text-4xl">"</span>
            </h3>
            
            <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-white/80 font-medium text-sm md:text-xs lg:text-sm uppercase tracking-widest max-w-5xl mx-auto">
               <div className="flex flex-col items-center gap-4 group">
                 <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">✨</div>
                 <span>Inspiring N-Gen</span>
               </div>
               <div className="flex flex-col items-center gap-4 group">
                 <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">🌟</div>
                 <span>Empowering Talent</span>
               </div>
               <div className="flex flex-col items-center gap-4 group">
                 <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">👩‍💼</div>
                 <span>Women Leaders</span>
               </div>
               <div className="flex flex-col items-center gap-4 group">
                 <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">🏆</div>
                 <span>Creating Champions</span>
               </div>
               <div className="flex flex-col items-center gap-4 group">
                 <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">🚀</div>
                 <span>Building Tomorrow</span>
               </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
