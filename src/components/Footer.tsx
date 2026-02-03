import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-display text-3xl font-semibold text-primary-foreground">
                Maggie's
              </span>
              <span className="block text-sm tracking-[0.3em] uppercase text-gold font-medium">
                Beauty Salon
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              Where elegance meets expertise. Experience the art of beauty at
              Maggie's Salon, your destination for premium hair, skin, and nail
              services in Selma, California.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Booking', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                      className="text-primary-foreground/70 hover:text-gold transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-primary-foreground">
              Contact
            </h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>2332 Whitson St, Selma, CA 93662</li>
              <li> United States</li>
              <li className="pt-2">
                <a href="tel:+15598967753" className="hover:text-gold transition-colors">
                 +1(559)896-7753
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@maggiesbeauty.com"
                  className="hover:text-gold transition-colors"
                >
                  hello@maggiesbeauty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Maggie's Beauty Salon. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-gold fill-gold" /> in Selma, CA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
