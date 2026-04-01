import heroBanner from "@/assets/hero-banner.jpg";
import { ShoppingBag, Timer } from "lucide-react";

const HeroBanner = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Copa do Brasil - Estádio com torcida vibrante" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gold/90 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Timer className="h-4 w-4" />
            Promoção por tempo limitado!
          </div>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-card leading-tight mb-4">
            Vista a Paixão pelo
            <span className="text-gradient-gold block">Futebol Brasileiro</span>
          </h1>
          <p className="text-card/80 text-lg md:text-xl mb-8 max-w-lg">
            Produtos exclusivos da Copa do Brasil. Camisas, acessórios e itens personalizados para o verdadeiro torcedor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#produtos" className="inline-flex items-center justify-center gap-2 bg-gradient-cta text-secondary-foreground font-heading font-bold px-8 py-4 rounded-lg shadow-cta hover:scale-105 transition-transform text-lg">
              <ShoppingBag className="h-5 w-5" />
              Ver Produtos
            </a>
            <a href="#sobre" className="inline-flex items-center justify-center gap-2 border-2 border-card/40 text-card font-heading font-semibold px-8 py-4 rounded-lg hover:bg-card/10 transition-colors">
              Conheça a Loja
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 text-card/70 text-sm">
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
