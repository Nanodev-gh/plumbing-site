"use client";

import { useState, useEffect } from "react";
import { Droplet, PhoneCall, Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/90 dark:bg-slate-950/90 shadow-sm border-b border-slate-200 dark:border-white/10 backdrop-blur-md' : 'py-6 bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2 z-50">
          {/* <Droplet className="text-blue-600 dark:text-blue-500" fill="currentColor" /> */}
          <Image src="/logo.png" alt="GF Plumbing Logo" width={100} height={100} className="" />
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
            GF Plumbing
          </span> */}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300">
          <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2 text-sm">
            <PhoneCall size={16} />
            <span className="text-[11px]">+233545404311</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <button 
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors">Services</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors">About Us</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors">Contact</a>
      </div>
    </nav>
  );
}
