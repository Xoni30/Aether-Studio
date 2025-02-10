'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  title: string
  description: string
  className?: string
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden ${className}`}
    >
      <div className="relative p-8 bg-dark-gray/30 backdrop-blur-sm border border-primary/5 h-full">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="relative z-10 space-y-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '2rem' }}
            viewport={{ once: true }}
            className="h-px bg-primary/50"
          />
          
          <h3 className="text-2xl font-light text-light-gray">{title}</h3>
          <p className="text-light-gray/60 text-sm leading-relaxed">{description}</p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center space-x-2 text-primary uppercase tracking-wider text-sm group"
            >
              <span className="text-xs tracking-[0.2em]">Learn More</span>
              <svg
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 