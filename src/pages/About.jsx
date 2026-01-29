import { CheckCircle } from 'lucide-react';

/**
 * About Page
 * 
 * Information about the company/platform with:
 * - Mission and vision
 * - Core values
 * - Team information
 */
export default function About() {
  const values = [
    'Excellence in code quality and design',
    'User-centric approach to development',
    'Continuous learning and improvement',
    'Transparency and open communication',
    'Scalable and maintainable solutions',
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover our mission, values, and commitment to building exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe in creating clean, scalable, and professional web solutions that empower businesses
              to thrive in the digital age. Our mission is to provide industry-standard architecture and best practices
              that serve as a solid foundation for modern web applications.
            </p>
            <p className="text-lg text-gray-600">
              Every project we undertake reflects our commitment to excellence, innovation, and user satisfaction.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg h-64 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Visual Content</span>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Team
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Our dedicated team of professionals brings together expertise in design, development, and digital strategy.
          We are passionate about creating solutions that make a difference.
        </p>
      </section>
    </div>
  );
}
