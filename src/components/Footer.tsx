import { Trophy, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Shield, CreditCard, Lock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-card/70">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-6 w-6 text-gold" />
            <span className="font-heading font-extrabold text-lg text-card">
              Spike<span className="text-gold"> Sports</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            A melhor loja de produtos da Copa do Brasil. Qualidade, paixão e entrega rápida para todo o país.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-card mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-gold transition-colors">Início</a></li>
            <li><a href="#produtos" className="hover:text-gold transition-colors">Produtos</a></li>
            <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre Nós</a></li>
            <li><a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-card mb-4">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contato@copastore.com.br</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (11) 99999-9999</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> São Paulo, SP - Brasil</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-card mb-4">Segurança</h4>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1 bg-card/10 px-3 py-2 rounded-lg text-xs">
              <Shield className="h-4 w-4 text-primary" /> Site Seguro
            </div>
            <div className="flex items-center gap-1 bg-card/10 px-3 py-2 rounded-lg text-xs">
              <Lock className="h-4 w-4 text-primary" /> SSL
            </div>
            <div className="flex items-center gap-1 bg-card/10 px-3 py-2 rounded-lg text-xs">
              <CreditCard className="h-4 w-4 text-primary" /> Pagamento Seguro
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 bg-card/10 rounded-full hover:bg-gold/20 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="p-2 bg-card/10 rounded-full hover:bg-gold/20 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="p-2 bg-card/10 rounded-full hover:bg-gold/20 transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-card/10 pt-6 text-center text-xs">
        <p>© 2025 CopaStore. Todos os direitos reservados. | Política de Privacidade | Termos de Uso</p>
      </div>
    </div>
  </footer>
);

export default Footer;
