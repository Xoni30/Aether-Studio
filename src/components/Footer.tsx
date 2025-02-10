'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Showcase', href: '/showcase' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactItems = [
    {
      name: 'team@uvstudios.ai',
      href: 'mailto:team@uvstudios.ai', 
      icon: <Mail className="h-4 w-4 mr-2" />
    }
  ];

  const socialItems = [
    { name: 'Twitter', href: 'https://x.com/_uvstudios', icon: <Twitter className="h-5 w-5" /> },
    { name: 'Instagram', href: 'https://www.instagram.com/uvstudios__', icon: <Instagram className="h-5 w-5" /> },
  ];

  const legalItems = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];
  
  return (
    <footer className="border-t border-white/10">
      <div className="container py-20">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-medium">UV Studios</span>
              <span className="text-xs align-top text-accent">®</span>
            </Link>
            <p className="text-neutral-600 max-w-md">
              Transform your fashion brand with AI-powered photoshoots. Create stunning model photography instantly, perfect for e-commerce and fashion catalogs.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="nav-item hover-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="nav-item flex items-center">
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-6">
              {socialItems.map((item) => (
                <Link key={item.name} href={item.href} className="nav-item">
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary/5">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="nav-item">© {currentYear} UV Studios. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalItems.map((item) => (
              <Link key={item.name} href={item.href} className="nav-item hover-underline">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}