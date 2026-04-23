import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Local Business Owner",
    text: "Very professional service. My business website looks amazing and works perfectly on mobile phones. Highly recommended!"
  },
  {
    name: "Anjali Das",
    role: "Freelance Consultant",
    text: "Affordable and high-quality work. The team at Nexionize understood exactly what I needed and delivered a clean, modern design."
  },
  {
    name: "Amit Roy",
    role: "Coaching Center Director",
    text: "Fast delivery and great support. The WhatsApp integration he added has already helped me get new student inquiries."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#09090b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand font-semibold tracking-wider uppercase text-sm mb-3">Testimonials</div>
          <h2 className="text-4xl font-bold mb-6">What My Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 p-8 rounded-3xl relative border border-white/5"
            >
              <Quote size={40} className="text-zinc-700 absolute top-6 right-6 opacity-50" />
              <div className="flex gap-1 mb-6 text-brand">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 text-lg mb-8 relative z-10 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <div className="font-bold text-lg">{t.name}</div>
                <div className="text-zinc-400 text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
