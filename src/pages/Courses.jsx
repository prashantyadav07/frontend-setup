import { Star, Users, Clock } from 'lucide-react';

/**
 * Courses Page
 * 
 * Displays available courses with:
 * - Course cards with details
 * - Rating and enrollment information
 * - Call-to-action buttons
 */
export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Learn the basics of React, including components, hooks, and state management.',
      level: 'Beginner',
      duration: '4 weeks',
      students: 1250,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      description: 'Master advanced React patterns, performance optimization, and best practices.',
      level: 'Advanced',
      duration: '6 weeks',
      students: 580,
      rating: 4.9,
    },
    {
      id: 3,
      title: 'Tailwind CSS Mastery',
      description: 'Build beautiful, responsive UIs with Tailwind CSS. From basics to advanced techniques.',
      level: 'Intermediate',
      duration: '3 weeks',
      students: 890,
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Full-Stack Development',
      description: 'Complete guide to building full-stack applications with modern tools and practices.',
      level: 'Advanced',
      duration: '10 weeks',
      students: 420,
      rating: 4.9,
    },
    {
      id: 5,
      title: 'Web Design Principles',
      description: 'Learn design fundamentals, UX/UI best practices, and create compelling web experiences.',
      level: 'Beginner',
      duration: '5 weeks',
      students: 750,
      rating: 4.6,
    },
    {
      id: 6,
      title: 'JavaScript ES6+',
      description: 'Deep dive into modern JavaScript features and become a proficient JS developer.',
      level: 'Intermediate',
      duration: '4 weeks',
      students: 1100,
      rating: 4.8,
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our comprehensive selection of courses designed to boost your skills and advance your career.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Course Header Image */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-semibold">Course Image</span>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold text-gray-900">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {course.description}
                </p>

                {/* Course Meta Information */}
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
