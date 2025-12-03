import chefImage from '@assets/generated_images/professional_chef_portrait.png';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-background" data-testid="section-about">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              A Passion for Culinary Excellence
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 2010, SpiceHub has become a beacon of culinary innovation in the heart of the city. 
              Our journey began with a simple vision: to create a dining experience that transcends borders 
              and brings the world's finest cuisines to your table.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Under the masterful guidance of Chef Alessandro Romano, our kitchen has become a laboratory 
              of flavors where Mediterranean warmth meets Asian precision, and European classics are 
              reimagined with contemporary flair.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every ingredient is sourced with care, every dish crafted with passion, and every guest 
              treated like family. This is not just dining—this is an experience.
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-muted-foreground">Years of Excellence</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">50K+</span>
                <span className="text-sm text-muted-foreground">Happy Guests</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">100+</span>
                <span className="text-sm text-muted-foreground">Signature Dishes</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src={chefImage}
                alt="Chef Alessandro Romano"
                className="w-full rounded-md object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-md p-4">
                <p className="font-serif text-lg font-semibold text-foreground">Chef Alessandro Romano</p>
                <p className="text-sm text-muted-foreground">Executive Chef & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
