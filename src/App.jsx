import AppRoutes from '@/routes/AppRoutes';
import ScrollToTop from '@/components/ScrollToTop';

/**
 * App Component
 * 
 * Root component that wraps the entire application.
 * Provides routing configuration and global layout structure.
 */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}
