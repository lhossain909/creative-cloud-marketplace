
import React, { useState } from 'react';
import Button from './Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  "All 20+ creative desktop and mobile apps",
  "100GB of cloud storage",
  "Thousands of Adobe fonts",
  "Adobe Portfolio",
  "Adobe Behance",
  "Premium templates and assets"
];

const Pricing: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16 text-balance">
          Get access to the complete Creative Cloud suite with our exclusive 1-year subscription offer.
        </p>

        <div 
          className={`relative max-w-xl mx-auto rounded-2xl overflow-hidden transition-all duration-500 ${
            isHovered ? 'shadow-xl transform scale-[1.02]' : 'shadow-md'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background gradient effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-adobe-red to-adobe-blue opacity-20 blur-xl"></div>
          
          <div className="relative bg-card border border-border p-8 md:p-10 rounded-2xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-adobe-red text-white px-4 py-1 rounded-full text-sm font-medium">
              Limited Time Offer
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 pt-3">
              <div className="text-left md:pr-8">
                <h3 className="text-2xl font-bold">Adobe Creative Cloud</h3>
                <p className="text-muted-foreground">Complete plan - 1 year subscription</p>
              </div>
              
              <div className="mt-4 md:mt-0 md:text-right">
                <div className="text-sm text-muted-foreground mb-1">
                  <span className="line-through">$599.88/year</span>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold">$479.88</span>
                  <span className="text-muted-foreground ml-2">/year</span>
                </div>
                <div className="text-sm text-primary font-medium">Save $120 (20% off)</div>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/purchase">
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth
                className={`transition-all duration-300 ${
                  isHovered ? 'bg-primary shadow-lg shadow-primary/20' : ''
                }`}
              >
                Get Your Subscription
              </Button>
            </Link>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Automatic renewal applies. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
