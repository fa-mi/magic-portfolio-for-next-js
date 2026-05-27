"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Max tilt in degrees */
  intensity?: number;
}

export function TiltCard({
  children,
  className,
  style,
  intensity = 6,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 18, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [intensity, -intensity]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-intensity, intensity]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
