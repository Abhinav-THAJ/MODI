import { TimelineSection } from "@/components/sections/TimelineSection";

export default function JourneyPage() {
  return (
    <>
      {/* We add pt-24 so the content clears the fixed Navbar */}
      <div className="pt-24 min-h-screen">
        <TimelineSection />
      </div>
    </>
  );
}
