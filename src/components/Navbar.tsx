"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Hero",         href: "/" },
  { label: "Journey",      href: "/journey" },
  { label: "Achievements", href: "/impact" },
  { label: "Schemes",      href: "/schemes" },
  { label: "Projects",     href: "/projects" },
  { label: "Awards",       href: "/awards" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={scrolled
          ? { background: "rgba(255,255,255,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,153,51,0.2)", boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }
          : { background: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,153,51,0.1)" }
        }
      >
        {/* Tricolour line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 flex">
          <div className="flex-1" style={{ background: "#FF9933" }} />
          <div className="flex-1" style={{ background: "#FFFFFF" }} />
          <div className="flex-1" style={{ background: "#138808" }} />
        </div>

        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-md" style={{ background: "linear-gradient(135deg, #FF9933, #FF6200)" }}>
              <span className="text-white font-black text-sm">NM</span>
            </div>
            <span className="font-serif text-lg font-medium transition-colors" style={{ color: "#1A0500" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FF6200")}
              onMouseLeave={e => (e.currentTarget.style.color = "#1A0500")}
            >Modi Mantra</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}
                  className="relative px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors rounded-full"
                  style={{ color: isActive ? "#FF6200" : "rgba(26,5,0,0.5)" }}
                >
                  {isActive && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(255,153,51,0.1)", border: "1px solid rgba(255,153,51,0.3)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button className="md:hidden p-2" style={{ color: "#1A0500" }} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            className="fixed top-16 left-0 right-0 z-40"
            style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,153,51,0.2)", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                    className="text-left block px-4 py-3 rounded-xl font-mono text-sm tracking-widest uppercase transition-all"
                    style={{ color: isActive ? "#FF6200" : "rgba(26,5,0,0.55)", background: isActive ? "rgba(255,153,51,0.08)" : "transparent" }}
                  >{link.label}</Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
