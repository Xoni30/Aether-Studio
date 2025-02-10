'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  Shield, 
  Sparkles,
  Bot,
  Rocket
} from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast Generation',
    description: 'Generate content in seconds with our optimized AI pipeline',
    icon: Zap,
  },
  {
    name: '24/7 Automated Service',
    description: 'Round-the-clock content generation without interruption',
    icon: Clock,
  },
  {
    name: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and data protection for your content',
    icon: Shield,
  },
  {
    name: 'Smart AI Enhancement',
    description: 'Advanced AI algorithms that learn and adapt to your brand',
    icon: Sparkles,
  },
  {
    name: 'Automated Workflow',
    description: 'Seamless integration with your existing content pipeline',
    icon: Bot,
  },
  {
    name: 'Scalable Performance',
    description: 'Grows with your needs without compromising quality',
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Features() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-gray-400"
          >
            Everything you need for automated content generation
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              className="relative p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors"
            >
              <div className="absolute top-6 left-6 rounded-lg bg-purple-600/20 p-3">
                <feature.icon className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-16">
                <h3 className="text-xl font-semibold text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
