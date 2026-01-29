import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Page
 * 
 * Contact form and contact information with:
 * - Contact form with validation
 * - Contact information display
 * - Multiple ways to get in touch
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-blue-600" />,
      label: 'Email',
      value: 'hello@example.com',
    },
    {
      icon: <Phone size={24} className="text-blue-600" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: <MapPin size={24} className="text-blue-600" />,
      label: 'Address',
      value: '123 Main Street, City, State 12345',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Have a question or want to work with us? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {info.label}
                    </h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-semibold">Success!</p>
                  <p>Thank you for your message. We'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
