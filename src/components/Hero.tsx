import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Layout, Code, Palette, Settings, Terminal, Monitor, Smartphone, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-brand/10 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-light text-brand text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Building Professional Websites
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              Build Your <span className="text-brand">Professional</span> Website Today
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-xl">
              I help businesses and individuals create modern, fast, and responsive websites that build trust and grow your online presence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white rounded-full font-semibold text-lg hover:bg-brand-dark transition-colors"
              >
                Get Started
                <ArrowRight size={20} />
              </a>
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white outline outline-1 outline-zinc-800 rounded-full font-semibold text-lg hover:bg-zinc-800 transition-colors"
              >
                View My Work
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand" />
                Fast Delivery
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand" />
                Mobile Responsive
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand" />
                24/7 Support
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Ambient Background Glows inside the right column */}
            <div className="absolute top-1/4 -right-12 w-72 h-72 bg-brand/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 -left-12 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

            {/* Visual Animated Web Building UI Representation */}
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[90%] rounded-3xl bg-[#09090b]/90 backdrop-blur-xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-visible border border-zinc-800/80 group perspective-1000">
              
              {/* Internal Blueprint Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] rounded-3xl pointer-events-none mix-blend-overlay"></div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] pointer-events-none rounded-full transition-opacity group-hover:opacity-100 opacity-50" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] pointer-events-none rounded-full transition-opacity group-hover:opacity-100 opacity-50" />
              
              {/* Browser Header */}
              <div className="w-full flex items-center justify-between gap-4 mb-6 relative z-10 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.6)]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.6)]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.6)]" />
                </div>
                <div className="flex-1 max-w-[200px] h-6 bg-white/5 rounded-full mx-4 flex items-center px-3 border border-white/5">
                   <div className="w-full h-1.5 bg-white/10 rounded-full relative overflow-hidden">
                     <motion.div initial={{ left: "-100%" }} animate={{ left: "100%" }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-y-0 w-1/3 bg-white/20 blur-sm"></motion.div>
                   </div>
                </div>
              </div>

              {/* Animated Website Assembly Process */}
              <div className="relative z-10 h-[calc(100%-80px)] flex flex-col gap-4">
                
                {/* Step 1: Layout & Wireframing */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full h-14 bg-gradient-to-r from-brand/90 to-blue-600/90 rounded-xl shadow-[0_10px_30px_rgba(59,130,246,0.3)] relative overflow-hidden flex items-center px-4 gap-4 border border-white/10"
                >
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                   <Layout size={20} className="text-white drop-shadow-md" />
                   <div className="w-2/3 h-3 bg-white/30 rounded-full backdrop-blur-sm shadow-inner"></div>
                </motion.div>

                <div className="flex gap-4 h-32">
                  {/* Step 2: Design & Palette */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="w-[40%] bg-zinc-900/90 backdrop-blur-md rounded-xl border border-white/5 shadow-inner flex flex-col items-center justify-center p-4 gap-3 relative overflow-hidden group-hover:border-purple-500/30 transition-colors"
                  >
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-purple-500/20 blur-2xl rounded-full"></div>
                    <Palette size={28} className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                    <div className="w-full space-y-2 relative z-10">
                      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.8 }} className="h-full bg-gradient-to-r from-pink-500 to-purple-500"></motion.div>
                      </div>
                      <div className="h-2 w-2/3 bg-zinc-800 rounded-full mx-auto overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 1 }} className="h-full bg-brand shadow-[0_0_10px_#3b82f6]"></motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 3: Coding & Structure */}
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex-1 rounded-xl border border-zinc-800/80 bg-black/80 backdrop-blur-xl p-4 relative overflow-hidden font-mono text-[10px] sm:text-xs text-zinc-500 flex flex-col justify-center shadow-xl group-hover:border-blue-500/30 transition-colors"
                  >
                    <Terminal size={16} className="text-zinc-600 absolute top-3 right-3" />
                    <motion.div className="w-[1px] h-3 bg-brand absolute left-4 animate-pulse"></motion.div>
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} className="text-blue-400 mb-1 whitespace-nowrap overflow-hidden pl-3">{'<section id="hero">'}</motion.div>
                    <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatType: "reverse" }} className="text-emerald-400 ml-6 mb-1 whitespace-nowrap overflow-hidden">{'<h1 className="title">'}</motion.div>
                    <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} transition={{ duration: 1.8, delay: 0.6, repeat: Infinity, repeatType: "reverse" }} className="text-amber-300 ml-10 mb-1 whitespace-nowrap overflow-hidden">{'Build Dream Website'}</motion.div>
                    <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatType: "reverse" }} className="text-emerald-400 ml-6 mb-1 whitespace-nowrap overflow-hidden">{'</h1>'}</motion.div>
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} className="text-blue-400 whitespace-nowrap overflow-hidden pl-3">{'</section>'}</motion.div>
                  </motion.div>
                </div>

                {/* Step 4: Optimization & Settings */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="w-full flex-1 min-h-[80px] bg-zinc-900/60 backdrop-blur-md rounded-xl border border-white/5 p-4 flex items-center justify-between group-hover:bg-zinc-800/60 transition-colors shadow-inner"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center relative">
                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-brand/20 blur-md rounded-xl"></motion.div>
                        <Zap size={22} className="text-brand relative z-10"/>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-28 bg-zinc-700 rounded-full relative overflow-hidden">
                           <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-white/10"></motion.div>
                        </div>
                        <div className="h-2 w-16 bg-zinc-800 rounded-full"></div>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
                        <Settings size={28} className="text-zinc-500 drop-shadow-md" />
                    </motion.div>
                </motion.div>

                {/* Step 5: Compilation Progress */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-2"
                >
                  <div className="flex justify-between text-xs font-semibold text-brand mb-2 px-1">
                    <span className="flex items-center gap-2 drop-shadow-[0_0_5px_rgba(59,130,246,0.6)]"><div className="w-2 h-2 bg-brand rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]"></div> GENERATING ASSETS...</span>
                    <span>100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden shadow-inner p-[1px]">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-brand to-cyan-300 shadow-[0_0_15px_rgba(59,130,246,0.9)] rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* EXTERNAL FLOATING ELEMENTS FOR PREMIUM ATTRACTION */}
              
              {/* Floating Element 1: Score Badge (Top Left) */}
              <motion.div
                 initial={{ opacity: 0, scale: 0.8, x: -30, y: 10 }}
                 animate={{ opacity: 1, scale: 1, x: -10, y: [-5, 5, -5] }}
                 transition={{ opacity: { delay: 3.5 }, scale: { delay: 3.5, type: "spring" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 4 } }}
                 className="absolute -left-12 sm:-left-16 top-1/4 bg-zinc-900/90 backdrop-blur-xl text-white border border-white/10 p-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center gap-4 z-30 pointer-events-none"
              >
                 <div className="w-12 h-12 rounded-full border-[3px] border-green-500 relative flex items-center justify-center shadow-[inset_0_0_10px_rgba(34,197,94,0.3),0_0_10px_rgba(34,197,94,0.3)]">
                   <span className="font-bold text-sm text-green-400">100</span>
                 </div>
                 <div className="hidden sm:block">
                   <div className="font-bold text-sm">SEO Score</div>
                   <div className="text-xs text-zinc-400">Highly Optimized</div>
                 </div>
              </motion.div>

              {/* Floating Element 2: Responsive Check (Bottom Left) */}
              <motion.div
                 initial={{ opacity: 0, scale: 0.8, y: 30 }}
                 animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                 transition={{ opacity: { delay: 3.8 }, scale: { delay: 3.8, type: "spring" }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 4.2 } }}
                 className="absolute -left-4 sm:left-4 -bottom-6 bg-zinc-900/90 backdrop-blur-xl text-white border border-white/10 px-4 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center gap-4 z-30 pointer-events-none"
              >
                 <div className="flex justify-center items-end text-brand drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
                   <Monitor size={22} />
                   <Smartphone size={14} className="-ml-2 mb-[1px]" />
                 </div>
                 <div className="hidden sm:block">
                   <div className="font-bold text-sm">Responsive</div>
                   <div className="text-xs text-brand/80">All Devices</div>
                 </div>
              </motion.div>

              {/* Floating Element 3: Security Shield (Top Right) */}
              <motion.div
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ opacity: 1, scale: 1, rotate: [0, 8, -8, 0] }}
                 transition={{ opacity: { delay: 3.2 }, scale: { delay: 3.2, type: "spring" }, rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                 className="absolute -right-6 top-8 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-3.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center justify-center z-30 text-purple-400 pointer-events-none"
              >
                 <div className="absolute inset-0 bg-purple-500/20 blur-md rounded-2xl animate-pulse"></div>
                 <ShieldCheck size={26} className="relative z-10 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
              </motion.div>

              {/* Floating Element 4: Final 'Project Live' Output (Right Middle) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: [-5, 5, -5] }}
                transition={{ 
                  opacity: { delay: 3 },
                  scale: { delay: 3, type: "spring" },
                  x: { delay: 3, type: "spring" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3.5 }
                }}
                className="absolute -right-10 sm:-right-16 top-1/2 -translate-y-1/2 bg-zinc-900/95 backdrop-blur-xl text-white border border-white/10 px-5 py-4 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center gap-4 z-30 pointer-events-none"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex flex-shrink-0 items-center justify-center text-green-500 shadow-[inset_0_0_15px_rgba(34,197,94,0.2)]">
                  <CheckCircle2 size={26} className="drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                </div>
                <div>
                  <div className="font-bold text-[15px] mb-0.5">Project Live</div>
                  <div className="text-xs font-medium text-zinc-400">100% Performance</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
