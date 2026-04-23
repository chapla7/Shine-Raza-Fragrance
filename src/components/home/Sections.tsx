import { motion } from 'motion/react';
import { ShieldCheck, Truck, Recycle, Award, Send, MapPin, Mail, Phone, Wind } from 'lucide-react';
import { REVIEWS, WHATSAPP_NUMBER } from '@/types';
import { cn } from '@/lib/utils';
import { FormEvent } from 'react';

export const TrustBanner = () => {
  const features = [
    { icon: <ShieldCheck size={32} />, title: "Quality Assured", desc: "Every batch undergoes rigorous quality control." },
    { icon: <Truck size={32} />, title: "Global Logistics", desc: "Fast and secure delivery to over 40 countries." },
    { icon: <Recycle size={32} />, title: "Sustainable", desc: "Eco-friendly packaging and ethical sourcing." },
    { icon: <Award size={32} />, title: "Expert Craft", desc: "Designed by world-renowned perfumers." }
  ];

  return (
    <section className="bg-[#dd2b1c] text-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-sans text-xl md:text-4xl font-black text-center mb-10 md:mb-16 tracking-tight">Why <span className="text-black">Retailers</span> Choose Us?</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-all duration-500">
                {/* Responsive icon size */}
                <div className="scale-75 md:scale-100">
                    {f.icon}
                </div>
              </div>
              <h4 className="font-bold mb-2 md:mb-3 text-[10px] md:text-sm uppercase tracking-widest text-black">{f.title}</h4>
              <p className="text-white/80 text-[8px] md:text-xs leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CustomBranding = () => {
  return (
    <section id="brands" className="py-16 lg:py-32 bg-[#eeeeee] overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <span className="mono text-[8px] lg:text-[10px] tracking-[0.2em] text-zinc-500 uppercase mb-2 lg:mb-4 block">Bespoke Identity Solutions</span>
        <h2 className="text-3xl lg:text-5xl font-black mb-6 lg:mb-12 text-black tracking-tight leading-tight max-w-3xl">Elevate Your Brand with <span className="text-[#dd2b1c]">Custom Design</span></h2>
        
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-16 w-full max-w-[800px] px-2 md:px-0"
        >
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1200"
            alt="Custom Branding"
            className="rounded-2xl shadow-2xl w-full relative z-10"
          />
        </motion.div>

        <div className="max-w-3xl">
          <p className="text-zinc-600 mb-8 lg:mb-12 leading-relaxed text-[10px] lg:text-base font-medium">
            We offer end-to-end custom branding solutions. From unique olfactory signatures to <span className="text-black font-bold">custom bottle design</span> and packaging tailored for international export and premium retail placement.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mb-8 lg:mb-12">
            {['Custom Logo', 'Bottle Design', 'Packaging', 'Signatures'].map((item, i) => (
              <div key={i} className="bg-white p-3 lg:p-5 rounded-lg lg:rounded-2xl flex items-center justify-center gap-2 lg:gap-3 shadow-md border border-black/5 hover:border-[#dd2b1c]/30 transition-colors">
                <div className="w-1.5 h-1.5 bg-[#dd2b1c] rounded-full" />
                <span className="text-[7px] lg:text-[11px] mono uppercase tracking-wider text-black font-black">{item}</span>
              </div>
            ))}
          </div>
          <button className="w-1/2 min-w-fit px-8 md:px-16 py-4 bg-black text-white text-[10px] lg:text-sm font-black uppercase tracking-widest rounded-full hover:bg-[#dd2b1c] transition-all shadow-xl whitespace-nowrap">
            Wholesale Access
          </button>
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
    return (
        <section className="py-24 bg-[#dd2b1c] overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 mb-16">
                <span className="mono text-[10px] tracking-[0.2em] text-white/60 uppercase mb-2 block font-bold">Global Recognition</span>
                <h2 className="text-3xl font-black text-black tracking-tight">Retailer <span className="text-white font-serif italic">Voices</span></h2>
            </div>
            <div className="flex gap-4 md:gap-8 px-6 animate-scroll whitespace-nowrap">
                {[...REVIEWS, ...REVIEWS].map((r, i) => (
                    <motion.div
                        key={i}
                        className="inline-block min-w-[260px] md:min-w-[350px] bg-white p-6 md:p-8 rounded-2xl whitespace-normal group shadow-xl border border-black/5"
                    >
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <img src={r.avatar} alt={r.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all border border-black/5" />
                            <div>
                                <h4 className="font-black text-xs md:text-sm text-black">{r.name}</h4>
                                <p className="mono text-[6px] md:text-[8px] text-zinc-500 uppercase tracking-widest font-bold">{r.role}</p>
                            </div>
                        </div>
                        <p className="text-zinc-600 text-[10px] md:text-xs leading-relaxed mb-4 font-medium line-clamp-3">"{r.content}"</p>
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <div key={idx} className={cn("w-1 h-1 md:w-1.5 md:h-1.5 rounded-full", idx < r.rating ? "bg-[#dd2b1c]" : "bg-zinc-200")} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 10s linear infinite;
                }
                @media (min-width: 768px) {
                    .animate-scroll {
                        animation: scroll 60s linear infinite;
                    }
                }
            `}</style>
        </section>
    );
};

export const EnquiryForm = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get('name');
        const company = formData.get('company');
        const message = formData.get('message');
        const text = `Enquiry from: ${name} (${company})\nMessage: ${message}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <section id="contact" className="py-8 md:py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center bg-[#eeeeee]">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-10 h-10 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-3 md:mb-8 shadow-inner border border-black/5">
                     <Send size={16} className="text-[#dd2b1c] md:w-6 md:h-6" />
                </div>
                <span className="mono text-[7px] md:text-[10px] tracking-[0.2em] text-zinc-500 uppercase mb-1 md:mb-4 block font-bold">International Sales</span>
                <h2 className="text-2xl md:text-5xl font-black mb-3 md:mb-6 text-black tracking-tight leading-tight">Retail <span className="text-[#dd2b1c]">Enquiry</span></h2>
                <p className="text-zinc-500 mb-4 md:mb-8 max-w-sm font-medium text-[10px] md:text-base leading-tight">Ready to transform your retail experience? Send your <span className="text-black font-bold">bulk order request</span>.</p>
            </div>

            <motion.form
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-white p-5 md:p-10 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl relative overflow-hidden border border-black/5"
            >
                <div className="space-y-3 md:space-y-6 relative z-10">
                    <div>
                        <label className="mono text-[7px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-500 block mb-0.5 md:mb-2 font-bold">Your Name</label>
                        <input name="name" required className="w-full px-3 md:px-6 py-2 md:py-3.5 bg-zinc-50 border border-black/5 outline-none focus:border-[#dd2b1c] transition-all text-[10px] md:text-sm rounded-lg text-black font-medium" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="mono text-[7px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-500 block mb-0.5 md:mb-2 font-bold">Retail Company</label>
                        <input name="company" required className="w-full px-3 md:px-6 py-2 md:py-3.5 bg-zinc-50 border border-black/5 outline-none focus:border-[#dd2b1c] transition-all text-[10px] md:text-sm rounded-lg text-black font-medium" placeholder="Bloom & Co" />
                    </div>
                    <div>
                        <label className="mono text-[7px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-500 block mb-0.5 md:mb-2 font-bold">Message</label>
                        <textarea name="message" required rows={2} className="w-full px-3 md:px-6 py-2 md:py-3.5 bg-zinc-50 border border-black/5 outline-none focus:border-[#dd2b1c] transition-all resize-none text-[10px] md:text-sm rounded-lg text-black font-medium" placeholder="Order volume..." />
                    </div>
                    <button type="submit" className="w-1/2 mx-auto py-2.5 md:py-4 bg-black text-white rounded-full font-bold text-[10px] md:text-sm hover:bg-[#dd2b1c] transition-all shadow-lg whitespace-nowrap">
                        Inquiry Registry
                    </button>
                </div>
            </motion.form>
        </section>
    );
};

export const MottoBanner = () => {
    return (
        <section className="py-16 md:py-40 bg-[#eeeeee] text-white text-center px-6 overflow-hidden relative border-t-8 border-black/5">
             <div className="relative z-10">
                <p className="mono text-[8px] md:text-[10px] tracking-[0.5em] text-black uppercase mb-6 md:mb-12 font-black">Industrial Alchemy</p>
                <h2 className="text-xl md:text-5xl font-black tracking-tighter mb-6 md:mb-12 leading-tight max-w-4xl mx-auto text-black">
                    The <span className="text-white italic">purity</span> of the scent is the <br className="hidden md:block"/> signature of our <span className="text-white">science</span>.
                </h2>
                <div className="flex items-center justify-center gap-4">
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full" />
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-lg" />
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full" />
                </div>
             </div>
        </section>
    );
};

export const LocationContact = () => {
    return (
        <section className="bg-[#dd2b1c] py-8 md:py-32 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
                <div className="rounded-2xl overflow-hidden shadow-2xl h-[140px] md:h-[400px] border-2 md:border-4 border-black/10">
                     <iframe
                        src="https://maps.google.com/maps?q=Shop%20No.%20D-62,%20B%20Bldg,%20Paradia%20Complex,%20Bhayandar%20West,%20Thane,%20401105&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col justify-center text-center lg:text-left pt-2 md:pt-0">
                    <span className="mono text-[8px] lg:text-[10px] tracking-[0.2em] text-white/60 uppercase mb-2 lg:mb-4 block font-bold">Global Procurement Hub</span>
                    <h2 className="text-2xl lg:text-5xl font-black mb-6 lg:mb-12 text-black tracking-tight leading-tight">Visit Our <span className="text-white font-serif italic">Atelier</span></h2>
                    <div className="grid grid-cols-1 gap-4 lg:gap-8">
                        <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
                             <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center text-white shrink-0">
                                <MapPin size={16} className="lg:w-6 lg:h-6" />
                             </div>
                             <div className="text-left">
                                <h4 className="mono text-[8px] lg:text-[10px] uppercase text-white/60 font-bold">Corporate Headquarters</h4>
                                <p className="text-black font-black text-[10px] lg:text-sm">Shop No. D-62, B Bldg, Paradia Complex, Bhayandar West, Thane, 401105</p>
                             </div>
                        </div>
                         <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
                             <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center text-white shrink-0">
                                <Mail size={16} className="lg:w-6 lg:h-6" />
                             </div>
                             <div className="text-left">
                                <h4 className="mono text-[8px] lg:text-[10px] uppercase text-white/60 font-bold">Official Enquiry</h4>
                                <p className="text-black font-black text-[10px] lg:text-sm">shinerazafragrance@gmail.com</p>
                             </div>
                        </div>
                         <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
                             <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center text-white shrink-0">
                                <Phone size={16} className="lg:w-6 lg:h-6" />
                             </div>
                             <div className="text-left">
                                <h4 className="mono text-[8px] lg:text-[10px] uppercase text-white/60 font-bold">Secure Line</h4>
                                <p className="text-black font-black text-[10px] lg:text-sm">9987518102</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


