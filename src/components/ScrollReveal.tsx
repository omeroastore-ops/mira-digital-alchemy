import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  stagger?: boolean;
  animateOnMount?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 1.2,
  yOffset = 30,
  stagger = false,
  animateOnMount = false,
}: ScrollRevealProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.2, 0.8, 0.2, 1], // Luxury smooth cinematic ease-out
      },
    },
  };

  // If animateOnMount is true (e.g. for Hero), trigger immediately.
  // Otherwise, trigger on scroll with a very safe and lenient threshold (amount: 0.05).
  const triggerProps = animateOnMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, amount: 0.05 } };

  if (stagger) {
    return (
      <motion.div
        initial="hidden"
        {...triggerProps}
        variants={containerVariants}
        className="w-full"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div initial="hidden" {...triggerProps} variants={itemVariants} className="w-full">
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({ children }: { children: ReactNode }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };

  return <motion.div variants={itemVariants}>{children}</motion.div>;
}
