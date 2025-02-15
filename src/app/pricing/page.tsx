'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'

const plans = [
  {
    name: 'Essential',
    price: 'X',
    period: 'Per month',
    description: 'Best For: Small businesses, startups, and independent creators looking for cost-effective AI-generated visuals.',
    features: [
      '50 AI-generated images per month',
      'Basic AI model customization (skin tone, hair, and general aesthetic)',
      'Standard resolution (web & social media optimized)',
      'One AI model per brand (non-exclusive)',
      'Turnaround time: 3-5 business days',
      'Access to support via email'
    ]
  },
  {
    name: 'Pro',
    price: 'X',
    period: 'Per month',
    description: 'Best For: Mid-sized brands, e-commerce businesses, and marketing teams that need frequent, high-quality content.',
    features: [
      '200 AI-generated images per month',
      'Advanced AI model customization (age, ethnicity, body type, facial features, and expressions)',
      'High-resolution images for e-commerce & advertising',
      'Multiple AI models per brand (up to 3 variations)',
      'Priority processing (2-3 business days)',
      'Dedicated account manager',
      'Email & chat support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Contact us for a quote',
    description: 'Best For: Large brands, agencies, and corporations with high-volume AI content needs.',
    features: [
      'Unlimited AI-generated images per month',
      'Fully custom AI model (exclusive to the brand)',
      'Ultra-high resolution (for print, billboards, and large-scale marketing)',
      'Bespoke AI model training based on brand guidelines',
      'Expedited turnaround (24-48 hours)',
      'API access & integrations',
      'White-label solutions',
      '24/7 priority support & strategy consulting'
    ]
  }
]

const additionalFeatures = [
  'Pay-As-You-Go Option: Clients can purchase additional image credits at a fixed rate.',
  'Add-On Custom AI Models: Option to create additional exclusive models at an extra fee.',
  'AI Video Generation (Coming Soon): Early access for Enterprise clients.'
]

const PricingCard = ({ plan }: { plan: typeof plans[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-2xl border transition-all duration-500 flex flex-col ${
        plan.popular 
          ? 'bg-white/10 border-white/20 hover:bg-white/[0.15]' 
          : 'bg-neutral-900/50 border-white/10 hover:bg-neutral-900/70'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-gradient-to-r from-white/90 to-white/80 text-black text-sm font-medium rounded-full shadow-lg backdrop-blur-sm">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-normal mb-2">{plan.name}</h3>
        <p className="text-sm text-white/60 mb-4 min-h-[60px]">{plan.description}</p>
        <div className="mt-4 mb-2">
          <span className="text-6xl font-normal bg-gradient-to-r from-white/90 via-white/80 to-white/90 bg-clip-text text-transparent">
            {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
          </span>
        </div>
        <span className="text-sm text-white/60">{plan.period}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feature, index) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start text-white/70"
          >
            <svg
              className="w-5 h-5 mr-3 text-white/40 flex-shrink-0 mt-1"
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
            <span className="text-sm">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 rounded-xl font-normal text-sm bg-[#1A1A1A] hover:bg-[#222222] text-white/70 transition-all backdrop-blur-sm border border-white/[0.08] relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/[0.02] transition-opacity group-hover:opacity-80" />
        <span className="relative z-10">
          {plan.name === 'Enterprise' ? 'Contact us' : `Get started with ${plan.name}`}
        </span>
      </motion.button>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-8">
        <div className="w-[800px]">
          <div className="bg-black/80 backdrop-blur-lg rounded-full border border-white/10 px-8">
            <Navbar />
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-44 pb-32">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-normal text-center mb-6"
          >
            UV Studios <span className="text-white/70">Subscription Plans</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(1.25rem,2vw,1.5rem)] text-white/70 text-center max-w-2xl mx-auto"
          >
            Choose the perfect plan for your AI-powered content creation needs
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-normal text-center mb-16">
            Additional Features
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.05] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-lg mb-12 text-white/70 text-center">Available for All Tiers</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {additionalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center p-6 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] flex items-center justify-center border border-white/10">
                      <svg
                        className="w-6 h-6 text-white/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {index === 0 ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        ) : index === 1 ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        )}
                      </svg>
                    </div>
                    <span className="text-sm text-white/70">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 