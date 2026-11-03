'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_LUXE } from '@/app/components/motion';

export function AvatarMotion({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.97, filter: 'blur(8px)' }}
      // Drop the filter once done: a leftover filter on an ancestor breaks
      // position: fixed descendants such as enlarged images.
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
      transition={{ duration: 1.2, ease: EASE_LUXE }}
    >
      {children}
    </motion.div>
  );
}

export default function AnimateIn({
  children,
  delay = 0,
  y = 12,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 1,
        ease: EASE_LUXE,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
