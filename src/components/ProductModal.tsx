import { X, ShoppingCart, Shield, Truck, RotateCcw } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product | null;
  onClose: () => void;
};

const ProductModal = ({ product, onClose }: Props) => {
  const { addItem } = useCart();

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-card/80 p-2 rounded-full hover:bg-muted transition-colors">
          <X className="h-5 w-5 text-card-foreground" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" />
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              {product.badge && (
                <span className="inline-block bg-gold text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {product.badge}
                </span>
              )}
              <h2 className="font-heading font-bold text-2xl text-card-foreground mb-3">{product.name}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-primary font-heading font-extrabold text-3xl">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
                {product.originalPrice && (
                  <span className="text-muted-foreground line-through text-lg">
                    R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                )}
              </div>

              <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Frete grátis acima de R$ 150</div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Garantia de 30 dias</div>
                <div className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-primary" /> Troca fácil e rápida</div>
              </div>
            </div>

            <button onClick={() => { addItem(product); onClose(); }} className="w-full flex items-center justify-center gap-2 bg-gradient-cta text-secondary-foreground font-heading font-bold py-4 rounded-lg shadow-cta hover:scale-[1.02] transition-transform text-lg">
              <ShoppingCart className="h-5 w-5" />
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
