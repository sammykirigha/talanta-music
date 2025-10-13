import type { Metadata } from 'next';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About Us | Talanta Craftcode Music and Art Space',
  description: 'Learn about Talanta Craftcode Music and Art Space - our story, vision, values, and commitment to nurturing musical talents and artistic expression.',
  keywords: 'about Talanta, music education, art space, mission, vision, team',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#01435d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Talanta Craftcode Music and Art Space
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering aspiring musicians and artists through comprehensive education and creative expression.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At Talanta Craftcode Music and Art Space, our mission is to foster creativity and skill development
                in music and visual arts. We believe that everyone has the potential to create and express
                themselves through artistic mediums.
              </p>
              <p className="text-lg text-gray-600">
                Through personalized instruction, collaborative projects, and a supportive community,
                we help individuals of all ages and skill levels discover their passion and unlock their talents.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/image-6.avif"
                alt="Music and art collaboration at Talanta"
                fill
                className="object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our approach to music and art education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#f06723] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in education and artistic expression.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#f06723] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                Building a supportive environment where creativity thrives.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#f06723] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Embracing new approaches to learning and artistic exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate educators and artists dedicated to your creative journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/founder.jpg"
                  alt="Founder and Music Director"
                  fill
                  className="object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hilary Mwambela</h3>
              <p className="text-[#f06723] font-medium mb-2">Founder & Music Director</p>
              <p className="text-gray-600 text-sm">
                Expert in classical and contemporary music instruction with 15+ years experience.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                  <FaUser className="w-20 h-20 text-gray-300 rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jeremy Kimani</h3>
              <p className="text-[#f06723] font-medium mb-2">Drums/ Percussion instruments</p>
              <p className="text-gray-600 text-sm">
                Skilled in various percussion styles, bringing rhythm and energy to our programs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                 <FaUser className="w-20 h-20 text-gray-300 rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hamilton Wamola</h3>
              <p className="text-[#f06723] font-medium mb-2">Piano, Guitars </p>
              <p className="text-gray-600 text-sm">
                Versatile musician with expertise in piano and guitar, inspiring students of all levels.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                  <FaUser className="w-20 h-20 text-gray-300 rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Moses Mwazighe</h3>
              <p className="text-[#f06723] font-medium mb-2">Guitar and Piano  </p>
              <p className="text-gray-600 text-sm">
                Experienced in teaching guitar and piano, fostering musical growth and creativity.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                  <FaUser className="w-20 h-20 text-gray-300 rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Victor Aguma</h3>
              <p className="text-[#f06723] font-medium mb-2">Piano and Voice</p>
              <p className="text-gray-600 text-sm">
                Dedicated to vocal training and piano instruction, helping students find their unique sound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/image-10.avif"
                alt="Talanta Craftcode Music and Art Space history"
                fill
                className="object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our History
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2020, Talanta Craftcode Music and Art Space began as a small community initiative
                to provide accessible music education. Over the years, we&#39;ve grown into a comprehensive
                center for artistic development.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Today, we serve hundreds of students annually, offering programs that blend traditional
                techniques with modern approaches to creativity.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence and community has made us a cornerstone of artistic
                education in the region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}