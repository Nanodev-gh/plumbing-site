"use client";

import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

export default function Hero3DWrapper({src}: {src?: string}) {
  return <Hero3D imageSrc={src} />;
}
