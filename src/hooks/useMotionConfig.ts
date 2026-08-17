import { useReducedMotion } from "framer-motion";

export function useMotionConfig() {
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is preferred, use a duration of 0 (instant) or a simple crossfade.
  // We'll export common spring and tween transitions adjusted for reduced motion.
  
  return {
    shouldReduceMotion,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      mass: 1,
    },
    // Instant transition for reduced motion cases
    instant: { duration: 0 },
  };
}
