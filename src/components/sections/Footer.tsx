import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-[#FFF8F0]" style={{ borderColor: "rgba(255,153,51,0.2)" }}>
      {/* Top Border Gradient */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)" }} />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #FF9933, #FF6200)" }}
              >
                <span className="text-white font-black text-sm">MM</span>
              </div>
              <span className="font-serif text-xl" style={{ color: "#1A0500" }}>Modi Mantra</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(26,5,0,0.6)" }}>
              An independent informational resource documenting the journey, achievements, and vision of the 14th Prime Minister of India.
            </p>
            <p className="text-xs" style={{ color: "rgba(26,5,0,0.4)" }}>
              Not an official government website.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#FF6200" }}>
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-medium" style={{ color: "rgba(26,5,0,0.7)" }}>
              <li><Link href="/" className="hover:text-[#FF6200] transition-colors">Home</Link></li>
              <li><Link href="/journey" className="hover:text-[#FF6200] transition-colors">Life Journey</Link></li>
              <li><Link href="/achievements" className="hover:text-[#FF6200] transition-colors">Key Achievements</Link></li>
              <li><Link href="/schemes" className="hover:text-[#FF6200] transition-colors">Welfare Schemes</Link></li>
              <li><Link href="/projects" className="hover:text-[#FF6200] transition-colors">Infrastructure Projects</Link></li>
              <li><Link href="/awards" className="hover:text-[#FF6200] transition-colors">Global Awards</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#FF6200" }}>
              Connect & Engage
            </h4>
            <ul className="space-y-4 text-sm font-medium" style={{ color: "rgba(26,5,0,0.7)" }}>
              <li>
                <a href="https://www.narendramodi.in/namoapp" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6200] transition-colors inline-flex items-center gap-1">
                  Official NaMo App <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://x.com/narendramodi" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6200] transition-colors inline-flex items-center gap-1">
                  X (Twitter) <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@NarendraModi" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6200] transition-colors inline-flex items-center gap-1">
                  YouTube <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/narendramodi" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6200] transition-colors inline-flex items-center gap-1">
                  Facebook <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Sources */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#FF6200" }}>
              Official Sources
            </h4>
            <ul className="space-y-4 text-sm font-medium" style={{ color: "rgba(26,5,0,0.7)" }}>
              <li>
                <a href="https://www.pmindia.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6200] transition-colors inline-flex items-center gap-1">
                  PMIndia.gov.in <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://pib.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6200] transition-colors inline-flex items-center gap-1">
                  PIB.gov.in <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://www.mygov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6200] transition-colors inline-flex items-center gap-1">
                  MyGov.in <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono"
          style={{ borderColor: "rgba(255,153,51,0.1)", color: "rgba(26,5,0,0.4)" }}
        >
          <p>
            Data compiled from public records and verified sources.
          </p>
          <div className="flex gap-4">
            <span>Images sourced from Wikimedia Commons</span>
            <span>Last updated: August 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
