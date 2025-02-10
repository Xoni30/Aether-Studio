'use client';

import React from 'react';
import { motion } from 'framer-motion';

type AnimationType = 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale';

interface ScrollAnimationProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

const animations = {
  'fade-up': {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  },
  'fade-down': {
    initial: { opacity: 0, y: -20 },
    whileInView: { opacity: 1, y: 0 },
  },
  'slide-left': {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
  },
  'slide-right': {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
  },
  'scale': {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

export default function ScrollAnimation({
  children,
  type = 'fade-up',
  delay = 0,
  duration = 0.5,
  className = '',
}: ScrollAnimationProps) {
  return (
    <motion.div
      initial={animations[type].initial}
      whileInView={animations[type].whileInView}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 