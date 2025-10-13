'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TalantaHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-[#01435d] shadow-lg z-50">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex  md:items-center">
            <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
              <Image src="/logo.png" alt='Talanta Logo' width={40} height={40} className='rounded-full' />
              <span className="text-white font-bold text-lg hidden sm:block">Talanta Craftcode Music & Art Space</span>
            </Link>
            <a
              href="tel:0794943791"
              className="md:hidden flex items-center space-x-1 text-white text-sm mt-1"
            >
              <span>📞</span>
              <span>0794 943 791</span>
            </a>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/courses" className="flex items-center space-x-1 text-white hover:text-[#f06723] font-medium transition-colors py-2">
                <span>Courses</span>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </Link>
              <div className="absolute left-0 right-0 h-0.5 bg-[#f06723] opacity-0 group-hover:opacity-100 transition-opacity -bottom-1"></div>
            </div>

            <div className="relative group">
              <Link href="/about-us" className="flex items-center space-x-1 text-white hover:text-[#f06723] font-medium transition-colors py-2">
                <span>About Us</span>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </Link>
              <div className="absolute left-0 right-0 h-0.5 bg-[#f06723] opacity-0 group-hover:opacity-100 transition-opacity -bottom-1"></div>
            </div>

            <div className="relative group">
              <Link href="/selling" className="flex items-center space-x-1 text-white hover:text-[#f06723] font-medium transition-colors py-2">
                <span>Store</span>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </Link>
              <div className="absolute left-0 right-0 h-0.5 bg-[#f06723] opacity-0 group-hover:opacity-100 transition-opacity -bottom-1"></div>
            </div>

            <Link
              href="/contact"
              className="text-white hover:text-[#f06723] font-medium transition-colors py-2"
            >
              Contact Us
            </Link>

            <a
              href="tel:0794943791"
              className="flex items-center space-x-1 text-white hover:text-[#f06723] font-medium transition-colors py-2"
            >
              <span>📞</span>
              <span>0794 943 791</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-[#f06723] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#01435d] border-t border-gray-700">
            <nav className="px-4 py-4 space-y-2">
              <Link
                href="/courses"
                className="block text-white hover:text-[#f06723] font-medium py-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Courses
              </Link>
              <Link
                href="/about-us"
                className="block text-white hover:text-[#f06723] font-medium py-2 transition-colors"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link
                href="/selling"
                className="block text-white hover:text-[#f06723] font-medium py-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Store
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-[#f06723] font-medium py-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
              <a
                href="tel:0794943791"
                className="block text-white hover:text-[#f06723] font-medium py-2 transition-colors"
                onClick={closeMobileMenu}
              >
                📞 0794 943 791
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default TalantaHeader;