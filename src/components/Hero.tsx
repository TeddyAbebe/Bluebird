import React from 'react';
import { Heart, Phone } from 'lucide-react';
import { images } from '../utils/images';

export function Hero() {
  return (
    <div className="relative bg-white pt-16" id="home">
      <div className="h-[600px] bg-cover bg-center" style={{
        backgroundImage: `url("${images.hero}")`
      }}>
        <div className="absolute inset-0 bg-primary-900 bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Welcome to Bluebird Millcreek
              </h1>
              <p className="font-sans text-xl md:text-2xl mb-8 leading-relaxed">
                Providing compassionate care and a warm, nurturing environment in Mill Creek, WA
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="tel:4252256227"
                  className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg flex items-center justify-center font-semibold transition-colors duration-200"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (425) 225-6227
                </a>
                <a 
                  href="#contact"
                  className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 flex items-center justify-center font-semibold transition-all duration-200"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Schedule a Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}