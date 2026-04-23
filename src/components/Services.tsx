import { motion } from 'motion/react';
import { 
  Globe, 
  UserSquare2, 
  LayoutTemplate, 
  Wand2, 
  Search, 
  Smartphone, 
  Wrench, 
  Server
} from 'lucide-react';

const services = [
  {
    icon: <Globe size={24} />,
    title: 'Business Website Development',
    description: 'Custom websites tailored to your brand to attract clients and grow your business online.'
  },
  {
    icon: <UserSquare2 size={24} />,
    title: 'Personal Portfolio Design',
    description: 'Showcase your work and skills with a stunning, professional portfolio website.'
  },
  {
    icon: <LayoutTemplate size={24} />,
    title: 'Landing Page Creation',
    description: 'High-converting landing pages designed specifically for your marketing campaigns.'
  },
  {
    icon: <Wand2 size={24} />,
    title: 'Redesign & Modernization',
    description: 'Give your outdated website a fresh, modern look with improved user experience.'
  },
  {
    icon: <Search size={24} />,
    title: 'Basic SEO Setup',
    description: 'On-page SEO optimization to help your website rank better on Google search results.'
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile Responsive Design',
    description: 'Websites that look and perform perfectly on all devices: desktops, tablets, and phones.'
  },
  {
    icon: <Wrench size={24} />,
    title: 'Maintenance & Support',
    description: 'Ongoing technical support and content updates to keep your website running smoothly.'
  },
  {
    icon: <Server size={24} />,
    title: 'Domain & Hosting Setup',
    description: 'Assistance with purchasing domain names and configuring reliable web hosting.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand font-semibold tracking-wider uppercase text-sm mb-3">My Services</div>
          <h2 className="text-4xl font-bold text-white mb-6">Everything You Need to Succeed Online</h2>
          <p className="text-lg text-zinc-400">
            From design to development and continuous support, we provide comprehensive web solutions for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-zinc-900/50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-white/5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors">
            Request Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
