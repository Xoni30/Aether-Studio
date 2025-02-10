'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'

const plans = [
  {
    name: 'Starter',
    price: {
      monthly: 49,
      yearly: 39
    },
    description: 'Perfect for small businesses and individual creators',
    features: [
      '100 AI Photos per month',
      'Basic templates',
      'Email support',
      'Basic analytics',
      'Export in HD quality'
    ]
  },
  {
    name: 'Professional',
    price: {
      monthly: 99,
      yearly: 79
    },
    description: 'Ideal for growing brands and e-commerce stores',
    features: [
      '500 AI Photos per month',
      'All templates',
      'Priority support',
      'Advanced analytics',
      'Export in 4K quality',
      'Custom backgrounds',
      'Brand presets'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 199,
      yearly: 159
    },
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited AI Photos',
      'Custom templates',
      '24/7 dedicated support',
      'Enterprise analytics',
      'Export in 8K quality',
      'API access',
      'Custom integration',
      'Dedicated account manager'
    ]
  }
]

const PricingCard = ({ plan, isYearly }: { plan: typeof plans[0], isYearly: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-2xl ${
        plan.popular
          ? 'bg-gradient-to-br from-primary to-secondary text-white'
          : 'bg-white dark:bg-gray-800'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-white text-primary text-sm font-medium rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-300'}`}>
          {plan.description}
        </p>
        <div className="mt-4">
          <span className="text-4xl font-bold">
            ${isYearly ? plan.price.yearly : plan.price.monthly}
          </span>
          <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-300'}`}>
            /month
          </span>
        </div>
        {isYearly && (
          <div className="mt-2 text-sm text-primary">
            Save ${(plan.price.monthly - plan.price.yearly) * 12}/year
          </div>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            <svg
              className={`w-5 h-5 mr-3 ${plan.popular ? 'text-white' : 'text-primary'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={plan.popular ? 'text-white' : 'text-gray-600 dark:text-gray-300'}>
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 rounded-full font-medium ${
          plan.popular
            ? 'bg-white text-primary'
            : 'bg-primary text-white'
        }`}
      >
        Get Started
      </motion.button>
    </motion.div>
  )
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Choose the perfect plan for your business needs
          </motion.p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm ${!isYearly ? 'text-primary font-medium' : 'text-gray-600 dark:text-gray-300'}`}>
              Monthly
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsYearly(!isYearly)}
              className={`w-16 h-8 rounded-full p-1 transition-colors ${
                isYearly ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-white"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-sm ${isYearly ? 'text-primary font-medium' : 'text-gray-600 dark:text-gray-300'}`}>
              Yearly (20% off)
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          {/* Add FAQ items here */}
        </div>
      </section>
    </div>
  )
} 