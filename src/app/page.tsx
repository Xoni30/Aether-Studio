'use client'

import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Link } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const processSteps = [
  {
    title: 'Consultation & Brand Analysis',
    description: 'We dive deep into your brand DNA, understanding your unique identity, target audience, and content goals.',
    icon: '1️⃣'
  },
  {
    title: 'AI Model Customization',
    description: 'Our AI learns your brand\'s visual language, ensuring every generated asset aligns perfectly with your identity.',
    icon: '2️⃣'
  },
  {
    title: 'Creative Direction',
    description: 'Collaborate with our team to define themes and visual elements that will set your brand apart.',
    icon: '3️⃣'
  },
  {
    title: 'AI-Powered Production',
    description: 'Generate stunning, on-brand visuals at scale—no physical shoots, no scheduling hassles.',
    icon: '4️⃣'
  }
]

const benefits = [
  {
    title: 'Cost Efficiency',
    description: 'Eliminate expensive photo shoots, studio rentals, and crew costs while maintaining premium quality.',
    imageSrc: undefined
  },
  {
    title: 'Rapid Scaling',
    description: 'Generate thousands of variations in minutes, perfect for multi-channel marketing campaigns.',
    imageSrc: undefined
  },
  {
    title: 'Consistent Quality',
    description: 'Maintain brand consistency across all visuals with AI-powered precision and control.',
    imageSrc: undefined
  }
]

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [expandedService, setExpandedService] = React.useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "UI Design",
      description: "Create stunning user interfaces with our AI-powered design system. From web applications to mobile apps, we deliver pixel-perfect designs that engage and delight users."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Branding",
      description: "Develop a cohesive brand identity that stands out. Our AI-driven branding solutions ensure consistency across all touchpoints while maintaining your unique voice."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M12 3L17 7V17L12 21L7 17V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3L17 7L12 11L7 7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Motion / 3D",
      description: "Bring your ideas to life with cutting-edge motion graphics and 3D animations. Our AI technology enables rapid creation of stunning visual effects and immersive experiences."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Video Production",
      description: "Create professional video content at scale. From social media shorts to full-length features, our AI-powered video production streamlines the entire process."
    }
  ];

  const faqs = [
    {
      question: "What's the advantage of subscribing?",
      answer: "Why opt for our monthly plan? Well, consider this: hiring a full-time senior-level designer annually now exceeds $80,000, not to mention additional benefits, and availability can be a challenge. Moreover, you might not always have a constant flow of work to keep them occupied, leaving you paying for idle time.\n\nWith our monthly plan, you have the flexibility to pause and resume your subscription as needed. This means you're only paying when you have tasks ready for your designer, ensuring cost-effectiveness and maximizing your resources."
    },
    {
      question: "Are there any restrictions on the number of requests I can make?",
      answer: "Once you're subscribed, you can add unlimited design requests to your queue, and they'll be delivered to you sequentially."
    },
    {
      question: "What is the turnaround time for receiving my designs?",
      answer: "In general, most requests are fulfilled within two days or less. However, more intricate requests may require additional time."
    },
    {
      question: "How does the subscription pause function operate?",
      answer: "We recognize that you may not always have a consistent stream of design work to justify a full month's subscription. Maybe you have just one or two design requests presently. That's where the pause feature becomes invaluable.\n\nOur billing cycles are structured around a 31-day period. Let's say you enroll and utilize the service for 21 days, then opt to pause your subscription. This action effectively suspends the billing cycle, leaving you with 10 days of service credit to utilize at your discretion in the future."
    },
    {
      question: "Do you offer refunds?",
      answer: "Regrettably, we do not offer refunds due to the premium quality of our work."
    }
  ];

  return (
    <main>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${isScrolled ? 'pt-4' : 'pt-8'}`}>
        <div className={`transition-all duration-300 ${isScrolled ? 'w-[700px]' : 'w-[800px]'}`}>
          <div className={`transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'} rounded-full border border-white/10 px-8`}>
            <Navbar />
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-44 pb-64 overflow-hidden relative z-[2]">
        <div className="container">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-normal text-[clamp(4rem,10vw,7rem)] leading-none mb-6"
            >
              UV Studios<span className="text-base align-top font-normal">©</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-normal text-[clamp(1.5rem,3vw,2rem)] text-white/70"
            >
              AI Creative Studio
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a href="/contact" className="cta-button">
                <span>
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="ticker-container relative z-[2]">
          <div className="ticker-wrapper animate-ticker">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ticker-item"
              >
                <Image
                  src={`/clothing/clothing-${(index % 8) + 1}.png`}
                  alt={`Fashion ${index + 1}`}
                  width={400}
                  height={600}
                  className="object-cover"
                  priority={index < 4}
                />
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={`duplicate-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ticker-item"
              >
                <Image
                  src={`/clothing/clothing-${(index % 8) + 1}.png`}
                  alt={`Fashion ${index + 1}`}
                  width={400}
                  height={600}
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mb-20">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-normal max-w-4xl">
          At UV Studios — We redefine creativity, delivering seamless, high-end content at the speed of innovation
          </h2>
        </div>

        {/* First Row - Moving Right */}
        <div className="relative mb-2">
          <div className="flex overflow-hidden">
            <div className="flex gap-2 animate-carousel-right">
              {[...Array(10)].map((_, index) => (
                <div
                  key={`right-${index}`}
                  className="w-[400px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10"
                >
                  <div className="w-full h-full relative bg-gradient-to-br from-neutral-900 to-neutral-800">
                    <Image
                      src={`/fashion-${(index % 10) + 1}.png`}
                      alt={`Carousel ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover opacity-0"
                      onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[...Array(10)].map((_, index) => (
                <div
                  key={`right-duplicate-${index}`}
                  className="w-[400px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10"
                >
                  <div className="w-full h-full relative bg-gradient-to-br from-neutral-900 to-neutral-800">
                    <Image
                      src={`/fashion-${(index % 10) + 1}.png`}
                      alt={`Carousel ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover opacity-0"
                      onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex gap-2 animate-carousel-left">
              {[...Array(10)].map((_, index) => (
                <div
                  key={`left-${index}`}
                  className="w-[400px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10"
                >
                  <div className="w-full h-full relative bg-gradient-to-br from-neutral-900 to-neutral-800">
                    <Image
                      src={`/fashion-${10 - (index % 10)}.png`}
                      alt={`Carousel ${10 - index}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover opacity-0"
                      onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[...Array(10)].map((_, index) => (
                <div
                  key={`left-duplicate-${index}`}
                  className="w-[400px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10"
                >
                  <div className="w-full h-full relative bg-gradient-to-br from-neutral-900 to-neutral-800">
                    <Image
                      src={`/fashion-${10 - (index % 10)}.png`}
                      alt={`Carousel ${10 - index}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover opacity-0"
                      onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-transparent">
        <div className="container">
          <h2 className="text-2xl mb-16">Transforming fashion photography with AI technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <div className="text-4xl font-normal mb-2">500K+</div>
              <div className="font-normal text-neutral-600">Photos Generated</div>
              <div className="text-sm font-normal text-neutral-500 mt-1">For leading fashion brands globally</div>
            </div>
            <div>
              <div className="text-4xl font-normal mb-2">24/7</div>
              <div className="font-normal text-neutral-600">Instant Creation</div>
              <div className="text-sm font-normal text-neutral-500 mt-1">No more waiting for photoshoot schedules</div>
            </div>
            <div>
              <div className="text-4xl font-normal mb-2">60%</div>
              <div className="font-normal text-neutral-600">Cost Reduction</div>
              <div className="text-sm font-normal text-neutral-500 mt-1">Compared to traditional photoshoots</div>
            </div>
            <div>
              <div className="text-4xl font-normal mb-2">100+</div>
              <div className="font-normal text-neutral-600">Fashion Brands</div>
              <div className="text-sm font-normal text-neutral-500 mt-1">Trust us with their catalogs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mock AI Generator UI Section */}
      {/*
      <section className="py-32 bg-black relative">
        <div className="container max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-[1200px] mb-16">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-normal mb-4">Experience the magic.</h2>
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-normal text-white/70">Watch AI transform your photos.</h3>
          </div>

          <div className="relative bg-neutral-900/50 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-12 gap-8">
              {/* Main Result Area - 2/3 width *//*}
              <div className="col-span-8">
                <div className="aspect-[4/3] rounded-2xl bg-neutral-800/50 overflow-hidden">
                  {/* Mock scanning effect *//*}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent w-full h-1"
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ 
                      y: ["0%", "100%"],
                      opacity: [0, 0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      times: [0, 0.2, 0.3, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                  
                  {/* Result image (pre-loaded) *//*}
                  <motion.div
                    className="absolute inset-0 bg-[url('/images/fashion-1.jpg')] bg-cover bg-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1] }}
                    transition={{ 
                      duration: 3,
                      times: [0, 0.7, 1],
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                </div>
              </div>

              {/* Sidebar - 1/3 width *//*}
              <div className="col-span-4 space-y-6">
                {/* Style Preferences *//*}
                <div className="rounded-2xl bg-neutral-800/50 border border-white/10 p-6">
                  <h4 className="text-lg font-medium mb-4">Style Preferences</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Lighting</label>
                      <div className="h-2 rounded-full bg-neutral-700">
                        <motion.div 
                          className="h-full w-2/3 rounded-full bg-white/20"
                          initial={{ width: "0%" }}
                          animate={{ width: "66%" }}
                          transition={{ delay: 1, duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Contrast</label>
                      <div className="h-2 rounded-full bg-neutral-700">
                        <motion.div 
                          className="h-full w-3/4 rounded-full bg-white/20"
                          initial={{ width: "0%" }}
                          animate={{ width: "75%" }}
                          transition={{ delay: 1.2, duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Saturation</label>
                      <div className="h-2 rounded-full bg-neutral-700">
                        <motion.div 
                          className="h-full w-1/2 rounded-full bg-white/20"
                          initial={{ width: "0%" }}
                          animate={{ width: "50%" }}
                          transition={{ delay: 1.4, duration: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Generate Button *//*}
                <motion.button
                  className="w-full bg-white text-black px-8 py-4 rounded-xl font-medium text-sm relative overflow-hidden group"
                  animate={{ 
                    scale: [1, 0.98, 1],
                    transition: { delay: 2, duration: 0.3 }
                  }}
                >
                  <span className="relative z-10">Generate</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0"
                    animate={{ opacity: [0, 0.2, 0] }}
                    transition={{ delay: 2, duration: 0.3 }}
                  />
                </motion.button>

                {/* Animated cursor *//*}
                <motion.div
                  className="absolute w-8 h-8 pointer-events-none"
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ 
                    x: [null, "66%", "66%"],
                    y: [null, "90%", "90%"],
                    opacity: [0, 1, 0],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    times: [0, 0.8, 1],
                    delay: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M3.9,18.9l-2.4-2.4l8.1-8.1L2.5,1.3L4.9-1.1l7.1,7.1l8.1-8.1l2.4,2.4l-8.1,8.1l7.1,7.1l-2.4,2.4l-7.1-7.1L3.9,18.9z"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Services Section */}
      <section className="py-32 bg-black relative">
        <div className="container max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-[1200px]">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-normal mb-4">There is a lot we can do.</h2>
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-normal text-white/70 mb-16">Here is a few.</h3>
          </div>
          
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={false}
                className="group bg-neutral-900/50 rounded-2xl p-8 hover:bg-neutral-900/70 transition-all duration-500 cursor-pointer"
                onClick={() => setExpandedService(expandedService === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {service.icon}
                    <span className="text-[clamp(1.5rem,2vw,2rem)]">{service.title}</span>
                  </div>
                  <motion.div 
                    animate={{ rotate: expandedService === index ? 180 : 0 }}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/20">
                      <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 text-white/70">
                        {service.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-black relative">
        <div className="container max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-[1200px]">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-normal mb-4">Frequently asked</h2>
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-normal text-white/70 mb-16">questions about our services</h3>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                className="group bg-neutral-900/50 rounded-2xl p-8 hover:bg-neutral-900/70 transition-all duration-500 cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[clamp(1.25rem,1.5vw,1.5rem)] pr-8">{faq.question}</span>
                  <motion.div 
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    className="w-6 h-6 flex-shrink-0 flex items-center justify-center"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/20">
                      <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 text-white/70 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-black relative">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <span className="text-white/70">Contact</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-normal mb-6">
                Ready for magical AI? Get in touch.
              </h2>
            </div>
            <div className="flex-1">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white placeholder-white/40 focus:border-white/50 transition-all outline-none font-normal"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white placeholder-white/40 focus:border-white/50 transition-all outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Message" 
                    rows={6}
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white placeholder-white/40 focus:border-white/50 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <div className="inline-block">
                  <button 
                    type="submit"
                    className="cta-button contact-button"
                  >
                    <span>
                      Send Message
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
