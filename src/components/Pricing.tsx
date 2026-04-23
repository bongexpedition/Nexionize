import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: "Basic Plan",
    price: "5,999",
    description: "Perfect for individuals and small startups looking to establish an online presence.",
    features: [
      "1–3 Pages",
      "Mobile Responsive",
      "Basic Design",
      "Contact Form",
      "Delivery in 3 Days"
    ],
    popular: false
  },
  {
    name: "Standard Plan",
    price: "9,999",
    description: "Ideal for growing businesses that need a professional look and lead generation.",
    features: [
      "4–6 Pages",
      "Modern UI Design",
      "Mobile + Tablet Responsive",
      "Contact Form + WhatsApp Integration",
      "Basic SEO",
      "Delivery in 5–7 Days"
    ],
    popular: true
  },
  {
    name: "Premium Plan",
    price: "16,999",
    description: "Comprehensive solution for established businesses demanding high performance.",
    features: [
      "7–10 Pages",
      "Advanced UI/UX",
      "SEO Optimization",
      "Performance Optimization",
      "Payment Integration (Optional)",
      "Priority Support",
      "Delivery in 7–10 Days"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0f1115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand font-semibold tracking-wider uppercase text-sm mb-3">Transparent Pricing</div>
          <h2 className="text-4xl font-bold text-white mb-6">Choose the Right Plan for You</h2>
          <p className="text-lg text-zinc-400">
            Affordable web design packages tailored to your specific needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 border ${
                plan.popular 
                ? 'border-brand bg-zinc-900/80 shadow-2xl shadow-brand/20 md:-translate-y-4' 
                : 'border-white/5 bg-zinc-900/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">₹</span>
                <span className="text-5xl font-black text-white tracking-tight">{plan.price}</span>
              </div>
              
              <a 
                href="#contact"
                className={`block w-full py-3 px-6 rounded-xl text-center font-semibold mb-8 transition-colors ${
                  plan.popular 
                  ? 'bg-brand text-white hover:bg-brand-dark' 
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                Get Started
              </a>
              
              <ul className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-brand shrink-0" />
                    <span className="text-zinc-400 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
