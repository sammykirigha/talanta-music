import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Musical Instruments | Talanta Music and Art Space',
  description: 'Browse our selection of quality musical instruments. From guitars to keyboards, find the perfect instrument for your musical journey.',
  keywords: 'musical instruments, guitars, pianos, drums, buy instruments, music store',
};

const instruments = [
  {
    id: 1,
    name: 'PSR 283 Digital Keyboard',
    description: '88-key digital keyboard with multiple sound options and power adaptor included.',
    price: 'KES 50,000',
    image: '/store/piano.jpg',
    alt: 'PSR 283 Digital Keyboard',
  },
  {
    id: 2,
    name: 'PSR E360 Digital Keyboard',
    description: 'Portable digital keyboard with 61 keys and power adaptor included.',
    price: 'KES 26,000',
    image: '/store/piano-2.jpg',
    alt: 'PSR E360 Digital Keyboard',
  },
  {
    id: 3,
    name: 'Drums Set',
    description: 'Advanced digital keyboard with 61 keys and power adaptor included.',
    price: 'KES 50,000',
    image: '/store/drumset.jpg',
    alt: 'Drums Set',
  },
  {
    id: 4,
    name: 'Saxophone',
    description: 'Yamaha YAS-280 Alto Saxophone, perfect for beginners and intermediate players.',
    price: 'KES 107,000',
    image: '/store/saxophone.jpg',
    alt: 'PSR SX600 Digital Keyboard',
  },
  {
    id: 5,
    name: 'Maple Leaf Violin',
    description: 'Handcrafted violin with rich tone, suitable for classical music.',
    price: 'KES 12,000',
    image: '/store/violin.jpg',
    alt: 'Maple Leaf Violin',
  },
  {
    id: 7,
    name: 'Classical Guitars',
    description: 'High-quality Classical Guitars perfect for beginners and professionals.',
    price: 'KES 25,000',
    image: '/store/guitar-2.jpg',
    alt: 'Classical Guitars',
  },
  {
    id: 8,
    name: 'Electric Guitar',
    description: 'Solid body electric guitar with humbucker pickups for rock and blues.',
    price: 'KES 30,000',
    image: '/store/guiter-3.jpg',
    alt: 'Electric Guitar',
  },
  {
    id: 9,
    name: 'Studio Headphones',
    description: 'Professional studio headphones for clear sound monitoring and music production.',
    price: 'KES 4,500',
    image: '/store/headphones.jpg',
    alt: 'Studio Headphones',
  },
];

export default function SellingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#01435d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Musical Instruments Store
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover premium musical instruments to fuel your passion and enhance your musical journey.
          </p>
        </div>
      </section>

      {/* Instruments Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Instruments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Carefully selected instruments for musicians of all levels. Quality, affordability, and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instruments.map((instrument) => (
              <div
                key={instrument.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative h-64 w-full p-1">
                  <Image
                    src={instrument.image}
                    alt={instrument.alt}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" itemProp="name">
                    {instrument.name}
                  </h3>
                  <p className="text-gray-600 mb-4" itemProp="description">
                    {instrument.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-[#f06723]" itemProp="price">
                      {instrument.price}
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-[#f06723] text-white px-4 py-2 rounded-md hover:bg-[#d55a1f] transition-colors text-center block group-hover:hidden"
                  >
                    Contact for More Info
                  </Link>
                  <div className="hidden group-hover:block p-4 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Phone:</strong> 0794 943 791 / 0703 26 34 34
                      <a href="https://wa.me/254794943791" target="_blank" rel="noopener noreferrer" className="ml-2 text-green-600 hover:text-green-800">
                        📱 WhatsApp
                      </a>
                    </p>
                    <p className="text-sm text-gray-700"><strong>Email:</strong> talantaschool.arts@gmail.com</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Your Perfect Instrument?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help you choose the right instrument and answer any questions you may have.
          </p>
          <Link
            href="/contact"
            className="bg-[#f06723] text-white px-8 py-3 rounded-md hover:bg-[#d55a1f] transition-colors text-lg font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}