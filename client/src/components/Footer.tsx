import { Link } from 'wouter';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">SpiceHub</h3>
            <p className="text-muted-foreground text-sm mb-4 max-w-xs">
              Experience the finest multi-cuisine dining where traditional recipes meet modern innovation.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted hover-elevate"
                data-testid="link-social-facebook"
              >
                <SiFacebook className="h-4 w-4 text-foreground" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted hover-elevate"
                data-testid="link-social-instagram"
              >
                <SiInstagram className="h-4 w-4 text-foreground" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted hover-elevate"
                data-testid="link-social-x"
              >
                <SiX className="h-4 w-4 text-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-muted-foreground text-sm hover:text-primary cursor-pointer transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Culinary Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@spicehub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} SpiceHub Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
