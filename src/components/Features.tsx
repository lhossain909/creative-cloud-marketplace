
import React, { useRef, useEffect } from 'react';
import AnimatedImage from './AnimatedImage';
import { Check } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Photoshop",
    description: "Edit, composite, and create beautiful images, graphics, and art.",
    icon: "https://www.adobe.com/content/dam/cc/icons/photoshop.svg"
  },
  {
    title: "Illustrator",
    description: "Create beautiful vector graphics and illustrations.",
    icon: "https://www.adobe.com/content/dam/cc/icons/illustrator.svg" 
  },
  {
    title: "Premiere Pro",
    description: "Edit video with the industry-leading video editing software.",
    icon: "https://www.adobe.com/content/dam/cc/icons/premiere.svg"
  },
  {
    title: "After Effects",
    description: "Create motion graphics and visual effects for film and video.",
    icon: "https://www.adobe.com/content/dam/cc/icons/aftereffects.svg"
  },
  {
    title: "InDesign",
    description: "Design and publish elegant layouts for print and digital.",
    icon: "https://www.adobe.com/content/dam/cc/icons/indesign.svg"
  },
  {
    title: "XD",
    description: "Design, prototype, and share user experiences for web and mobile.",
    icon: "https://www.adobe.com/content/dam/cc/icons/xd.svg"
  }
];

const additionalBenefits = [
  "100GB of cloud storage",
  "Thousands of Adobe fonts",
  "Adobe Portfolio",
  "Adobe Behance",
  "Premium templates and assets",
  "Guided tutorials and learning resources"
];

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.feature-card');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-8');
                el.classList.add('opacity-100', 'translate-y-0');
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Creative Tools for Every Project</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Access the entire collection of 20+ creative desktop and mobile apps with your subscription.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-background rounded-2xl p-6 shadow-sm border border-border opacity-0 translate-y-8 transition-all duration-500 ease-out"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-8 h-8" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Everything You Need in One Subscription</h3>
            <p className="text-muted-foreground mb-8">
              Your Creative Cloud subscription includes much more than just apps. Get cloud storage, thousands of fonts, and premium resources to supercharge your creativity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/5 rounded-2xl"></div>
            <AnimatedImage
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Creative workspace with Adobe apps"
              animation="fade-in"
              className="rounded-2xl shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
