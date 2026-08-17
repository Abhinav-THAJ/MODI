import { Hero } from "@/components/sections/Hero";
import { HomeVision } from "@/components/sections/HomeVision";
import { HomeStats } from "@/components/sections/HomeStats";
import { HomeHighlights } from "@/components/sections/HomeHighlights";
import { HomeConnect } from "@/components/sections/HomeConnect";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeVision />
      <HomeStats />
      <HomeHighlights />
      <HomeConnect />
    </>
  );
}
