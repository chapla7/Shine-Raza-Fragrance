import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, BRAND_LOGO } from '@/types';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D362] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D362]/40 transition-shadow"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <footer className="bg-[#dd2b1c] text-black pt-16 md:pt-20 pb-10 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-12 md:mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6 cursor-pointer h-16" onClick={() => onNavigate('home')}>
             <img 
               src={BRAND_LOGO} 
               alt="Shine Raza" 
               className="h-full w-auto object-contain brightness-0 invert" 
               referrerPolicy="no-referrer"
             />
          </div>
          <p className="text-black/60 text-xs leading-relaxed max-w-[200px] font-bold">
            Shine Raza Fragrance. Crafting the <span className="text-white font-black">signature scents</span> of modern industrial perfumery since 2006.
          </p>
        </div>

        <div>
          <h4 className="mono text-[10px] text-white/50 uppercase tracking-widest mb-6 cursor-default font-black">Dimensions</h4>
          <ul className="space-y-4 text-black text-xs font-bold">
            <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">Surface</button></li>
            <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors cursor-pointer">Catalog</button></li>
            <li><button onClick={() => onNavigate('brands')} className="hover:text-white transition-colors cursor-pointer">Atelier</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">Logistics</button></li>
          </ul>
        </div>

        <div>
          <h4 className="mono text-[10px] text-white/50 uppercase tracking-widest mb-6 cursor-default font-black">Protocol</h4>
          <ul className="space-y-4 text-black text-xs font-bold">
            <li><button className="hover:text-white transition-colors cursor-pointer">White Label</button></li>
            <li><button className="hover:text-white transition-colors cursor-pointer">Direct Shipping</button></li>
            <li><button className="hover:text-white transition-colors cursor-pointer">Bulk Pricing</button></li>
            <li><button className="hover:text-white transition-colors cursor-pointer">Security</button></li>
          </ul>
        </div>

        <div>
           <h4 className="mono text-[10px] text-white/50 uppercase tracking-widest mb-6 cursor-default font-black">Registry</h4>
          <ul className="space-y-4 text-black text-xs font-bold">
             <li><button className="hover:text-white transition-colors cursor-pointer">Privacy</button></li>
             <li><button className="hover:text-white transition-colors cursor-pointer">Terms</button></li>
             <li><button className="hover:text-white transition-colors cursor-pointer">Legal</button></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 text-[10px] mono text-black/60 uppercase tracking-widest font-black">
           <span>© 2026 Shine Raza Mfg.</span>
           <span className="hidden md:inline">Wholesale Portal</span>
        </div>
        <div className="flex gap-4">
           <div className="w-2 h-2 bg-black rounded-full"></div>
           <div className="w-2 h-2 bg-white rounded-full"></div>
           <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};
