/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { StoreProvider } from './StoreContext';
import { Navbar } from './components/layout/Navbar';
import { Footer, WhatsAppButton } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { ProductGrid } from './components/home/ProductGrid';
import { TrustBanner, CustomBranding, Testimonials, EnquiryForm, LocationContact, MottoBanner } from './components/home/Sections';
import { ProductDetail } from './components/home/ProductDetail';
import { CartPage } from './components/home/CartPage';
import { AnimatedGradient, ParticleDrift } from './components/effects/Effects';
import { Product } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNavigate = (page: string) => {
    if (page === 'home' || page === 'products' || page === 'brands' || page === 'about') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Small delay to allow home to render before scrolling
        setTimeout(() => {
          document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const handleOpenProduct = (p: Product) => {
    setSelectedProduct(p);
    setCurrentPage('product-detail');
    window.scrollTo(0, 0);
  };

  return (
    <StoreProvider>
      <div className="relative selection:bg-brand-accent selection:text-white min-h-screen">
        <AnimatedGradient />
        <ParticleDrift />
        <WhatsAppButton />

        <Navbar onNavigate={handleNavigate} />

        <main>
          <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div id="home">
                  <Hero onExplore={() => handleNavigate('products')} />
                </div>
                <div id="products">
                  <ProductGrid onOpenProduct={handleOpenProduct} />
                </div>
                <TrustBanner />
                <div id="brands">
                  <CustomBranding />
                </div>
                <Testimonials />
                <EnquiryForm />
                <div id="about">
                    <LocationContact />
                </div>
                <MottoBanner />
              </motion.div>
            )}

            {currentPage === 'product-detail' && selectedProduct && (
              <motion.div
                key="detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProductDetail
                  product={selectedProduct}
                  onBack={() => setCurrentPage('home')}
                />
              </motion.div>
            )}

            {currentPage === 'cart' && (
              <motion.div
                key="cart"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CartPage />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </StoreProvider>
  );
}
