import { motion } from 'motion/react';
import { Plus, Eye } from 'lucide-react';
import { Product, PRODUCTS } from '@/types';
import { useStore } from '@/StoreContext';

interface ProductCardProps {
  product: Product;
  onOpen: (p: Product) => void;
  key?: string | number;
}

const ProductCard = ({ product, onOpen }: ProductCardProps) => {
  const { addToCart } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#dd2b1c]/10 transition-all duration-500 border border-black/5"
    >
      <div
        className="aspect-square overflow-hidden relative cursor-pointer p-4 bg-zinc-100/50"
        onClick={() => onOpen(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="w-10 h-10 bg-[#dd2b1c] rounded-full flex items-center justify-center text-white shadow-xl">
              <Eye size={18} />
           </div>
        </div>
      </div>

      <div className="p-3 md:p-6">
        <div className="flex items-center justify-between mb-1 md:mb-3">
          <span className="mono text-[6px] md:text-[10px] uppercase tracking-widest text-[#dd2b1c] font-black">{product.category}</span>
          <span className="text-[6px] md:text-[10px] font-bold mono uppercase tracking-tighter text-zinc-400 hidden sm:inline">{product.notes[0]} Series</span>
        </div>
        <h3 className="text-xs md:text-lg font-black mb-0.5 md:mb-1 text-black tracking-tight line-clamp-1">{product.name}</h3>
        <p className="text-zinc-500 text-[8px] md:text-xs mb-3 md:mb-6 line-clamp-1 font-medium hidden sm:block">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="mono text-[10px] md:text-sm font-black text-black">₹{product.price}</span>
            <span className="text-[6px] md:text-[8px] text-zinc-400 font-bold uppercase tracking-widest">Per 1KG Unit</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#dd2b1c', color: '#ffffff' }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, 1000);
            }}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-black/5 flex items-center justify-center text-black hover:border-transparent transition-all"
          >
            <Plus size={12} className="md:w-4 md:h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProductGrid = ({ onOpenProduct }: { onOpenProduct: (p: Product) => void }) => {
  return (
    <section id="products" className="py-32 px-6 max-w-7xl mx-auto bg-[#eeeeee]">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="mono text-[8px] md:text-[10px] tracking-[0.2em] text-[#dd2b1c] uppercase mb-2 block font-black">Industrial Procurement Registry</span>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-black tracking-tighter">Product Catalog <br/><span className="text-zinc-400 font-serif italic text-2xl md:text-4xl">Wholesale Only</span></h2>
        </div>
        <button className="text-[8px] md:text-[10px] text-zinc-400 hover:text-[#dd2b1c] uppercase tracking-tighter border-b border-zinc-200 pb-1 hover:border-[#dd2b1c] transition-all font-bold">
          View full production log →
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} onOpen={onOpenProduct} />
        ))}
      </div>
    </section>
  );
};
