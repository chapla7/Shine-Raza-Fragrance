import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight, MessageCircle, ShoppingBag } from 'lucide-react';
import { useStore } from '@/StoreContext';
import { WHATSAPP_NUMBER } from '@/types';
import { useState, FormEvent } from 'react';

export const CartPage = () => {
  const { cart, removeFromCart, updateVolume, cartTotal, clearCart } = useStore();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleCheckout = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const address = formData.get('address');

    let cartSummary = cart.map(item => `- ${item.name} (${item.volume}ml) - ₹${(item.price * (item.volume / 1000)).toFixed(2)}`).join('\n');
    const text = `New Wholesale Order\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nOrder Details:\n${cartSummary}\n\nTotal: ₹${cartTotal.toFixed(2)}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOrdered(true);
    setTimeout(() => {
        clearCart();
        setIsOrdered(false);
    }, 2000);
  };

  if (cart.length === 0 && !isOrdered) {
    return (
      <div className="pt-40 pb-32 px-6 flex flex-col items-center justify-center min-h-[70vh] bg-[#eeeeee]">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 text-zinc-400 shadow-inner border border-black/5">
            <ShoppingBag size={32} />
        </div>
        <h2 className="text-3xl font-black mb-4 text-black tracking-tight">Selection Empty</h2>
        <p className="text-zinc-500 mb-10 text-sm font-medium">Start exploring our catalog to find your target inventory.</p>
        <button onClick={() => window.location.reload()} className="px-10 py-3.5 bg-black text-white rounded-full font-bold text-sm transition-all shadow-lg hover:bg-[#dd2b1c]">
            Return to Registry
        </button>
      </div>
    );
  }

  if (isOrdered) {
     return (
      <div className="pt-40 pb-32 px-6 flex flex-col items-center justify-center min-h-[70vh] bg-[#eeeeee]">
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-8 text-white shadow-2xl"
        >
            <MessageCircle size={32} />
        </motion.div>
        <h2 className="text-3xl font-black mb-4 text-black tracking-tight">Order <span className="text-[#dd2b1c]">Encrypted</span></h2>
        <p className="text-zinc-600 text-sm font-medium">Order sent via secure channel. Confirmation pending.</p>
      </div>
     )
  }

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 bg-[#eeeeee]">
      <div className="lg:col-span-2">
        <h1 className="text-4xl font-black mb-12 text-black tracking-tighter uppercase">Your Selection</h1>
        <div className="space-y-6">
          {cart.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="flex items-center gap-6 p-6 bg-white rounded-2xl group border border-black/5 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 rounded-xl bg-zinc-50 overflow-hidden flex-shrink-0 p-2 flex items-center justify-center border border-black/5 relative">
                <img src={item.image} alt={item.name} className="relative z-10 w-full h-full object-contain mix-blend-multiply opacity-90 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-black text-lg text-black tracking-tight">{item.name}</h3>
                    <p className="mono text-[10px] text-[#dd2b1c] uppercase tracking-widest font-black">{item.category}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-zinc-300 hover:text-[#dd2b1c] transition-colors cursor-pointer">
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 bg-zinc-50 rounded-lg px-2 py-1.5 border border-black/5">
                    <button onClick={() => updateVolume(item.id, item.volume - 100)} className="text-zinc-400 hover:text-black cursor-pointer"><Minus size={12} /></button>
                    <div className="flex flex-col items-center">
                        <span className="mono text-[10px] font-black text-black">{item.volume}ml</span>
                        <span className="text-[6px] mono font-black text-zinc-400 uppercase">{item.volume/1000}kg</span>
                    </div>
                    <button onClick={() => updateVolume(item.id, item.volume + 100)} className="text-zinc-400 hover:text-black cursor-pointer"><Plus size={12} /></button>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="mono font-black text-black">₹ {(item.price * (item.volume / 1000)).toFixed(2)}</span>
                    <span className="text-[8px] mono font-bold text-zinc-400 uppercase">Total for {item.volume}ml</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <div className="bg-white p-10 rounded-2xl shadow-2xl relative overflow-hidden border border-black/5">
          <h2 className="text-xl font-black mb-8 text-black uppercase tracking-widest border-b border-black/5 pb-4">Protocol Details</h2>
          <form onSubmit={handleCheckout} className="space-y-6 relative z-10">
            <div>
              <label className="mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 block mb-2 font-bold">Registry Name</label>
              <input name="name" required className="w-full bg-zinc-50 px-6 py-3.5 rounded-lg border border-black/5 outline-none focus:border-[#dd2b1c] transition-all text-sm text-black font-medium" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 block mb-2 font-bold">Secure Link (WA)</label>
              <input name="phone" required className="w-full bg-zinc-50 px-6 py-3.5 rounded-lg border border-black/5 outline-none focus:border-[#dd2b1c] transition-all text-sm text-black font-medium" placeholder="+123 456 7890" />
            </div>
            <div>
              <label className="mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 block mb-2 font-bold">Destination Axis</label>
              <input name="address" required className="w-full bg-zinc-50 px-6 py-3.5 rounded-lg border border-black/5 outline-none focus:border-[#dd2b1c] transition-all text-sm text-black font-medium" placeholder="123 Retail Axis, NY" />
            </div>

            <div className="h-[1px] bg-black/5 my-8" />

            <div className="flex items-center justify-between mb-8">
              <span className="text-zinc-400 mono text-[10px] uppercase font-black">Selection Total</span>
              <span className="mono text-2xl font-black text-black">₹ {cartTotal.toFixed(2)}</span>
            </div>

            <button type="submit" className="w-1/2 mx-auto py-4 bg-black text-white rounded-full font-bold text-sm hover:bg-[#dd2b1c] transition-all flex items-center justify-center gap-3 shadow-xl whitespace-nowrap">
              Initialize Order <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
