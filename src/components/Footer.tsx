import { ArrowUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f1115] text-zinc-400 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="mb-6 inline-block cursor-pointer" onClick={scrollToTop}>
              <Logo className="scale-90 origin-left" />
            </div>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Building professional, modern, and high-performance websites that help businesses grow their online presence and increase conversions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all hover:-translate-y-1">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm hover:text-brand transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand/50"></span> About Us</a></li>
              <li><a href="#services" className="text-sm hover:text-brand transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand/50"></span> Services</a></li>
              <li><a href="#pricing" className="text-sm hover:text-brand transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand/50"></span> Pricing</a></li>
              <li><a href="#portfolio" className="text-sm hover:text-brand transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand/50"></span> Portfolio</a></li>
              <li><a href="#process" className="text-sm hover:text-brand transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand/50"></span> Process</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm hover:text-brand transition-colors">Business Websites</a></li>
              <li><a href="#services" className="text-sm hover:text-brand transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#services" className="text-sm hover:text-brand transition-colors">Landing Pages</a></li>
              <li><a href="#services" className="text-sm hover:text-brand transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="text-sm hover:text-brand transition-colors">Website Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-400">Kolkata, West Bengal<br/>Remote / Global Services</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand shrink-0" />
                <a href="tel:+919907514663" className="text-sm text-zinc-400 hover:text-brand transition-colors">+91 9907514663</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand shrink-0" />
                <a href="mailto:soumenpraman01@gmail.com" className="text-sm text-zinc-400 hover:text-brand transition-colors">soumenpraman01@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Nexionize. All rights reserved.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all shadow-lg hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
