import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from './types';

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product, volume?: number) => void;
  removeFromCart: (productId: string) => void;
  updateVolume: (productId: string, volume: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, volume: number = 1000) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, volume: item.volume + volume } : item);
      }
      return [...prev, { ...product, volume }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateVolume = (productId: string, volume: number) => {
    if (volume < 100) return; // Minimum 100ml
    setCart(prev => prev.map(item => item.id === productId ? { ...item, volume } : item));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + (item.price * (item.volume / 1000)), 0);

  return (
    <StoreContext.Provider value={{ cart, addToCart, removeFromCart, updateVolume, clearCart, cartTotal }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
};
