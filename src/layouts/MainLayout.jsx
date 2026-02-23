import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';

/**
 * MainLayout Component
 * 
 * Provides a consistent layout wrapper for all pages.
 * Includes:
 * - Navbar (persistent across all pages)
 * - Main content area (Outlet renders the current page)
 * - Optional: Footer, Sidebar, or other shared UI components
 * 
 * This pattern ensures DRY (Don't Repeat Yourself) principle
 * and maintains UI consistency across the entire application.
 */
export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar - persistent across all pages */}
      <Navbar />

      {/* Main content area - renders the current page */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
