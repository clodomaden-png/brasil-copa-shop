import heroBanner from "@/assets/hero-banner.jpg";
import { ShoppingBag, Timer } from "lucide-react";

const HeroBanner = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Spike Sports - Performance esportiva" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Timer className="h-4 w-4" />
            Promoção por tempo limitado!
          </div>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
            Vista a Paixão pelo
            <span className="text-gradient-green block">Futebol Brasileiro</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg">
            Produtos exclusivos de performance e estilo. Camisas, acessórios e itens personalizados para o verdadeiro torcedor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#produtos" className="inline-flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg shadow-cta hover:scale-105 transition-transform text-lg">
              <ShoppingBag className="h-5 w-5" />
              Ver Produtos
            </a>
            <a href="#sobre" className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-heading font-semibold px-8 py-4 rounded-lg hover:bg-secondary transition-colors">
              Conheça a Loja
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 text-muted-foreground text-sm">
            <span className="flex items-center gap-1">✅ Entrega para todo Brasil</span>
            <span className="flex items-center gap-1">🔒 Compra segura</span>
            <span className="flex items-center gap-1">⭐ +10 mil clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;