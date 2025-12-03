import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import heroImage from '@assets/generated_images/elegant_restaurant_interior_ambiance.png';

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          SpiceHub
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
          A Culinary Journey Across Continents
        </p>
        <p className="text-base md:text-lg text-white/75 mb-8 max-w-2xl mx-auto">
          Experience the finest multi-cuisine dining where traditional recipes meet modern innovation.
          Every dish tells a story of passion and perfection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu">
            <Button size="lg" className="text-lg px-8" data-testid="button-view-menu">
              View Menu
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-reserve-table"
            >
              Reserve a Table
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
