import { motion } from 'motion/react';
import { ShoppingCart, Phone, Menu, X, Wind } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '@/StoreContext';
import { cn } from '@/lib/utils';
import { BRAND_LOGO } from '@/types';

export const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useStore();
  const cartCount = cart.reduce((acc, item) => acc + item.volume > 0 ? acc + 1 : acc, 0); // Count items

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Product', id: 'products' },
    { name: 'Brands', id: 'brands' },
    { name: 'About Us', id: 'about' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Mobile Hamburger (Left) */}
        <button 
          className="md:hidden text-black w-10 h-10 flex items-center justify-start cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo (Center on Mobile, Left on Desktop) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 h-12 md:h-16"
          onClick={() => onNavigate('home')}
        >
          <img 
            src={BRAND_LOGO} 
            alt="Shine Raza" 
            className="h-full w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              whileHover={{ y: -1, color: '#dd2b1c' }}
              className="text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-brand-accent transition-colors cursor-pointer"
              onClick={() => onNavigate(link.id)}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* Action Icons (Cart Right) */}
        <div className="flex items-center gap-2 md:gap-6">
          <motion.a
            href={`tel:9987518102`}
            whileHover={{ scale: 1.1, color: '#dd2b1c' }}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 text-zinc-600 hover:text-brand-accent transition-all"
          >
            <Phone size={18} />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.1, color: '#dd2b1c' }}
            className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 text-zinc-600 hover:text-brand-accent transition-all cursor-pointer"
            onClick={() => onNavigate('cart')}
          >
            <ShoppingCart size={20} className="md:w-[18px]" />
            {cartCount > 0 && (
              <span className="absolute top-2 right-2 md:top-1 md:right-1 w-2 h-2 bg-brand-accent rounded-full" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="md:hidden bg-white border-b border-black/5 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="text-left text-lg font-medium text-black hover:text-brand-accent transition-colors"
              onClick={() => {
                onNavigate(link.id);
                setIsOpen(false);
              }}
            >
              {link.name}
            </button>
          ))}
          <a href={`tel:9987518102`} className="flex items-center gap-3 text-lg font-medium text-black hover:text-brand-accent transition-colors">
            <Phone size={20} /> Call Support
          </a>
        </motion.div>
      )}
    </header>
  );
};
