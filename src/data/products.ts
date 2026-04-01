import jerseyImg from "@/assets/product-jersey.jpg";
import scarfImg from "@/assets/product-scarf.jpg";
import flagImg from "@/assets/product-flag.jpg";
import capImg from "@/assets/product-cap.jpg";
import keychainImg from "@/assets/product-keychain.jpg";
import mugImg from "@/assets/product-mug.jpg";
import shortsImg from "@/assets/product-shorts.jpg";

export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "camisas" | "bandeiras" | "acessorios" | "personalizados";
  description: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Camisa Copa do Brasil 2025",
    price: 149.90,
    originalPrice: 199.90,
    image: jerseyImg,
    category: "camisas",
    description: "Camisa oficial da Copa do Brasil 2025. Tecido Dry-Fit de alta performance, perfeita para torcer com conforto e estilo. Disponível em todos os tamanhos.",
    badge: "🔥 Mais Vendido",
  },
  {
    id: 2,
    name: "Cachecol Torcedor Brasil",
    price: 59.90,
    image: scarfImg,
    category: "acessorios",
    description: "Cachecol dupla-face com as cores do Brasil. Material acrílico de alta qualidade, ideal para os jogos e para o dia a dia do torcedor apaixonado.",
  },
  {
    id: 3,
    name: "Bandeirão Brasil 1.5m x 1m",
    price: 89.90,
    originalPrice: 119.90,
    image: flagImg,
    category: "bandeiras",
    description: "Bandeira gigante do Brasil em poliéster resistente. Cores vibrantes que não desbotam. Perfeita para estádios e festas.",
    badge: "⚡ Promoção",
  },
  {
    id: 4,
    name: "Boné Copa do Brasil",
    price: 69.90,
    image: capImg,
    category: "acessorios",
    description: "Boné ajustável com bordado oficial da Copa do Brasil. Aba curva, tecido premium. Proteja-se do sol com estilo de torcedor.",
  },
  {
    id: 5,
    name: "Chaveiro Troféu Copa do Brasil",
    price: 29.90,
    image: keychainImg,
    category: "personalizados",
    description: "Réplica em miniatura do troféu da Copa do Brasil em metal dourado. Acabamento premium, ótimo para presente ou coleção.",
  },
  {
    id: 6,
    name: "Caneca Estádio Brasil",
    price: 44.90,
    originalPrice: 54.90,
    image: mugImg,
    category: "personalizados",
    description: "Caneca de porcelana com arte exclusiva de estádio brasileiro. 350ml, microondas safe. O café do torcedor fica mais especial.",
    badge: "🎁 Presente Ideal",
  },
  {
    id: 7,
    name: "Shorts Oficial Seleção",
    price: 99.90,
    image: shortsImg,
    category: "camisas",
    description: "Shorts oficial com tecnologia de secagem rápida. Faixas laterais verdes, elástico confortável. Combine com a camisa oficial.",
  },
];
