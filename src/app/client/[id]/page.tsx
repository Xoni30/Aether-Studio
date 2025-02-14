'use client'

import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Lock, KeyRound } from 'lucide-react'

export default function ClientPortal({ params }: { params: { id: string } }) {
  const [showInput, setShowInput] = React.useState(false)
  const [password, setPassword] = React.useState('')
  const [isUnlocked, setIsUnlocked] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  // Hardcoded password - in a real app, this would be handled securely
  const correctPassword = 'hautecarat125'

  // Mock client name - in a real app, this would be fetched based on the ID
  const clientName = 'Hautecarat'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password === correctPassword) {
      setIsLoading(true)
      // Simulate loading
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsUnlocked(true)
      setIsError(false)
    } else {
      setIsError(true)
      setPassword('')
      setTimeout(() => setIsError(false), 1000)
    }
  }

  // Mock gallery images - in a real app, these would be loaded dynamically
  const galleryImages = Array.from({ length: 23 }, (_, i) => `/huatecrat/dia-${(i % 23) + 1}.jpg`)
  const tickerImages = [
    '/huatecrat/dia-5.jpg',
    '/huatecrat/dia-22.jpg', 
    '/huatecrat/dia-13.jpg',
    '/huatecrat/dia-10.jpg',
    '/huatecrat/dia-2.jpg',
    '/huatecrat/dia-12.jpg'
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatePresence>
        {!isUnlocked && (
          <motion.section 
            className="min-h-screen relative overflow-hidden"
            exit={{ 
              opacity: 0,
              scale: 1.5,
              filter: 'blur(10px)',
              transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
          >
            {/* Content Section */}
            <div className="container relative z-10 pt-16 pb-0 flex justify-center">
              <div className="max-w-[800px] text-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="flex items-center justify-center gap-4 mb-12 text-white/50"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="text-sm tracking-wide uppercase">Exclusive Access</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </motion.div>

                <motion.h1 
                  className="text-[clamp(4rem,10vw,7rem)] font-normal mb-8 leading-none tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  UV Studios<span className="text-base align-top font-normal ml-1">®</span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  <h2 className="text-[clamp(2rem,4vw,3rem)] font-light mb-6 mx-auto tracking-tight">
                    Welcome back, {clientName}
                  </h2>
                  <p className="text-[clamp(1rem,1.5vw,1.1rem)] text-white/60 mx-auto mb-8 max-w-[600px] leading-relaxed">
                    Your private collection awaits. Each piece in this curated gallery has been meticulously crafted using cutting-edge AI to capture your brand's essence and elevate your visual narrative.
                  </p>
                </motion.div>
                <AnimatePresence mode="wait">
                  {!showInput ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ 
                        scale: 0.9,
                        opacity: 0,
                        transition: { duration: 0.2 }
                      }}
                      transition={{ duration: 0.8, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                      <button 
                        onClick={() => setShowInput(true)}
                        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-sm font-medium transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Access Gallery
                          <Lock className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        </span>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      onSubmit={handleSubmit}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="flex items-center justify-center gap-2 w-full"
                    >
                      <motion.div
                        animate={isError ? {
                          x: [0, -10, 10, -10, 10, 0],
                          transition: { duration: 0.4 }
                        } : {}}
                        className="relative w-full max-w-[250px]"
                      >
                        <div className="relative group">
                          <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 transition-colors duration-300 group-focus-within:text-white/60" />
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-12 py-3 bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/10 hover:border-white/20 focus:border-white/20 rounded-l-full text-sm text-center tracking-wide outline-none transition-all duration-300"
                            placeholder="Enter your password"
                            autoFocus
                          />
                        </div>
                      </motion.div>
                      <motion.button
                        type="submit"
                        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 disabled:hover:bg-white/5 border border-white/10 hover:border-white/20 disabled:hover:border-white/10 rounded-r-full text-sm font-medium transition-all duration-300 disabled:opacity-50 h-[46px]"
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading || !password}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              Unlock
                              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </>
                          )}
                        </span>
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Background Ticker */}
            <div className="absolute inset-0 w-full h-full" style={{ top: '62vh' }}>
              <div className="ticker-container">
                <motion.div 
                  className="ticker-wrapper animate-ticker"
                  exit={{ 
                    y: [0, -1000],
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  {[...Array(2)].map((_, setIndex) => (
                    <React.Fragment key={setIndex}>
                      {tickerImages.map((src, index) => (
                        <motion.div
                          key={`${setIndex}-${index}`}
                          className="ticker-item"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: index * 0.1,
                            ease: [0.43, 0.13, 0.23, 0.96]
                          }}
                        >
                          <Image
                            src={src}
                            alt={`dia-${index + 1}`}
                            width={400}
                            height={600}
                            className="object-cover"
                            priority={index < 4}
                          />
                        </motion.div>
                      ))}
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container py-32"
        >
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {galleryImages.map((src, index) => (
              <motion.div
                key={src}
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 100,
                    scale: 0.8,
                    rotateX: 30,
                    rotateY: -30,
                    rotateZ: 10
                  },
                  show: { 
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 1.2,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }
                  }
                }}
                className="group aspect-[1/1] relative rounded-2xl overflow-hidden bg-neutral-900/50 border border-white/10 hover:border-white/30 transition-all duration-500 perspective-1000"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <motion.div
                  className="w-full h-full"
                  variants={{
                    hidden: { 
                      transformStyle: 'preserve-3d',
                      transform: 'translateZ(-100px)'
                    },
                    show: { 
                      transform: 'translateZ(0)',
                      transition: {
                        type: "spring",
                        bounce: 0.3,
                        duration: 1.5
                      }
                    }
                  }}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </main>
  )
} 