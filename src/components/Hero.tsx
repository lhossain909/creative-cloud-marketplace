
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import AnimatedImage from './AnimatedImage';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate position relative to the center of the container
      const x = ((clientX - rect.left) / rect.width - 0.5) * 30;
      const y = ((clientY - rect.top) / rect.height - 0.5) * 30;
      
      // Apply subtle parallax effect to background shapes
      const shapes = containerRef.current.querySelectorAll('.parallax-shape');
      shapes.forEach((shape, i) => {
        const factor = (i + 1) * 0.3;
        const el = shape as HTMLElement;
        el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 section-padding"
    >
      {/* Background shapes with parallax effect */}
      <div className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-adobe-blue/10 blur-3xl parallax-shape"></div>
      <div className="absolute bottom-[20%] left-[15%] w-72 h-72 rounded-full bg-adobe-red/10 blur-3xl parallax-shape"></div>
      <div className="absolute top-[30%] left-[5%] w-48 h-48 rounded-full bg-adobe-purple/10 blur-3xl parallax-shape"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-1 bg-secondary rounded-full text-sm font-medium animate-fade-in">
          Exclusive Offer: Adobe Creative Cloud
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Unleash Your <span className="hero-text-gradient">Creative Potential</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Access the complete collection of 20+ creative desktop and mobile apps including Photoshop, Illustrator, and Premiere Pro with a 1-year subscription at our exclusive price.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => window.location.href = '#pricing'}
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '#features'}
          >
            Explore Features
          </Button>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto animate-fade-up overflow-hidden rounded-xl" style={{ animationDelay: '0.8s' }}>
          <AnimatedImage
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Adobe Creative Cloud apps interface"
            priority={true}
            animation="glow"
            className="w-full rounded-xl shadow-2xl border border-white/10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
