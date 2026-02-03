import { motion } from 'framer-motion';
import { Scissors, Sparkles, Hand, Palette, Flower2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Scissors,
    name: 'Hair Styling',
    description: 'Expert cuts, styling, and treatments for all hair types. From classic looks to modern trends.',
    services: ['Haircuts & Styling', 'Blowouts', 'Updos & Bridal', 'Keratin Treatments'],
    price: 'From $45',
  },
  {
    icon: Palette,
    name: 'Hair Coloring',
    description: 'Transform your look with professional coloring services using premium products.',
    services: ['Full Color', 'Balayage & Highlights', 'Color Correction', 'Gloss Treatments'],
    price: 'From $85',
  },
  {
    icon: Sparkles,
    name: 'Facials & Skincare',
    description: 'Rejuvenating facial treatments tailored to your skin type for a radiant glow.',
    services: ['Deep Cleansing Facial', 'Anti-Aging Treatment', 'Hydrating Facial', 'Microdermabrasion'],
    price: 'From $75',
  },
  {
    icon: Hand,
    name: 'Manicure & Pedicure',
    description: 'Luxurious nail care services with the finest polishes and meticulous attention to detail.',
    services: ['Classic Manicure', 'Gel Polish', 'Spa Pedicure', 'Nail Art'],
    price: 'From $35',
  },
  {
    icon: Heart,
    name: 'Makeup Services',
    description: 'Professional makeup application for any occasion, from natural looks to glamorous evening styles.',
    services: ['Bridal Makeup', 'Special Occasion', 'Makeup Lessons', 'Lash Extensions'],
    price: 'From $65',
  },
  {
    icon: Flower2,
    name: 'Spa Treatments',
    description: 'Indulge in relaxing spa services designed to pamper your body and soothe your soul.',
    services: ['Swedish Massage', 'Hot Stone Therapy', 'Body Wraps', 'Aromatherapy'],
    price: 'From $95',
  },
];

const Services = () => {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-champagne/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Our Services
          </h2>
          <div className="decorative-line mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            From head to toe, we offer a complete range of beauty services to help
            you look and feel your absolute best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-champagne flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {service.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.services.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-display text-xl font-semibold text-gold">
                  {service.price}
                </span>
                <Button
                  variant="elegant"
                  size="sm"
                  onClick={scrollToBooking}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? We offer custom packages tailored to your needs.
          </p>
          <Button variant="gold" size="lg" onClick={scrollToBooking}>
            View All Services & Pricing
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
