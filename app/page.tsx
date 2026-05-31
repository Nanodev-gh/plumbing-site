import Hero3DWrapper from "@/components/Hero3DWrapper";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import { Wrench, ShieldCheck, ArrowRight, User, Mail, MessageSquare, Send, Droplet, PhoneCall } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 overflow-hidden font-sans transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      <WhatsAppButton />

      {/* Hero Section */}
      <main className="relative z-10 w-full min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center justify-center px-6 md:px-24 pt-28 pb-12 gap-0 lg:gap-12">
        
        {/* Left: Text */}
        <div className="relative z-20 max-w-2xl w-full mx-auto lg:mx-0  lg:text-left flex flex-col items-center lg:items-start order-last lg:order-first lg:mt-0">
          
          <h1 className="text-2xl lg:text-6xl font-light tracking-tight leading-[1.15] mb-6 drop-shadow-sm dark:drop-shadow-lg text-blue-950 dark:text-neutral-500 w-full">
            Goodflow Mechanical  <br className="hidden lg:block" />
            <span className="text-blue-950 dark:text-blue-950 capitalize">Plumbing Services</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl font-light leading-relaxed px-4 lg:px-0 w-full">
            Experience next-generation plumbing solutions. From residential leaks to commercial 
            overhauls, Goodflow Plumbing delivers precision and reliability that stands the test of time.
          </p>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 pointer-events-auto px-4 lg:px-0">
            <a href="#contact" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105 dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
              Get an Estimate
              <ArrowRight size={20} />
            </a>
            <a href="#services" className="w-full sm:w-auto bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 backdrop-blur-md text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold transition-all border border-slate-300 dark:border-slate-700 focus:outline-none flex items-center justify-center">
              Our Services
            </a>
          </div>
        </div>

        {/* Right: 3D Canvas */}
        <div className="relative w-full h-[30vh] lg:h-[80vh] flex items-center justify-center order-first lg:order-last">
          <Hero3DWrapper />
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="relative z-20 py-32 px-6 md:px-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Expert Services</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg md:text-2xl">We handle everything from minor repairs to major installations with extreme attention to detail and modern tools.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors group shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="text-blue-600 dark:text-blue-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Repairs & Maintenance</h3>
              <p className="text-slate-600 dark:text-slate-400">Fast, reliable fixes for leaks, clogs, and broken pipes to keep your system in perfect gravity.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors group shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Droplet className="text-blue-600 dark:text-blue-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Water Heaters</h3>
              <p className="text-slate-600 dark:text-slate-400">Installation and repair of modern tankless and traditional water heating systems.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors group shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-blue-600 dark:text-blue-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Full Inspections</h3>
              <p className="text-slate-600 dark:text-slate-400">Comprehensive system checks using advanced diagnostic tools to prevent future issues.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors group shadow-sm hover:shadow-md">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Send className="text-blue-600 dark:text-blue-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">New Projects</h3>
              <p className="text-slate-600 dark:text-slate-400">From start to finish, we handle complete plumbing installations for new constructions and renovations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative z-20 py-32 px-6 md:px-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 sm:gap-24">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Redefining Plumbing</h2>
            <div className="w-24 h-1 bg-blue-500 rounded-full" />
            <p className="text-slate-700 dark:text-slate-400 text-lg md:text-2xl leading-relaxed">
              At <strong className="font-semibold text-slate-900 dark:text-white">Goodflow Plumbing</strong>, we believe that the systems keeping our homes and businesses flowing should be treated with the highest level of precision and technological care.
            </p>
            <p className="text-slate-700 dark:text-slate-400 text-lg md:text-2xl leading-relaxed">
              Founded on the principles of reliability and advanced diagnostics, our team brings a "zero-gravity" mindset to problem-solving. We don't just fix leaks; we engineer solutions that prevent them from happening again, using state-of-the-art non-invasive tools and top-tier materials.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex gap-2 items-center text-slate-700 dark:text-slate-300">
                <ShieldCheck className="text-blue-600 dark:text-blue-500" size={24} />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex gap-2 items-center text-slate-700 dark:text-slate-300">
                <Wrench className="text-blue-600 dark:text-blue-500" size={24} />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative w-full overflow-visible">
            {/* <div className="aspect-square  rounded-md overflow-hidden relative shadow-sm border border-slate-200 dark:border-slate-800">
              <Image 
                src="/plumbing.jpg" 
                alt="Apex Plumbers at Work" 
                fill 
                className="object-cover relative z-10" 
              />
              
              <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none z-20" />
            </div> */}
            {/* Decorative background blur */}
            {/* <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-full opacity-50" /> */}
            <Hero3DWrapper src="/hero-plumbing-vector-transparent.png"/>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-20 py-32 px-6 md:px-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Get in Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-2xl">Need immediate assistance or planning a major project? Drop a message or give us a call and a specialist will respond promptly with a comprehensive implementation roadmap.</p>
            <div className="mt-8 md:hidden flex flex-col items-center gap-4">
              <a href="tel:+233545404311" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 text-lg w-full justify-center">
                <PhoneCall size={20} />
                <span>Call Us</span>
              </a>
              <a href="https://wa.me/233545404311" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 text-lg w-full justify-center">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-950 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-[0_0_40px_-15px_rgba(37,99,235,0.2)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 pt-16 pb-8 px-6 md:px-24 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col  justify-between items-center gap-8 mb-12 text-slate-600 dark:text-slate-400">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Goodflow Mechanical Plumbing Services</h4>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <PhoneCall size={16} className="text-blue-500" /> 
              +233545404311 / +233509502802
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <a href="https://wa.me/233545404311" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#25D366] transition-colors">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} className="text-blue-500" /> 
              Goodflowplumbing26@gmail.com
            </p>
          </div>
          {/* <div className="text-center md:text-right space-y-2">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Contact Information</h4>
          </div> */}
        </div>
        <div className="text-center text-sm text-slate-500 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800 pt-8">
        
        </div>
        <p className="text-center text-[11px] italic">&copy; {new Date().getFullYear()} Goodflow Mechanical Plumbing Services. <br/> All rights reserved.</p>

      </footer>
    </div>
  );
}
