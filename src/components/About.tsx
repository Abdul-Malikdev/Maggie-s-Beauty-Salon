import { motion } from 'framer-motion';
import { Award, Heart, Users, Clock } from 'lucide-react';
import teamOwner from '@/assets/team-owner.jpg';
import teamStylist from '@/assets/team-stylist.jpg';
import teamMakeup from '@/assets/team-makeup.jpg';

const stats = [
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '5000+', label: 'Happy Clients' },
  { icon: Award, value: '20+', label: 'Expert Stylists' },
  { icon: Heart, value: '100%', label: 'Satisfaction' },
];

const team = [
  {
    name: 'Maggie Johnson',
    role: 'Founder & Master Stylist',
    image: teamOwner,
    description: 'With over 15 years of experience, Maggie brings passion and artistry to every client.',
  },
  {
    name: 'Alicia Williams',
    role: 'Senior Hair Colorist',
    image: teamStylist,
    description: 'Expert in balayage and color transformations, creating stunning personalized looks.',
  },
  {
    name: 'Sofia Martinez',
    role: 'Lead Makeup Artist',
    image: teamMakeup,
    description: 'Specializing in bridal and special occasion makeup with a natural, elegant touch.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
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
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            About Maggie's Salon
          </h2>
          <div className="decorative-line mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Founded in 2009, Maggie's Beauty Salon has been dedicated to enhancing
            natural beauty and providing exceptional service in a luxurious,
            welcoming environment.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-champagne/50 rounded-2xl p-8 md:p-12 mb-20 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            To provide a sanctuary where clients can relax, rejuvenate, and leave
            feeling confident and beautiful. We believe in using premium products,
            staying current with trends, and treating every client like family.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <div className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
            Meet Our Team
          </h3>
          <div className="decorative-line mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-soft">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-gold font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
