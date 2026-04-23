import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-dark to-brand shadow-lg shadow-brand/20 overflow-hidden group-hover:scale-105 transition-transform duration-300">
        {/* Subtle inner highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
        {/* Core 'N' icon graphic */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-5 h-5 text-white relative z-10"
        >
          <path d="M5 20V4L19 20V4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="font-bold text-2xl tracking-tight text-white">
        Nexion<span className="text-brand">ize</span>
      </span>
    </div>
  );
}
