import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#01435d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Talanta Logo" width={40} height={40} className="rounded-full" />
              <span className="text-xl font-bold">Talanta Music & Art Space</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering aspiring musicians and artists through comprehensive education and creative expression.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.609.043 6.298.099c-1.31.057-2.205.278-2.99.595C2.547.99 1.734 1.306 1.02 1.623.31 1.94 0 2.256 0 2.572v18.856c0 .316.31.632.62.949.71.317 1.524.633 2.37.95.785.317 1.68.538 2.99.595 1.311.057 2.098.099 5.719.099s4.408-.042 5.719-.099c1.31-.057 2.205-.278 2.99-.595.846-.317 1.66-.633 2.37-.95.31-.317.62-.633.62-.949V2.572c0-.316-.31-.632-.62-.949-.71-.317-1.524-.633-2.37-.95-.785-.317-1.68-.538-2.99-.595C16.425.043 15.638 0 12.017 0zM9.927 5.695c.948 0 1.693.745 1.693 1.693s-.745 1.693-1.693 1.693-1.693-.745-1.693-1.693.745-1.693 1.693-1.693zm6.23 8.23c-.082.166-.25.25-.416.168-.166-.082-.25-.25-.168-.416l.418-1.668c.082-.166.25-.25.416-.168.166.082.25.25.168.416l-.418 1.668zm-3.115-8.23c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3.115 8.23l-.418-1.668c-.082-.166.002-.334.168-.416.166-.082.334.002.416.168l.418 1.668c.082.166-.002.334-.168.416-.166.082-.334-.002-.416-.168z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[#f06723] transition-colors">Home</Link></li>
              <li><Link href="/courses" className="text-gray-300 hover:text-[#f06723] transition-colors">Courses</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#f06723] transition-colors">About Us</Link></li>
              <li><Link href="/selling" className="text-gray-300 hover:text-[#f06723] transition-colors">Store</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#f06723] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors">School Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors">Individual Coaching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors">Music Theory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors">Art Workshops</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors">Summer Camps</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f06723]"
              />
              <button
                type="submit"
                className="w-full bg-[#f06723] text-white px-4 py-2 rounded-md hover:bg-[#d55a1f] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Talanta Music and Art Space. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-[#f06723] transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;