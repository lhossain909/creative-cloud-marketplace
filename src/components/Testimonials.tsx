
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Creative Cloud has transformed my workflow. Having all the tools in one subscription has made my design process so much smoother.",
    author: "Alex Morgan",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The integration between apps is seamless. I can start a project in Photoshop and easily continue in Illustrator without any issues.",
    author: "Jamie Chen",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "As a photographer, having Lightroom and Photoshop in one subscription is a game-changer. I couldn't imagine my workflow without them.",
    author: "Michael Roberts",
    role: "Professional Photographer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The cloud storage and font access alone are worth it. Combined with the best creative tools in the industry, it's an unbeatable package.",
    author: "Sarah Johnson",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonialCards = entry.target.querySelectorAll('.testimonial-card');
            testimonialCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-8');
                card.classList.add('opacity-100', 'translate-y-0');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from creative professionals who've transformed their workflow with Adobe Creative Cloud.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "testimonial-card bg-background rounded-2xl p-6 shadow-sm border border-border opacity-0 translate-y-8 transition-all duration-500 ease-out",
                index % 2 === 1 && "md:mt-8"
              )}
            >
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33334 21.3333C7.86667 21.3333 6.61334 20.8 5.57334 19.7333C4.53334 18.6667 4.00001 17.4 4.00001 15.9333C4.00001 14.6 4.37334 13.2667 5.12001 11.9333C5.86667 10.6 7.06667 9.26666 8.72001 7.93333L12 11.2C11.2 11.7333 10.5067 12.2667 9.92001 12.8C9.33334 13.3333 9.04001 13.8667 9.04001 14.4C9.04001 14.6667 9.12001 14.9333 9.28001 15.2C9.44001 15.4667 9.70667 15.6 10.08 15.6C11.0667 15.6 11.84 15.9333 12.4 16.6C12.96 17.2667 13.24 18.0667 13.24 19C13.24 19.9333 12.9067 20.7333 12.24 21.4C11.5733 22.0667 10.5733 21.3333 9.33334 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6133 20.8 17.5733 19.7333C16.5333 18.6667 16 17.4 16 15.9333C16 14.6 16.3733 13.2667 17.12 11.9333C17.8667 10.6 19.0667 9.26666 20.72 7.93333L24 11.2C23.2 11.7333 22.5067 12.2667 21.92 12.8C21.3333 13.3333 21.04 13.8667 21.04 14.4C21.04 14.6667 21.12 14.9333 21.28 15.2C21.44 15.4667 21.7067 15.6 22.08 15.6C23.0667 15.6 23.84 15.9333 24.4 16.6C24.96 17.2667 25.24 18.0667 25.24 19C25.24 19.9333 24.9067 20.7333 24.24 21.4C23.5733 22.0667 22.5733 21.3333 21.3333 21.3333Z" fill="rgba(250, 15, 0, 0.2)"/>
                </svg>
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
