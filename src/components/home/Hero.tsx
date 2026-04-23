import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { LightRays, GridShimmer } from '../effects/Effects';
import { useEffect } from 'react';
import { WHATSAPP_NUMBER } from '@/types';

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const background = useMotionTemplate`radial-gradient(1000px circle at ${smoothX}px ${smoothY}px, rgba(255, 100, 50, 0.2), transparent 50%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleContact = () => {
    const text = "Hi Shine Raza Fragrance! I'm interested in wholesale fragrance manufacturing. I'd like to discuss a potential partnership.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden bg-gradient-to-br from-[#dd2b1c] via-[#dd2b1c] to-[#ff4d3d]">
      <div className="absolute inset-0 pointer-events-none">
        <LightRays />
      </div>
      
      <motion.div
        style={{
          background: background,
        }}
        className="absolute inset-0 z-1 pointer-events-none opacity-40 blur-3xl"
      />
      
      <GridShimmer />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left px-2 lg:px-0"
        >
          <h1 className="font-sans text-4xl sm:text-6xl md:text-8xl font-black leading-[1] lg:leading-[0.9] tracking-tighter mb-4 lg:mb-8 text-white">
            Excellence in <br />
            <span className="text-black">Perfumery</span>
          </h1>
          <p className="text-white font-bold max-w-lg text-sm md:text-xl mb-8 lg:mb-12 leading-relaxed opacity-90">
            You could choose chemistry that <span className="text-black">defines</span> the modern retail experience. Precision and purity for the scent <span className="italic">revolution</span>.
          </p>

          <div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContact}
              className="w-1/2 lg:w-auto px-8 py-3 lg:px-12 lg:py-4 bg-white text-black text-xs lg:text-lg font-black rounded-full flex items-center justify-center gap-3 group transition-all shadow-xl hover:bg-zinc-100 whitespace-nowrap"
            >
              Contact Us
              <ArrowRight size={18} className="lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
           className="relative flex items-center justify-center mt-8 lg:mt-0"
        >
          {/* Subtle glow behind the subject */}
          <div className="absolute inset-0 bg-[#ffdd00]/20 blur-[60px] lg:blur-[120px] rounded-full scale-150 animate-pulse" />
          
          <div className="relative group perspective-1000 max-w-[280px] sm:max-w-md lg:max-w-lg">
             <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="/hero-img.png" 
              alt="Shine Raza Laboratory" 
              className="w-full h-auto filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] lg:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] contrast-110 animate-fade-in z-20"
              referrerPolicy="no-referrer"
            />
            {/* Lab specific overlay to make it look "processed" */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#dd2b1c]/40 to-transparent mix-blend-overlay pointer-events-none rounded-2xl" />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 z-20 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
