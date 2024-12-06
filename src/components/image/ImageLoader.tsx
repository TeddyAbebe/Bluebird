import React, { useState, useEffect } from 'react';
import { generateBlurHash } from '../../utils/imageHelpers';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function ImageLoader({ src, alt, className = '', width = 400, height = 300 }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [blurDataUrl, setBlurDataUrl] = useState<string>('');

  useEffect(() => {
    setBlurDataUrl(generateBlurHash(width, height));
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
  }, [src, width, height]);

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div
          className="absolute inset-0 blur-lg transform scale-110"
          style={{
            backgroundImage: `url(${blurDataUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading="lazy"
      />
    </div>
  );
}