import React, { useState } from "react";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  className = "",
  width = 400,
  height = 300,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Blurred Placeholder */}
      {isLoading && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            filter: "blur(20px)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${src})`,
          }}
        ></div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
