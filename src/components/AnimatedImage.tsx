
import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  animation?: 'fade-in' | 'fade-up' | 'glow' | 'none';
  threshold?: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  animation = 'fade-in',
  threshold = 0.1
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity duration-500 ease-in-out',
    'fade-up': 'opacity-0 translate-y-4 transition-all duration-700 ease-out',
    'glow': 'animate-image-glow',
    'none': ''
  };

  return (
    <div className="relative overflow-hidden" ref={imgRef}>
      <img
        src={isInView ? src : ''}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        className={cn(
          "transition-all",
          animation !== 'none' && !isLoaded && animationClasses[animation],
          isLoaded && animation === 'fade-in' && 'opacity-100',
          isLoaded && animation === 'fade-up' && 'opacity-100 translate-y-0',
          className
        )}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-md"></div>
      )}
    </div>
  );
};

export default AnimatedImage;
