import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

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
              <Link href="https://www.facebook.com/share/1FBSjF42pz/" target='_blank' className="text-gray-300 hover:text-[#f06723] transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook  className='text-[#f06723] text-2xl'/>
              </Link>
              <Link href="https://www.youtube.com/@TalantaMusicSpace" target='_blank' className="text-gray-300 hover:text-[#f06723] transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className='text-[#f06723] text-2xl' />
              </Link>
              <Link href="https://www.tiktok.com/@talanta_music?_t=ZM-906b10dkMjD&_r=1" target='_blank' className="text-gray-300 hover:text-[#f06723] transition-colors">
                <span className="sr-only">YouTube</span>
               <FaTiktok className='text-[#f06723] text-2xl' />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[#f06723] transition-colors">Home</Link></li>
              <li><Link href="/courses" className="text-gray-300 hover:text-[#f06723] transition-colors">Courses</Link></li>
              <li><Link href="/about-us" className="text-gray-300 hover:text-[#f06723] transition-colors">About Us</Link></li>
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
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-gray-300 text-sm">
              © 2025 Talanta Music and Art Space. All rights reserved.
            </p>
            <a
              href="https://www.mcdorcis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#f06723] transition-colors text-sm"
            >
              Designed and developed by McDorcis Solutions
            </a>
          </div>
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