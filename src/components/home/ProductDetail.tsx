import { motion } from 'motion/react';
import { ShoppingCart, ArrowLeft, Wind, CheckCircle2, Plus, Minus } from 'lucide-react';
import { Product, WHATSAPP_NUMBER } from '@/types';
import { useStore } from '@/StoreContext';
import { useState } from 'react';

export const ProductDetail = ({ product, onBack }: { product: Product, onBack: () => void }) => {
  const { addToCart } = useStore();
  const [volume, setVolume] = useState(1000); // Default 1KG

  const handleInquiry = () => {
    const text = `I'm interested in buying: ${product.name}\nVolume: ${volume}ml (${volume/1000}KG)\nRate: ₹${product.price} per KG\nTotal Estimated: ₹${(product.price * (volume/1000)).toFixed(2)}\nCategory: ${product.category}\nNotes: ${product.notes.join(', ')}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const adjustVolume = (amt: number) => {
    setVolume(prev => Math.max(100, prev + amt));
  };

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen bg-[#eeeeee]">
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-black mb-12 transition-colors cursor-pointer"
      >
        <ArrowLeft size={16} /> Back to Catalog
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-white rounded-2xl overflow-hidden aspect-square p-12 flex items-center justify-center relative group shadow-xl border border-black/5"
        >
          <img src={product.image} alt={product.name} className="relative z-10 w-full h-full object-contain mix-blend-multiply opacity-90 transition-transform duration-1000 group-hover:scale-110" />
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
                <span className="mono text-[10px] uppercase tracking-widest text-[#dd2b1c] font-black">{product.category}</span>
                <span className="text-black/10 opacity-40">/</span>
                <span className="mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Industrial Standard</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-black tracking-tighter leading-tight">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-2">
                <span className="mono text-3xl font-black text-black">₹ {product.price}</span>
                <span className="text-[10px] mono uppercase text-zinc-500 font-bold">Per 1000ml (1KG)</span>
            </div>
            
            <div className="mb-10 pb-10 border-b border-black/5">
                <p className="text-[10px] mono font-bold text-[#dd2b1c] uppercase tracking-wider mb-1">Estimated Batch Price</p>
                <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-black">₹ {(product.price * (volume/1000)).toFixed(2)}</span>
                    <span className="text-[8px] mono uppercase font-bold text-zinc-400">for {volume}ml</span>
                </div>
            </div>

            <div className="space-y-10 mb-12">
                <div>
                    <h4 className="mono text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Quantity Selection</h4>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center border border-black/10 rounded-full p-1 bg-white shadow-sm">
                            <button 
                                onClick={() => adjustVolume(-100)}
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-zinc-50 text-black transition-colors"
                            >
                                <Minus size={16} />
                            </button>
                            <div className="px-6 text-center">
                                <span className="mono text-sm font-black text-black">{volume}ml</span>
                                <p className="text-[8px] mono text-zinc-400 uppercase font-black">{volume/1000} KG</p>
                            </div>
                            <button 
                                onClick={() => adjustVolume(100)}
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-zinc-50 text-black transition-colors"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                        <p className="text-[8px] mono text-zinc-400 uppercase font-black max-w-[80px] leading-tight">Minimum Order: 100ml Protocol</p>
                    </div>
                </div>

                <div>
                    <h4 className="mono text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Scientific Composition</h4>
                    <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                        Our proprietary extraction process focuses on <span className="text-[#dd2b1c] font-bold">chemical purity</span>. {product.description}
                    </p>
                </div>

                <div>
                    <h4 className="mono text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Olfactory Matrix</h4>
                    <div className="flex flex-wrap gap-2">
                        {product.notes.map((note, i) => (
                            <span key={i} className="px-4 py-2 bg-white border border-black/5 rounded-lg text-xs font-bold mono text-black shadow-sm">
                                {note}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#000000" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product, volume)}
                    className="w-1/2 py-4 bg-[#dd2b1c] text-white rounded-full font-bold text-xs flex items-center justify-center gap-3 transition-all shadow-lg whitespace-nowrap"
                >
                    <Plus size={18} /> Add to Selection
                </motion.button>
                <motion.button
                     whileHover={{ scale: 1.05, borderColor: "#dd2b1c", color: "#dd2b1c" }}
                     whileTap={{ scale: 0.95 }}
                     onClick={handleInquiry}
                     className="w-1/2 py-4 border-2 border-black text-black rounded-full font-bold text-xs flex items-center justify-center gap-3 transition-all whitespace-nowrap"
                >
                    Registry Inquiry
                </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
