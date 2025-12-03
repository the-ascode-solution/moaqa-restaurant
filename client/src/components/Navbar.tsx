import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location === '/';
  const bgClass = scrolled || !isHome
    ? 'bg-background/95 backdrop-blur-md border-b border-border'
    : 'bg-transparent';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-home-logo">
            <span className={`font-serif text-2xl md:text-3xl font-bold cursor-pointer ${
              scrolled || !isHome ? 'text-foreground' : 'text-white'
            }`}>
              SpiceHub
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium cursor-pointer transition-colors ${
                    location === link.href
                      ? 'text-primary'
                      : scrolled || !isHome
                        ? 'text-foreground hover:text-primary'
                        : 'text-white/90 hover:text-white'
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/admin">
              <Button variant="outline" size="sm" data-testid="button-admin-login">
                Admin
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" data-testid="button-mobile-menu">
                  <Menu className={`h-6 w-6 ${scrolled || !isHome ? 'text-foreground' : 'text-white'}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span
                        onClick={() => setMobileOpen(false)}
                        className={`text-lg font-medium cursor-pointer ${
                          location === link.href ? 'text-primary' : 'text-foreground'
                        }`}
                        data-testid={`link-mobile-${link.label.toLowerCase()}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                  <Link href="/admin">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setMobileOpen(false)}
                      data-testid="button-mobile-admin"
                    >
                      Admin Login
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
