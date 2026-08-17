"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import data from "@/content/data.json";

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  Announced: { bg: "rgba(255,153,51,0.12)", text: "#FF6200",  border: "rgba(255,153,51,0.35)" },
  Ongoing:   { bg: "rgba(19,136,8,0.1)",    text: "#138808",  border: "rgba(19,136,8,0.35)"   },
  Launched:  { bg: "rgba(212,136,30,0.12)", text: "#D4881E",  border: "rgba(212,136,30,0.35)" },
};

export function UpcomingProjects() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section id="projects" className="py-24 md:py-32 relative"
      style={{ background: "linear-gradient(160deg, #F0FFF0 0%, #FFF8F0 100%)" }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, #138808, transparent, #FF9933)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold block mb-4" style={{ color: "#138808" }}>
              — Viksit Bharat@2047 —
            </span>
            <h2 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "#1A0500" }}>
              Ongoing Projects
            </h2>
            <p className="text-lg font-light max-w-lg" style={{ color: "rgba(26,5,0,0.55)" }}>
              Active mega-projects driving India's next chapter of economic and strategic growth.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.upcomingProjects.map((project, i) => {
            const s = statusColors[project.status] || statusColors.Ongoing;
            return (
              <motion.div
                key={project.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 16px 48px rgba(255,153,51,0.12)" }}
                className="group relative rounded-3xl p-8 border bg-white transition-all duration-300 overflow-hidden shadow-sm"
                style={{ borderColor: "rgba(255,153,51,0.15)" }}
              >
                {/* Left accent bar — alternating saffron / green */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl"
                  style={{ background: i % 2 === 0 ? "#FF9933" : "#138808" }}
                />

                <div className="flex items-start justify-between mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold uppercase tracking-wider"
                    style={{ background: s.bg, color: s.text, borderColor: s.border }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {project.status}
                  </span>
                  <span className="font-mono text-xs tracking-widest" style={{ color: "rgba(26,5,0,0.35)" }}>
                    {project.date}
                  </span>
                </div>

                <h3
                  className="font-serif text-2xl md:text-3xl mb-3 transition-colors group-hover:text-[#FF6200]"
                  style={{ color: "#1A0500" }}
                >
                  {project.title}
                </h3>
                <p className="leading-relaxed mb-6" style={{ color: "rgba(26,5,0,0.6)" }}>
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-5"
                  style={{ borderTop: "1px solid rgba(255,153,51,0.12)" }}
                >
                  <span className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: "#D4881E" }}>
                    {project.category}
                  </span>
                  <span className="text-xl transition-colors group-hover:text-[#FF9933]"
                    style={{ color: "rgba(26,5,0,0.2)" }}
                  >→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
