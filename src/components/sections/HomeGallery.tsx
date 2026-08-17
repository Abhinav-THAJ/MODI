"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import Image from "next/image";

export function HomeGallery() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section className="py-24" style={{ background: "#1A0500" }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">In Pictures</h2>
          <p className="font-light text-orange-200/60 max-w-2xl mx-auto">Moments of governance, leadership, and public service.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <Image src="/awards_banner.jpg" alt="Gallery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
          <motion.div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            <Image src="/gallery2.png" alt="Gallery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
          <motion.div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group lg:col-span-1 md:col-span-2"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <Image src="/gallery3.png" alt="Gallery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
