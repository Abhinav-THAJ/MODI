"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import Image from "next/image";
import { Quote } from "lucide-react";

export function HomeLeadership() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Image Side */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={transition}
              className="w-full lg:w-5/12 relative"
            >
              {/* Decorative elements behind the image */}
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-[64px] opacity-70" />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-[64px] opacity-70" />
              
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] max-w-md mx-auto lg:mx-0">
                <Image
                  src="/Dr willat correya.png"
                  alt="Dr. Willat Correya - Chairman, Modi Mantra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Name Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 pt-24 text-center">
                  <h4 className="text-2xl font-serif text-white mb-1">Dr. Willat Correya</h4>
                  <p className="text-orange-400 font-mono text-sm tracking-widest uppercase">Chairman, Modi Mantra</p>
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -z-10 top-10 -right-10 w-32 h-32" style={{ backgroundImage: 'radial-gradient(#FF9933 2px, transparent 2px)', backgroundSize: '16px 16px', opacity: 0.2 }} />
            </motion.div>
            
            {/* Text Side */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.2 }}
              className="w-full lg:w-7/12"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-orange-100/50 border border-orange-200 text-orange-600 text-sm tracking-widest uppercase font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                Leadership Message
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-8 leading-tight">
                "Our youth are the architects of a modern, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">vibrant India.</span>"
              </h2>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-6 w-16 h-16 text-orange-100 -z-10 transform -rotate-12" />
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                  <p>
                    As the Chairman of Modi Mantra, I am deeply committed to the vision of empowering the Next Generation. The true strength of our nation lies in the untamed potential, creativity, and drive of our young minds.
                  </p>
                  <p>
                    We believe that by providing the right platforms—whether in education, sports, innovation, or entrepreneurship—we can transform raw talent into global excellence. Modi Mantra is not just an initiative; it is a movement to build leaders who will shape the future of India and the world.
                  </p>
                  <p>
                    I invite all young Indians to step forward, dream big, and join us in this journey of making a progressive, strong, and developed India.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="w-16 h-px bg-orange-300" />
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="font-serif">
                    <p className="text-xl text-gray-900 font-medium">Dr. Willat Correya</p>
                    <p className="text-gray-500 text-sm">Chairman</p>
                  </div>
                  <div className="flex items-center gap-4 md:border-l md:border-gray-200 md:pl-6">
                    <a href="https://twitter.com/willatcorreya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition-colors" title="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100014493902839" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors" title="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
            </motion.div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
