import Navbar from '@/components/Navbar';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

export default function Reviews() {
  return (
    <div className="min-h-screen" data-testid="page-reviews">
      <Navbar />
      <div className="pt-20">
        <ReviewsSection />
      </div>
      <Footer />
    </div>
  );
}
