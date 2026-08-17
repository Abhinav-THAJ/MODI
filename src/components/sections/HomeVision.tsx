"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { Quote } from "lucide-react";

export function HomeVision() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-10 text-orange-200"
        >
          <Quote size={80} strokeWidth={1} style={{ color: "rgba(255,153,51,0.2)" }} />
        </motion.div>

        <motion.h2
          className="font-serif text-3xl md:text-5xl lg:text-6xl max-w-4xl leading-tight mb-12 flex flex-wrap justify-center gap-x-3 gap-y-2"
          style={{ color: "#1A0500" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {'"Our nation is a vibrant canvas of dreams. Together, we are painting a future of unparalleled growth, ensuring every citizen is empowered to achieve their highest potential."'.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-12" style={{ background: "#FF9933" }} />
          <span className="font-mono text-sm tracking-widest uppercase font-bold" style={{ color: "#FF6200" }}>
            Vision for Viksit Bharat
          </span>
          <div className="h-px w-12" style={{ background: "#138808" }} />
        </motion.div>
      </div>
    </section>
  );
}
