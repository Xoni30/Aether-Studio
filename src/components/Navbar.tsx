'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();

  const navItems = [
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-normal">UV Studios</span>
          <span className="text-xs align-top text-accent">®</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-light hover-underline"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="cta-button"
          >
            <span>
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-black/80 backdrop-blur-lg mt-4 rounded-2xl border border-white/10"
      >
        <div className="py-4 px-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-lg hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="cta-button block text-center"
            onClick={() => setIsOpen(false)}
          >
            <span>
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
} 
