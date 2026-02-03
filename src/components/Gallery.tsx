import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

import galleryHair1 from '@/assets/gallery-hair1.jpg';
import galleryHair2 from '@/assets/gallery-hair2.jpg';
import galleryNails from '@/assets/gallery-nails.jpg';
import galleryMakeup from '@/assets/gallery-makeup.jpg';
import gallerySpa from '@/assets/gallery-spa.jpg';
import galleryInterior from '@/assets/gallery-interior.jpg';

const galleryItems = [
  { id: 1, image: galleryHair1, category: 'Hair', title: 'Bridal Updo' },
  { id: 2, image: galleryMakeup, category: 'Makeup', title: 'Bridal Glam' },
  { id: 3, image: galleryNails, category: 'Nails', title: 'French Manicure' },
  { id: 4, image: galleryHair2, category: 'Hair', title: 'Balayage Color' },
  { id: 5, image: gallerySpa, category: 'Spa', title: 'Relaxing Facial' },
  { id: 6, image: galleryInterior, category: 'Salon', title: 'Our Space' },
];

const categories = ['All', 'Hair', 'Makeup', 'Nails', 'Spa', 'Salon'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Gallery
          </h2>
          <div className="decorative-line mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Browse through our portfolio showcasing our finest work and the beautiful
            transformations we create for our clients.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-primary-foreground shadow-gold'
                  : 'bg-champagne/50 text-foreground hover:bg-champagne'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              layout
              className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-soft hover:shadow-card transition-shadow duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-gold text-xs font-medium tracking-wider uppercase">
                  {item.category}
                </span>
                <h4 className="text-primary-foreground font-display text-lg font-semibold">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
