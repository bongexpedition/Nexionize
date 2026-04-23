import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Discussion",
    desc: "We discuss your business goals, target audience, and website requirements."
  },
  {
    num: "02",
    title: "Planning",
    desc: "Creating wireframes, mapping out the site structure, and deciding on content."
  },
  {
    num: "03",
    title: "Development",
    desc: "Building the website using modern technologies with a focus on speed and responsiveness."
  },
  {
    num: "04",
    title: "Review",
    desc: "You review the website on a hidden link. We make adjustments based on your feedback."
  },
  {
    num: "05",
    title: "Delivery",
    desc: "Testing everything and officially launching your new professional website to the public."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#0f1115] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="text-brand font-semibold tracking-wider uppercase text-sm mb-3">How We Work</div>
              <h2 className="text-4xl font-bold mb-6">A Simple, Transparent Process</h2>
              <p className="text-gray-400 text-lg mb-8">
                From our first conversation to the final launch, I make sure the process of getting your website online is smooth and stress-free.
              </p>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors">
                Start Your Project Now
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-zinc-800 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10"
                >
                  <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center font-bold text-xl shrink-0 shadow-[0_0_0_8px_rgba(15,17,21,1)]">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
