import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import MainLayout from '@/layouts/MainLayout';

const Home = React.lazy(() => import('@/pages/Home'));
const About = React.lazy(() => import('@/pages/About'));
const Courses = React.lazy(() => import('@/pages/Courses'));
const Contact = React.lazy(() => import('@/pages/Contact'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const Ourprojects = React.lazy(() => import('@/pages/Ourprojects'));
const Investment = React.lazy(() => import('@/pages/Investment'));

/**
 * AppRoutes Component
 * 
 * Centralized route configuration for the entire application.
 * Defines all page routes and uses MainLayout as a wrapper
 * to provide consistent layout (Navbar, Footer, etc.) across pages.
 */
export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ourproject" element={<Ourprojects />} />
          <Route path="investment" element={<Investment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
