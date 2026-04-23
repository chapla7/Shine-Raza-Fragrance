import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const AnimatedGradient = ({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden bg-brand-bg", className)}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-[#dd2b1c]/5 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-black/5 blur-[100px] rounded-full"
      />
    </div>
  );
};

export const GridShimmer = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.01] to-transparent h-full"
      />
    </div>
  );
};

export const ParticleDrift = () => {
  const particles = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden h-full w-full">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.1,
          }}
          animate={{
            y: ["0%", "100%"],
            x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
          }}
          transition={{
            duration: Math.random() * 20 + 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[2px] h-[2px] bg-black/20 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export const LightRays = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-30"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.4) 15deg, transparent 30deg, rgba(255,255,255,0.4) 45deg, transparent 60deg, rgba(255,255,255,0.4) 75deg, transparent 90deg, rgba(255,255,255,0.4) 105deg, transparent 120deg, rgba(255,255,255,0.4) 135deg, transparent 150deg, rgba(255,255,255,0.4) 165deg, transparent 180deg)',
          maskImage: 'radial-gradient(circle at 50% 50%, white, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, white, transparent 70%)',
        }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-20"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.2) 10deg, transparent 20deg)',
          maskImage: 'radial-gradient(circle at 50% 50%, white, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, white, transparent 60%)',
        }}
      />
    </div>
  );
};
