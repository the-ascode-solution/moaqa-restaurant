import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

export default function Menu() {
  return (
    <div className="min-h-screen" data-testid="page-menu">
      <Navbar />
      <div className="pt-20">
        <MenuSection />
      </div>
      <Footer />
    </div>
  );
}
