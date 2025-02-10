'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'

const categories = [
  'All',
  'Product Photography',
  'Fashion',
  'Jewelry',
  'Food',
  'Automobiles',
  'Furniture'
]

const templates = [
  {
    id: 1,
    title: 'Minimalist Product',
    description: 'Clean, modern product photography on simple backgrounds',
    category: 'Product Photography',
    image: '/templates/minimal-product.jpg'
  },
  {
    id: 2,
    title: 'Fashion Editorial',
    description: 'High-fashion editorial style for clothing and accessories',
    category: 'Fashion',
    image: '/templates/fashion-editorial.jpg'
  },
  {
    id: 3,
    title: 'Luxury Jewelry',
    description: 'Elegant jewelry photography with dramatic lighting',
    category: 'Jewelry',
    image: '/templates/luxury-jewelry.jpg'
  },
  // Add more templates here
]

const TemplateCard = ({ template, index }: { template: typeof templates[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-full group-hover:translate-y-0 transition-transform"
        initial={false}
      >
        <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
        <p className="text-gray-200">{template.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 btn-primary w-full"
        >
          Use Template
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTemplates = templates.filter(
    template => selectedCategory === 'All' || template.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            AI Photoshoot <span className="text-gradient">Templates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Choose from our curated collection of professional templates for your product photoshoots
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template, index) => (
              <TemplateCard key={template.id} template={template} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 