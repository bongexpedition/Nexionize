import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
];

export default function Gallery() {
  return (
    <section className="py-24 bg-[#0f1115] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-brand font-semibold tracking-wider uppercase text-sm mb-3">Gallery</div>
        <h2 className="text-4xl font-bold text-white">Inside the Process</h2>
      </div>

      <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-8 overflow-x-auto snap-x hide-scrollbar">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="shrink-0 w-[300px] sm:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden snap-center"
          >
            <img 
              src={img} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
