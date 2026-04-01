import { ShoppingCart, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product;
  onViewDetails: (product: Product) => void;
};

const ProductCard = ({ product, onViewDetails }: Props) => {
  const { addItem } = useCart();

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="relative overflow-hidden aspect-square">
        <img src={product.image} alt={product.name} loading="lazy" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button onClick={() => onViewDetails(product)} className="bg-card text-foreground p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
            <Eye className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-heading font-bold text-card-foreground text-sm mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-primary font-heading font-extrabold text-xl">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              R$ {product.originalPrice.toFixed(2).replace(".", ",")}
            </span>
          )}
        </div>
        <button onClick={() => addItem(product)} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
          <ShoppingCart className="h-4 w-4" />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
