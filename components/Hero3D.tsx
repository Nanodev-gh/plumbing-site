"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero3D({imageSrc}: {imageSrc?: string}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 dark:bg-blue-600/20 blur-[100px] rounded-full -z-10" />
      
      <div className="relative w-full max-w-150 aspect-square animate-float">
        {/* Main Image Container with Glassmorphism */}
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden  shadow-2xl backdrop-blur-sm">
          <Image
            // src="/hero-plumbing-vector-transparent.png"
            src={imageSrc || "/plumber-banner.jpg"}
            alt="Plumbing Vector Illustration"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none" />
        </div>
        
        {/* Floating Accent Elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 dark:bg-slate-800/30 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl flex items-center justify-center -rotate-12 animate-pulse transition-transform hover:rotate-0 duration-500">
           <div className="w-12 h-1 bg-blue-500 rounded-full" />
        </div>
        
        <div className="absolute -bottom-10 -left-10 h-16 w-20 md:w-16 md:h-32  bg-blue-600/20 dark:bg-blue-900/30 backdrop-blur-md border border-blue-400/20 rounded-full shadow-2xl flex items-center justify-center animate-bounce-slow">
           <div className="w-10 h-10 md:w-16 md:h-16 border-4 border-blue-500/30 rounded-full border-t-blue-500  animate-spin" />
        </div>
      </div>
    </div>
  );
}
