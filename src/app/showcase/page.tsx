'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ScrollAnimation from '../../components/ScrollAnimation'

const collections = [
  {
    title: 'Summer Collection 2024',
    description: 'Complete catalog transformation for a leading swimwear brand.',
    styles: '1000+',
    turnaround: '3-Day',
    category: 'Swimwear'
  },
  {
    title: 'Winter Essentials',
    description: 'AI-powered lookbook for a premium outerwear brand.',
    styles: '500+',
    turnaround: '2-Day',
    category: 'Outerwear'
  },
  {
    title: 'Spring Lookbook',
    description: 'Fresh and vibrant collection for a contemporary fashion label.',
    styles: '750+',
    turnaround: '4-Day',
    category: 'Contemporary'
  },
  {
    title: 'Autumn Styles',
    description: 'Seasonal catalog for a luxury fashion house.',
    styles: '1200+',
    turnaround: '5-Day',
    category: 'Luxury'
  },
  // Add more collections as needed
]

export default function Showcase() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-7xl font-medium mb-8">
              Our Latest<br />
              <span className="text-accent">Transformations</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-neutral-600 max-w-2xl">
              Explore how leading fashion brands are revolutionizing their catalogs 
              with UV Studios' AI-powered photography.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            {collections.map((collection, index) => (
              <ScrollAnimation 
                key={index}
                type="fade-up"
                delay={index * 0.1}
              >
                <div className="group">
                  <div className="aspect-[4/3] bg-neutral-100 mb-6 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-neutral-200 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl mb-2">{collection.title}</h3>
                      <p className="text-neutral-600">{collection.description}</p>
                    </div>
                    <span className="text-accent text-sm">{collection.category}</span>
                  </div>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-neutral-600">{collection.styles} Styles</span>
                    <span className="text-accent">{collection.turnaround} Turnaround</span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-medium mb-16 text-center">
              How We Transform Your Catalog
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                step: '01',
                title: 'Upload',
                description: 'Share your product photos with us'
              },
              {
                step: '02',
                title: 'Process',
                description: 'Our AI analyzes and enhances your images'
              },
              {
                step: '03',
                title: 'Transform',
                description: 'Generate professional model photography'
              },
              {
                step: '04',
                title: 'Deliver',
                description: 'Receive your new catalog within days'
              }
            ].map((step, index) => (
              <ScrollAnimation 
                key={index}
                type="fade-up"
                delay={index * 0.1}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg mb-6 mx-auto flex items-center justify-center">
                    <span className="text-accent text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-4xl font-medium mb-6">
                Ready to transform your catalog?
              </h2>
              <p className="text-neutral-600 mb-10">
                Join these leading brands and revolutionize your fashion photography with AI.
              </p>
              <a href="/contact" className="btn btn-primary inline-flex items-center">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 