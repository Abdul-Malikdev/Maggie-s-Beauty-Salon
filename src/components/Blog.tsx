import { motion } from 'framer-motion';
import { ArrowRight, Tag, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: '5 Summer Hair Care Tips for Healthy, Gorgeous Locks',
    excerpt:
      'Keep your hair looking fabulous all summer with these expert tips on protection, hydration, and styling.',
    category: 'Hair Care',
    date: 'Feb 1, 2026',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'The Ultimate Skincare Routine for Glowing Skin',
    excerpt:
      'Discover the perfect morning and evening skincare routine recommended by our aestheticians.',
    category: 'Skincare',
    date: 'Jan 28, 2026',
    image:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop',
  },
];

const offers = [
  {
    id: 1,
    title: 'New Client Special',
    description: '20% off your first visit',
    code: 'WELCOME20',
    validUntil: 'March 31, 2026',
  },
  {
    id: 2,
    title: 'Bridal Package',
    description: 'Complete bridal beauty package starting at $499',
    code: 'BRIDE2026',
    validUntil: 'December 31, 2026',
  },
  {
    id: 3,
    title: 'Refer a Friend',
    description: 'Get $25 credit when you refer a friend',
    code: 'FRIEND25',
    validUntil: 'Ongoing',
  },
];

const Blog = () => {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="py-20 lg:py-32 bg-background">
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
            Tips & Offers
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Beauty Blog & Promotions
          </h2>
          <div className="decorative-line mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Latest Beauty Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-primary-foreground text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      {post.date}
                    </p>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <button className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Offers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-gold" />
              Current Offers
            </h3>
            <div className="space-y-4">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-champagne/50 rounded-xl p-6 border border-gold/20"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Tag className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground">
                        {offer.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {offer.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gold/20">
                    <span className="text-xs text-muted-foreground">
                      Valid until: {offer.validUntil}
                    </span>
                    <span className="font-mono text-sm font-semibold text-gold bg-card px-3 py-1 rounded">
                      {offer.code}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="gold"
              size="lg"
              className="w-full mt-6"
              onClick={scrollToBooking}
            >
              Book with Offer
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
