"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXE } from "@/app/components/motion";

interface HoverLiftProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Lifts a card a few pixels on mouse hover. Hover gestures do not fire on
// touch, so phones and tablets get a still card.
export function HoverLift({ children, className, style }: HoverLiftProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.7, ease: EASE_LUXE }}
    >
      {children}
    </motion.div>
  );
}
