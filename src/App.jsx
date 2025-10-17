import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

export default function CromaHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImage = "/images/hero/hero-image.png";

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative">
              <div className="bg-red-900 px-8 py-3 relative" style={{
                clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)'
              }}>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-yellow-200">CROMA</h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 text-sm">
              <a href="#inicio" className="text-yellow-200 hover:text-yellow-300 transition-colors font-bold border-b-2 border-yellow-200 pb-1">INÍCIO</a>
              <a href="#portfolio" className="hover:text-yellow-200 transition-colors font-medium">PORTFÓLIO</a>
              <a href="#sobre" className="hover:text-yellow-200 transition-colors font-medium">SOBRE</a>
              <a href="#servicos" className="hover:text-yellow-200 transition-colors font-medium">SERVIÇOS</a>
              <a href="#blog" className="hover:text-yellow-200 transition-colors font-medium">BLOG</a>
              <a href="#contato" className="hover:text-yellow-200 transition-colors font-medium">CONTATO</a>
            </div>

            {/* CTA Button + Brand */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="bg-yellow-200 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105 text-sm tracking-wide">
                AGENDAR
              </button>
              <div className="flex items-center gap-2 text-yellow-200">
                <span className="font-bold text-sm">CROMA PROJECT</span>
                <Camera className="w-5 h-5" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-yellow-200"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
              <a href="#inicio" className="block text-yellow-200 font-bold py-2">INÍCIO</a>
              <a href="#portfolio" className="block hover:text-yellow-200 py-2">PORTFÓLIO</a>
              <a href="#sobre" className="block hover:text-yellow-200 py-2">SOBRE</a>
              <a href="#servicos" className="block hover:text-yellow-200 py-2">SERVIÇOS</a>
              <a href="#blog" className="block hover:text-yellow-200 py-2">BLOG</a>
              <a href="#contato" className="block hover:text-yellow-200 py-2">CONTATO</a>
              <button className="w-full bg-yellow-200 text-gray-900 px-6 py-2.5 rounded-full font-bold mt-4">
                AGENDAR
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Red Background */}
      <section className="relative h-screen bg-gradient-to-br from-red-900 via-red-900 to-red-950 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 h-full relative flex items-center justify-center pt-16">
          
          {/* Top Left Text */}
          <div className="absolute top-28 left-6 md:left-12 animate-fadeIn z-10">
            <h2 className="text-yellow-200 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
              LOREM IPSUM
            </h2>
            <p className="text-white text-base md:text-lg font-light mt-1">
              Norem ipsum dolor sit amet
            </p>
          </div>

          {/* Top Right Text */}
          <div className="absolute top-28 right-6 md:right-12 text-right animate-fadeIn hidden md:block z-10">
            <p className="text-yellow-200 text-lg md:text-xl font-bold">Norem ipsum dolor</p>
          </div>

          {/* Center - Giant CROMA Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <h1 className="text-[150px] md:text-[220px] lg:text-[280px] xl:text-[340px] font-black text-yellow-200 leading-none tracking-tighter select-none whitespace-nowrap opacity-90">
              CROMA
            </h1>
          </div>

          {/* Hero Image - MAIOR e centralizada */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-scaleIn">
            <img 
              src={heroImage}
              alt="CROMA Hero" 
              className="w-[320px] h-[420px] md:w-[380px] md:h-[500px] lg:w-[440px] lg:h-[580px] xl:w-[480px] xl:h-[640px] object-cover"
            />
          </div>

          {/* Bottom Left Text */}
          <div className="absolute bottom-16 left-6 md:left-12 animate-fadeIn z-10">
            <p className="text-white text-lg md:text-xl font-bold">ADLaM Display</p>
          </div>
        </div>
      </section>

      {/* Blue Section */}
      <section className="bg-sky-900 py-16 relative min-h-[50vh]">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Top Left Text */}
          <div className="mb-12 pt-8">
            <h3 className="text-yellow-200 text-4xl md:text-6xl font-black tracking-tight">
              LOREM IPSUM
            </h3>
          </div>

          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-white text-xl md:text-2xl leading-relaxed font-light mb-8">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>

            <button className="bg-yellow-200 text-sky-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105">
              AGENDAR
            </button>
          </div>

          {/* Right side text */}
          <div className="absolute top-32 right-6 md:right-16 text-right hidden lg:block">
            <p className="text-yellow-200 text-xl font-bold leading-tight">
              Morem ipsum<br />
              Porem ipsum dol<br />
              sit aments
            </p>
          </div>

          {/* Bottom right branding */}
          <div className="absolute bottom-12 right-6 md:right-16">
            <div className="flex items-center gap-3 text-yellow-200">
              <span className="font-bold text-lg">CROMA PROJECT</span>
              <Camera className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Temporary footer */}
      <footer className="bg-gray-950 py-8 text-center text-gray-400 text-sm">
        <p>CROMA Project © 2024 - Mais seções em breve... 🚀</p>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}