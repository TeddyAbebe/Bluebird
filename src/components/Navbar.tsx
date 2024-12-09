import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-primary-200">
              Home
            </a>
            <a href="#services" className="text-white hover:text-primary-200">
              Services
            </a>
            <a href="#about" className="text-white hover:text-primary-200">
              About
            </a>
            <a href="#gallery" className="text-white hover:text-primary-200">
              Gallery
            </a>
            <a href="#contact" className="text-white hover:text-primary-200">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <Phone className="h-5 w-5 text-white mr-2" />
            <span className="text-white">+1 (206) 313-2874</span>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-white hover:text-primary-200"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-white hover:text-primary-200"
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-white hover:text-primary-200"
              >
                About
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-white hover:text-primary-200"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white hover:text-primary-200"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
