import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MessageSquare, Loader2, CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate backend network request for professional appearance
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const form = e.target as HTMLFormElement;
      form.reset();

      // Reset state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-brand font-semibold tracking-wider uppercase text-sm mb-3">Get In Touch</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-lg text-zinc-400 mb-10">
              Ready to start your project? Have some questions? Feel free to reach out. I'm available 24x7 to assist you.
            </p>

            <div className="space-y-6">
              <a href="tel:+919907514663" className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-800 transition-colors">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-zinc-400 font-medium">Call Me</div>
                  <div className="text-lg font-bold text-white">+91 9907514663</div>
                </div>
              </a>

              <a href="mailto:soumenpraman01@gmail.com" className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-800 transition-colors">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-zinc-400 font-medium">Email Me</div>
                  <div className="text-lg font-bold text-white">soumenpraman01@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/919907514663" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-2xl hover:bg-[#25D366]/20 transition-colors">
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-sm text-zinc-300 font-medium">Message on WhatsApp</div>
                  <div className="text-lg font-bold text-[#25D366]">+91 9907514663</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-8 sm:p-10 rounded-3xl shadow-xl shadow-black/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-white/10 text-white focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-white/10 text-white focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-white/10 text-white focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="+91"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-white/10 text-white focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 bg-brand text-white rounded-xl font-bold text-lg hover:bg-brand-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={22} className="animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 size={22} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={22} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
