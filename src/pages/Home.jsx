import { ArrowRight, Code, Zap, Users } from 'lucide-react';

/**
 * Home Page
 * 
 * Landing page of the application with:
 * - Hero section with CTA
 * - Features showcase
 * - Clean, professional design
 */
export default function Home() {
  const features = [
    {
      icon: <Code size={32} className="text-blue-600" />,
      title: 'Modern Technology',
      description: 'Built with React, Tailwind CSS, and industry best practices.',
    },
    {
      icon: <Zap size={32} className="text-blue-600" />,
      title: 'Fast & Responsive',
      description: 'Lightning-fast performance optimized for all devices.',
    },
    {
      icon: <Users size={32} className="text-blue-600" />,
      title: 'User-Focused',
      description: 'Designed with accessibility and user experience in mind.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A modern, scalable foundation for building professional web applications.
            Clean architecture, best practices, and industry-standard patterns.
          </p>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Started
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our courses and services to take your skills to the next level.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
