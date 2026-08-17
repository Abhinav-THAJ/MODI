"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import data from "@/content/data.json";

// ─── Single timeline entry ────────────────────────────────────────────────────
function TimelineEntry({ event, index }: { event: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // "active" when the card is roughly centred in the viewport
  const isActive = useInView(ref, {
    margin: "-35% 0px -35% 0px",
    once: false,
  });

  const { shouldReduceMotion } = useMotionConfig();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ type: "spring", stiffness: 90, damping: 20, delay: index * 0.04 }}
      className="relative pl-16 group"
    >
      {/* ── Dot node ───────────────────────────────────────────────────── */}
      <div className="absolute left-0 top-4">
        {/* Pulsing outer glow ring — only when active */}
        {isActive && !shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: "rgba(255,153,51,0.25)" }}
            animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Static second ring */}
        <motion.div
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
          animate={
            isActive
              ? { borderColor: "#FF9933", boxShadow: "0 0 0 5px rgba(255,153,51,0.18), 0 0 20px rgba(255,153,51,0.35)", scale: 1.15 }
              : { borderColor: "rgba(255,153,51,0.35)", boxShadow: "0 0 0 0px transparent", scale: 1 }
          }
          style={{ background: "#FFFFFF", border: "2px solid rgba(255,153,51,0.35)" }}
        >
          <motion.div
            className="rounded-full transition-all duration-500"
            animate={isActive ? { width: 12, height: 12, background: "#FF9933" } : { width: 8, height: 8, background: "#FF6200" }}
          />
        </motion.div>
      </div>

      {/* ── Card ───────────────────────────────────────────────────────── */}
      <motion.div
        className="rounded-2xl p-6 border bg-white transition-all duration-500"
        animate={
          isActive
            ? {
                borderColor: "rgba(255,153,51,0.55)",
                boxShadow: "0 0 0 3px rgba(255,153,51,0.08), 0 8px 40px rgba(255,153,51,0.2)",
                y: 0,
                opacity: 1,
              }
            : {
                borderColor: "rgba(255,153,51,0.12)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                y: 0,
                opacity: 0.65,
              }
        }
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <motion.span
            className="font-mono text-sm font-bold tracking-wider"
            animate={{ color: isActive ? "#FF6200" : "rgba(255,98,0,0.5)" }}
          >
            {event.year}
          </motion.span>

          {event.term && (
            <span
              className="px-2 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest"
              style={{ background: "rgba(255,153,51,0.1)", color: "#FF6200", border: "1px solid rgba(255,153,51,0.25)" }}
            >
              {event.term}
            </span>
          )}
        </div>

        <motion.h3
          className="font-serif text-xl md:text-2xl mb-2 transition-colors duration-500"
          animate={{ color: isActive ? "#1A0500" : "rgba(26,5,0,0.5)" }}
        >
          {event.title}
        </motion.h3>

        <motion.p
          className="leading-relaxed text-sm md:text-base transition-colors duration-500"
          animate={{ color: isActive ? "rgba(26,5,0,0.65)" : "rgba(26,5,0,0.35)" }}
        >
          {event.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function TimelineSection() {
  const { shouldReduceMotion, transition } = useMotionConfig();
  const allEvents = [...data.biography, ...data.politicalJourney].sort(
    (a, b) => parseInt(a.year) - parseInt(b.year)
  );

  return (
    <section
      id="journey"
      className="pt-12 pb-24 md:pt-16 md:pb-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF3E0 0%, #FFF8F0 60%, #F0FFF0 100%)" }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "#FF9933" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "#138808" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold block mb-4" style={{ color: "#FF6200" }}>
            — Chronological Record —
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6" style={{ color: "#1A0500" }}>
            The Journey
          </h2>
          <p className="max-w-2xl mx-auto text-lg font-light" style={{ color: "rgba(26,5,0,0.55)" }}>
            From a modest beginning in Vadnagar to reshaping India's destiny.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Tricolour thread spine */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 flex flex-col pointer-events-none">
              <div className="flex-1" style={{ background: "linear-gradient(to bottom, #FF9933, rgba(255,153,51,0.3))" }} />
              <div className="flex-1" style={{ background: "linear-gradient(to bottom, rgba(200,200,200,0.5), rgba(200,200,200,0.2))" }} />
              <div className="flex-1" style={{ background: "linear-gradient(to bottom, rgba(19,136,8,0.3), #138808)" }} />
            </div>

            <div className="space-y-10">
              {allEvents.map((event: any, i) => (
                <TimelineEntry key={event.year + event.title} event={event} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
