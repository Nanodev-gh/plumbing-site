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
    <nav className={`fixed top-0 w-full h-14 z-50 transition-all duration-300 ${isScrolled ? 'py-4  dark:bg-slate-950/90 shadow-sm border-b border-slate-200 dark:border-white/10 backdrop-blur-md' : 'py-6 bg-transparent border-transparent'}`}>
      <div className="max-w-7xl h-full mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2 z-50">
          {/* <Droplet className="text-blue-600 dark:text-blue-500" fill="currentColor" /> */}
          <div className="relative w-24 h-32 flex items-center justify-center">
            <Image 
              src="/logo2-real-transparent.png" 
              alt="Goodflow Plumbing Logo" 
              fill
              // width={200}
              // height={500}
              className="object-contain mt-2.5" 
            />
          </div>
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
          <a 
            href="https://wa.me/233545404311"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white p-2.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center"
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
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
        <a 
          href="https://wa.me/233545404311"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 text-xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
