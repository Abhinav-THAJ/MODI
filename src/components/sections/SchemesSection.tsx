"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMotionConfig } from "@/hooks/useMotionConfig";

const schemesData = [
  { name: "PM Jan Dhan Yojana",  short: "PMJDY",    launchDate: "Aug 2014", category: "Financial Inclusion", stat: "58+ Crore",    statLabel: "Accounts Opened",  description: "World's largest financial inclusion program bringing banking access to every household.",             image: "/scheme_jandhan.jpg", accent: "#FF9933", lightBg: "#FFF3E0" },
  { name: "Swachh Bharat Mission",short: "SBM",      launchDate: "Oct 2014", category: "Sanitation",          stat: "117M+",         statLabel: "Toilets Built",     description: "Historic cleanliness campaign transforming rural sanitation and eliminating open defecation.",        image: "/scheme_swachh.jpg",  accent: "#138808", lightBg: "#F0FFF0" },
  { name: "PM Ujjwala Yojana",   short: "PMUY",     launchDate: "May 2016", category: "Clean Energy",         stat: "10.55 Crore",  statLabel: "Women Benefited",  description: "Free LPG connections to women from BPL households, replacing hazardous biomass cooking.",            image: "/scheme_ujjwala.jpg", accent: "#FF6200", lightBg: "#FFF8F0" },
  { name: "PM Awas Yojana",      short: "PMAY",     launchDate: "Jun 2015", category: "Housing",              stat: "4+ Crore",     statLabel: "Houses Allocated", description: "Providing affordable housing to economically weaker sections in rural and urban India.",              image: "/scheme_pmay.jpg",    accent: "#D4881E", lightBg: "#FFFBF0" },
  { name: "PM-KISAN",            short: "PM-KISAN", launchDate: "Feb 2019", category: "Agriculture",          stat: "₹6,000/yr",    statLabel: "Per Farmer",       description: "Direct income support of ₹6,000 annually to small and marginal farmers across India.",              image: "/scheme_kisan.jpg",   accent: "#138808", lightBg: "#F0FFF0" },
  { name: "Ayushman Bharat",     short: "PM-JAY",   launchDate: "Sep 2018", category: "Health",               stat: "10.82 Crore",  statLabel: "Treatments",       description: "World's largest government-funded health scheme providing ₹5 lakh coverage per family.",            image: "/welfare.jpg",        accent: "#FF9933", lightBg: "#FFF3E0" },
];

export function SchemesSection() {
  const { shouldReduceMotion, transition } = useMotionConfig();

  return (
    <section id="schemes" className="py-24 md:py-32 relative" style={{ background: "#FFF8F0" }}>
      {/* Subtle saffron tint top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, #FF9933, transparent, #138808)" }} />

      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-20"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold block mb-4" style={{ color: "#FF6200" }}>
            — Flagship Initiatives —
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6" style={{ color: "#1A0500" }}>Schemes That Changed India</h2>
          <p className="max-w-2xl mx-auto text-lg font-light" style={{ color: "rgba(26,5,0,0.55)" }}>
            From financial inclusion to clean energy, transforming hundreds of millions of lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemesData.map((scheme, i) => (
            <motion.div key={scheme.short}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-5%" }}
              transition={{ ...transition, delay: i * 0.08 }}
              whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
              className="group rounded-3xl overflow-hidden border bg-white transition-all duration-300 shadow-sm"
              style={{ borderColor: "rgba(255,153,51,0.15)" }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image src={scheme.image} alt={scheme.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.7) 0%, transparent 60%)" }} />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-md"
                  style={{ background: scheme.accent }}
                >{scheme.category}</span>
                <span className="absolute top-3 right-3 font-mono text-white text-[10px] tracking-widest bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                  {scheme.launchDate}
                </span>
              </div>

              {/* Content */}
              <div className="p-6" style={{ background: scheme.lightBg }}>
                <span className="font-mono text-[10px] tracking-widest uppercase block mb-1" style={{ color: "rgba(26,5,0,0.35)" }}>{scheme.short}</span>
                <h3 className="font-serif text-xl mb-3" style={{ color: "#1A0500" }}>{scheme.name}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(26,5,0,0.6)" }}>{scheme.description}</p>
                <div className="rounded-2xl p-4 flex items-center justify-between" style={{ background: scheme.accent }}>
                  <span className="text-white/80 text-xs font-mono uppercase tracking-wider">{scheme.statLabel}</span>
                  <span className="font-serif text-2xl text-white font-bold">{scheme.stat}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
