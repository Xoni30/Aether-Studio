'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function About() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-7xl font-medium mb-8">
              Revolutionizing<br />
              <span className="text-accent">fashion photography</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-neutral-600 max-w-2xl">
              UV Studios combines cutting-edge AI technology with fashion expertise 
              to transform how brands create their visual content.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-20">
            <ScrollAnimation type="slide-right">
              <div className="aspect-[4/3] bg-neutral-100">
                {/* Add mission image */}
              </div>
            </ScrollAnimation>
            <div className="flex flex-col justify-center">
              <ScrollAnimation type="slide-left">
                <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
                <p className="text-neutral-600 mb-6">
                  We're on a mission to make professional fashion photography accessible 
                  to brands of all sizes. By leveraging AI technology, we're eliminating 
                  the traditional barriers of time, cost, and logistics.
                </p>
                <p className="text-neutral-600">
                  Our platform enables fashion brands to create stunning, consistent, 
                  and on-brand visual content at scale - without the need for 
                  physical photoshoots.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-medium mb-16 text-center">
              Meet the team behind UV Studios
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((_, index) => (
              <ScrollAnimation 
                key={index} 
                type="scale" 
                delay={index * 0.1}
              >
                <div className="text-center">
                  <div className="aspect-square bg-neutral-100 mb-6 rounded-lg">
                    {/* Team member photo */}
                  </div>
                  <h3 className="text-xl font-medium mb-2">Team Member Name</h3>
                  <p className="text-neutral-600">Position</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-medium mb-16 text-center">Our Values</h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-10">
            <ScrollAnimation type="fade-up" delay={0.1}>
              <div className="p-8 bg-white rounded-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-accent text-xl">01</span>
                </div>
                <h3 className="text-xl font-medium mb-4">Innovation</h3>
                <p className="text-neutral-600">
                  Pushing the boundaries of what's possible with AI in fashion photography.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={0.2}>
              <div className="p-8 bg-white rounded-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-accent text-xl">02</span>
                </div>
                <h3 className="text-xl font-medium mb-4">Quality</h3>
                <p className="text-neutral-600">
                  Delivering professional-grade results that exceed industry standards.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={0.3}>
              <div className="p-8 bg-white rounded-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-accent text-xl">03</span>
                </div>
                <h3 className="text-xl font-medium mb-4">Accessibility</h3>
                <p className="text-neutral-600">
                  Making professional fashion photography accessible to all brands.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-4xl font-medium mb-6">
                Ready to transform your fashion photography?
              </h2>
              <p className="text-neutral-600 mb-10">
                Join the future of fashion photography with UV Studios.
              </p>
              <a href="/contact" className="btn btn-primary inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 