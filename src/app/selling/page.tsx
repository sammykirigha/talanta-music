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
    name: 'Acoustic Guitar',
    description: 'High-quality acoustic guitar perfect for beginners and professionals alike.',
    price: 'KSh 25,000',
    image: '/guitar.jpg',
    alt: 'Acoustic guitar for sale',
  },
  {
    id: 2,
    name: 'Digital Piano',
    description: '88-key digital piano with weighted keys and multiple sound options.',
    price: 'KSh 45,000',
    image: '/image-11.avif',
    alt: 'Digital piano instrument',
  },
  {
    id: 3,
    name: 'Drum Set',
    description: 'Complete 5-piece drum set with cymbals, ideal for practice and performance.',
    price: 'KSh 35,000',
    image: '/image-12.avif',
    alt: 'Drum set for musicians',
  },
  {
    id: 4,
    name: 'Electric Guitar',
    description: 'Solid body electric guitar with humbucker pickups for rock and blues.',
    price: 'KSh 30,000',
    image: '/image-13.avif',
    alt: 'Electric guitar',
  },
  {
    id: 5,
    name: 'Violin',
    description: 'Handcrafted violin with rich tone, suitable for classical music.',
    price: 'KSh 20,000',
    image: '/image-14.avif',
    alt: 'Violin instrument',
  },
  {
    id: 6,
    name: 'Saxophone',
    description: 'Alto saxophone in brass finish, great for jazz and contemporary music.',
    price: 'KSh 40,000',
    image: '/image-15.jpg',
    alt: 'Saxophone for sale',
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
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative h-48">
                  <Image
                    src={instrument.image}
                    alt={instrument.alt}
                    fill
                    className="object-cover"
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
                    className="w-full bg-[#f06723] text-white px-4 py-2 rounded-md hover:bg-[#d55a1f] transition-colors text-center block"
                  >
                    Contact for More Info
                  </Link>
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