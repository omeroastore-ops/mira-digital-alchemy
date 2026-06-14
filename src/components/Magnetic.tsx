import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth, premium spring parameters for a luxury, heavyweight feel
  const springConfig = { damping: 18, stiffness: 120, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate center coordinates
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Vector from center to mouse
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Maximum pull of 14px in any direction
    const pullX = distanceX * 0.35;
    const pullY = distanceY * 0.35;

    x.set(pullX);
    y.set(pullY);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
