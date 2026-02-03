import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '2332 Whitson St, Selma, CA 93662',
    link: 'https://maps.google.com/?q=2332+Whitson+St,+Selma,+CA+93662',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '(559) 896-7753',
    link: 'tel:+15598967753',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@maggiesbeauty.com',
    link: 'mailto:hello@maggiesbeauty.com',
  },
];

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
  { day: 'Sunday', time: '10:00 AM - 4:00 PM' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-champagne/30">
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
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Contact Us
          </h2>
          <div className="decorative-line mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions or want to book an appointment? Reach out to us - we'd
            love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target={item.icon === MapPin ? '_blank' : undefined}
                  rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group p-4 rounded-xl hover:bg-card transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-champagne flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-gold" />
                <h4 className="font-display text-xl font-semibold text-foreground">
                  Opening Hours
                </h4>
              </div>
              <div className="space-y-4">
                {hours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium text-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center hover:bg-gold group transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5 text-gold group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[400px] lg:min-h-0"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.8844!2d-119.6129!3d36.5707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80946ff4ad0e0001%3A0x0!2s2332%20Whitson%20St%2C%20Selma%2C%20CA%2093662!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maggie's Beauty Salon Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
