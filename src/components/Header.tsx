import { ShoppingCart, Menu, X, Trophy } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Header = () => {
  const { itemCount, setIsOpen } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Produtos", href: "#produtos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary/80">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <Trophy className="h-8 w-8 text-gold" />
          <span className="font-heading font-extrabold text-xl text-primary-foreground tracking-tight">
            Copa<span className="text-gold">Store</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-primary-foreground/80 hover:text-gold font-medium text-sm transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => setIsOpen(true)} className="relative p-2 text-primary-foreground hover:text-gold transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-secondary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse-slow">
                {itemCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2 text-primary-foreground">
            {mobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <nav className="md:hidden bg-primary/95 border-t border-primary-foreground/10 animate-fade-in">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenu(false)} className="block px-6 py-3 text-primary-foreground hover:bg-primary-foreground/10 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
