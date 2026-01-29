import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Courses from '@/pages/Courses';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

/**
 * AppRoutes Component
 * 
 * Centralized route configuration for the entire application.
 * Defines all page routes and uses MainLayout as a wrapper
 * to provide consistent layout (Navbar, Footer, etc.) across pages.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
