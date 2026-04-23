export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  notes: string[];
}

export interface CartItem extends Product {
  volume: number; // in ml
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const WHATSAPP_NUMBER = "9987518102";

export const BRAND_LOGO = "/logo.png";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Midnight Jasmine",
    description: "Deep, floral and mysterious. A nocturnal journey through blooming gardens.",
    price: 85,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    category: "Floral",
    notes: ["Jasmine", "Sandalwood", "Pink Pepper"]
  },
  {
    id: "2",
    name: "Velvet Oud",
    description: "Rich, woody and sophisticated. The essence of Eastern luxury.",
    price: 120,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    category: "Woody",
    notes: ["Oud", "Leather", "Amber"]
  },
  {
    id: "3",
    name: "Citrus Bloom",
    description: "Fresh, vibrant and energizing. A burst of Mediterranean sunshine.",
    price: 75,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&q=80&w=800",
    category: "Fresh",
    notes: ["Bergamot", "Neroli", "Grapefruit"]
  },
  {
    id: "4",
    name: "Sandalwood Serenity",
    description: "Calm, creamy and grounding. A peaceful forest embrace.",
    price: 90,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    category: "Woody",
    notes: ["Sandalwood", "Cedar", "Vanilla"]
  },
  {
    id: "5",
    name: "Rose Éternelle",
    description: "A modern take on the classic rose. Timeless and romantic.",
    price: 95,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    category: "Floral",
    notes: ["Bulgarian Rose", "Patchouli", "Musk"]
  },
  {
    id: "6",
    name: "Oceanic Mist",
    description: "Crisp, salty and refreshing. The breath of the restless Atlantic.",
    price: 70,
    image: "https://images.unsplash.com/photo-1512568433530-bcfe223d6a1d?auto=format&fit=crop&q=80&w=800",
    category: "Marine",
    notes: ["Sea Salt", "Sage", "Seaweed"]
  },
  {
    id: "7",
    name: "Amber Nightfall",
    description: "Warm, intoxicating and sensual. Glowing like embers in the dark.",
    price: 110,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
    category: "Oriental",
    notes: ["Amber", "Tobacco", "Cardamom"]
  },
  {
    id: "8",
    name: "Veridian Isle",
    description: "Green, herbal and wild. A hidden tropical sanctuary.",
    price: 80,
    image: "https://images.unsplash.com/photo-1547881196-c220a16c28af?auto=format&fit=crop&q=80&w=800",
    category: "Green",
    notes: ["Vetiver", "Lime", "Bamboo"]
  },
  {
    id: "9",
    name: "Spiced Saffron",
    description: "Pungent, exotic and brave. A journey through ancient spice markets.",
    price: 105,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
    category: "Spicy",
    notes: ["Saffron", "Cinnamon", "Incense"]
  },
  {
    id: "10",
    name: "Lavender Dreams",
    description: "Soothing, aromatic and classic. Fields of lavender under a summer moon.",
    price: 65,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
    category: "Aromatic",
    notes: ["Lavender", "Bergamot", "Honey"]
  },
  {
    id: "11",
    name: "Winter Birch",
    description: "Cold, woody and clean. The architecture of a snowy forest.",
    price: 88,
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=800",
    category: "Woody",
    notes: ["Birch", "Mint", "Moss"]
  },
  {
    id: "12",
    name: "Golden Nectar",
    description: "Sweet, honeyed and bright. The golden hour in a bottle.",
    price: 92,
    image: "https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?auto=format&fit=crop&q=80&w=800",
    category: "Gourmand",
    notes: ["Honey", "Apricot", "Almond"]
  },
  {
    id: "13",
    name: "Tobacco Ember",
    description: "Smoky, rich and warm. The comfort of a fireside evening.",
    price: 115,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    category: "Oriental",
    notes: ["Tobacco", "Vanilla", "Smoke"]
  },
  {
    id: "14",
    name: "Peppermint Peak",
    description: "Icy, sharp and refreshing. The crisp air of a mountain summit.",
    price: 68,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&q=80&w=800",
    category: "Fresh",
    notes: ["Mint", "Eucalyptus", "Pine"]
  },
  {
    id: "15",
    name: "Cinnamon Spice",
    description: "Zesty, warm and comforting. A festive holiday kitchen.",
    price: 78,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
    category: "Spicy",
    notes: ["Cinnamon", "Clove", "Orange"]
  },
  {
    id: "16",
    name: "White Musk",
    description: "Clean, powdery and subtle. A second-skin fragrance.",
    price: 82,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
    category: "Aromatic",
    notes: ["Musk", "Lily", "Iris"]
  },
  {
    id: "17",
    name: "Black Cherry",
    description: "Tart, sweet and dark. A juicy summer indulgence.",
    price: 100,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    category: "Gourmand",
    notes: ["Cherry", "Almond", "Liquor"]
  },
  {
    id: "18",
    name: "Pine Forest",
    description: "Resinous, green and earthy. The heart of the Taiga.",
    price: 85,
    image: "https://images.unsplash.com/photo-1512568433530-bcfe223d6a1d?auto=format&fit=crop&q=80&w=800",
    category: "Woody",
    notes: ["Pine", "Fir", "Cedar"]
  },
  {
    id: "19",
    name: "Tropical Bloom",
    description: "Exotic, solar and lush. A paradise island getaway.",
    price: 98,
    image: "https://images.unsplash.com/photo-1547881196-c220a16c28af?auto=format&fit=crop&q=80&w=800",
    category: "Floral",
    notes: ["Tiare", "Coconut", "Ylang-Ylang"]
  },
  {
    id: "20",
    name: "Bergamot Breeze",
    description: "Tart, sparkly and light. An Italian spring morning.",
    price: 72,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&q=80&w=800",
    category: "Fresh",
    notes: ["Bergamot", "Lemon", "Petitgrain"]
  }
];

export const REVIEWS: Review[] = [
  { id: "1", name: "Sarah Jenkins", role: "Retailer - Bloom & Co", content: "The quality of Essentia fragrances is unmatched. Our customers are obsessed with Midnight Jasmine.", rating: 5, avatar: "https://i.pravatar.cc/150?u=1" },
  { id: "2", name: "Marco Rossi", role: "Owner - Scents of Milan", content: "The wholesale process is seamless and the branding options allowed us to launch our private label effortlessly.", rating: 5, avatar: "https://i.pravatar.cc/150?u=2" },
  { id: "3", name: "Elena Gilbert", role: "Manager - Pure Luxury", content: "Exceptional customer service and fast international shipping. Essentia is our primary fragrance partner.", rating: 4, avatar: "https://i.pravatar.cc/150?u=3" },
  { id: "4", name: "David Chen", role: "Retailer - Urban Scents", content: "Velvet Oud is a best-seller in our boutique. The depth of the fragrance is remarkable.", rating: 5, avatar: "https://i.pravatar.cc/150?u=4" },
  { id: "5", name: "Sophie Martin", role: "Buyer - Paris Parfums", content: "We love the modern minimalist packaging and the sustainability focus of Essentia.", rating: 5, avatar: "https://i.pravatar.cc/150?u=5" },
  { id: "6", name: "James Wilson", role: "Owner - The Fragrance Collective", content: "Their custom branding service is a game changer for mid-sized retailers.", rating: 5, avatar: "https://i.pravatar.cc/150?u=6" },
  { id: "7", name: "Aria Gupta", role: "Retailer - Saffron & Silk", content: "The notes are so well balanced. Citrus Bloom has become our signature summer scent.", rating: 4, avatar: "https://i.pravatar.cc/150?u=7" },
  { id: "8", name: "Lars Olsson", role: "Manager - Nordic Aura", content: "Minimalist design and maximalist fragrance. Perfect for our Scandinavian market.", rating: 5, avatar: "https://i.pravatar.cc/150?u=8" },
  { id: "9", name: "Isabella Silva", role: "Retailer - Rio Scents", content: "Vibrant and long-lasting fragrances. The logistics are handled perfectly.", rating: 5, avatar: "https://i.pravatar.cc/150?u=9" }
];
