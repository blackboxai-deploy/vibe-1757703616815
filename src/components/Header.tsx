"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Uber
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-gray-300 transition-colors">
              Company
            </a>
            <a href="#safety" className="hover:text-gray-300 transition-colors">
              Safety
            </a>
            <a href="#help" className="hover:text-gray-300 transition-colors">
              Help
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-black hover:bg-white">
              Log in
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="hover:text-gray-300 transition-colors">
                Company
              </a>
              <a href="#safety" className="hover:text-gray-300 transition-colors">
                Safety
              </a>
              <a href="#help" className="hover:text-gray-300 transition-colors">
                Help
              </a>
              <div className="flex flex-col space-y-2 mt-4">
                <Button variant="ghost" className="text-white hover:text-black hover:bg-white justify-start">
                  Log in
                </Button>
                <Button className="bg-white text-black hover:bg-gray-200 justify-start">
                  Sign up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}