import { Zap, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Shield, CreditCard, Lock } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-heading font-extrabold text-lg text-foreground">
              SPIKE<span className="text-primary"> SPORTS</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A melhor loja de produtos esportivos do Brasil. Qualidade, paixão e entrega rápida para todo o país.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
            <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></li>
            <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a></li>
            <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contato@spikesports.com.br</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (11) 99999-9999</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> São Paulo, SP - Brasil</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4">Segurança</h4>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1 bg-secondary px-3 py-2 rounded-lg text-xs text-muted-foreground border border-border">
              <Shield className="h-4 w-4 text-primary" /> Site Seguro
            </div>
            <div className="flex items-center gap-1 bg-secondary px-3 py-2 rounded-lg text-xs text-muted-foreground border border-border">
              <Lock className="h-4 w-4 text-primary" /> SSL
            </div>
            <div className="flex items-center gap-1 bg-secondary px-3 py-2 rounded-lg text-xs text-muted-foreground border border-border">
              <CreditCard className="h-4 w-4 text-primary" /> Pagamento Seguro
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary border border-border"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary border border-border"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary border border-border"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p>© 2025 Spike Sports. Todos os direitos reservados. | Política de Privacidade | Termos de Uso</p>
      </div>
    </div>
  </footer>
);

export default Footer;