import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
