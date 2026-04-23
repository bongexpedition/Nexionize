export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0f1115] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-zinc-900 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
                alt="Web Development workspace" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-brand/10 mix-blend-multiply"></div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 bg-brand text-white p-8 rounded-3xl shadow-xl max-w-xs hidden sm:block">
              <div className="text-4xl font-bold mb-2">2026</div>
              <div className="text-sm font-medium opacity-90">Founded to bring professional digital solutions to businesses everywhere.</div>
            </div>
          </div>
          
          <div>
            <div className="text-brand font-semibold tracking-wider uppercase text-sm mb-3">About Us</div>
            <h2 className="text-4xl font-bold text-white mb-6">Building Professional Websites That Grow Your Business</h2>
            <div className="space-y-6 text-lg text-zinc-400">
              <p>
                At Nexionize, we create modern, responsive, and high-quality websites that help businesses build a strong online presence.
              </p>
              <p>
                We are passionate about turning your ideas into reality and designing websites that not only look professional but also support your business growth. We believe in working closely with our clients to grow together through impactful digital solutions.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-zinc-400 font-medium">Responsive Design</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-zinc-400 font-medium">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
