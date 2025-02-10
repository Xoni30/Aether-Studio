'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center px-8 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-300 overflow-hidden'
  const variantStyles = {
    primary: 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20',
    secondary: 'bg-transparent hover:bg-white/5 text-white/80 hover:text-white border border-white/10 hover:border-white/20'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.button>
  )
} 