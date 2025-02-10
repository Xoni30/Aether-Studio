'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small teams and startups',
    features: [
      'Up to 1000 generations/month',
      'Basic support',
      'Standard response time',
      'Core features access',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 5000 generations/month',
      'Priority support',
      'Fast response time',
      'Advanced features access',
      'API access',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large-scale operations',
    features: [
      'Unlimited generations 24/7',
      'Dedicated support team',
      'Instant response time',
      'Full feature access',
      'Custom integrations',
      'No API needed - fully automated',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl ${
                tier.highlighted
                  ? 'bg-purple-600 ring-2 ring-purple-400'
                  : 'bg-gray-800'
              } p-8 shadow-xl flex flex-col`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="ml-1 text-xl text-gray-300">
                    {tier.period}
                  </span>
                </div>
                <p className="mt-6 text-gray-300">{tier.description}</p>

                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-400" />
                      </div>
                      <p className="ml-3 text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-8 block w-full rounded-full py-3 px-6 text-center text-sm font-semibold ${
                  tier.highlighted
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900`}
              >
                Get started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 