import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 animate-fade-in">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card shadow-2xl flex flex-col animate-slide-up">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-heading font-bold text-xl text-card-foreground flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" /> Carrinho
          </h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-8">
            <ShoppingBag className="h-16 w-16 mb-4 opacity-30" />
            <p className="font-medium">Seu carrinho está vazio</p>
            <p className="text-sm mt-1">Adicione produtos incríveis!</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 bg-muted/50 rounded-lg p-3">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-card-foreground line-clamp-1">{item.name}</h4>
                    <p className="text-primary font-bold text-sm mt-1">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 bg-card rounded hover:bg-border transition-colors">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 bg-card rounded hover:bg-border transition-colors">
                        <Plus className="h-3 w-3" />
                      </button>
                      <button onClick={() => removeItem(item.id)} className="ml-auto p-1 text-destructive hover:bg-destructive/10 rounded transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-5 space-y-4">
              <div className="flex justify-between text-lg font-heading font-bold text-card-foreground">
                <span>Total</span>
                <span className="text-primary">R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>
              <button className="w-full bg-gradient-cta text-secondary-foreground font-heading font-bold py-4 rounded-lg shadow-cta hover:scale-[1.02] transition-transform text-lg">
                Finalizar Compra
              </button>
              <button onClick={clearCart} className="w-full text-muted-foreground text-sm hover:text-destructive transition-colors">
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
