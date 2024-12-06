import React from 'react';
import { images } from '../utils/images';

export function Video() {
  return (
    <section className="py-20 bg-white" id="video">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">Take a Tour</h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Experience the warmth and comfort of our adult family home
          </p>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://drive.google.com/file/d/1lKKYPyGhmMIivddNvXSbI4OGH8YJRGo9/preview"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-[600px]"
          ></iframe>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.gallery.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[250px] object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-display text-xl font-semibold text-center px-4">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}