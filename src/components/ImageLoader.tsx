import React, { useState, useEffect } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  blur?: string;
}

export function ImageLoader({ src, alt, className = '', blur }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className="relative overflow-hidden">
      {isLoading && blur && (
        <div
          className="absolute inset-0 blur-lg transform scale-110"
          style={{
            backgroundImage: `url(${blur})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading="lazy"
      />
    </div>
  );
}