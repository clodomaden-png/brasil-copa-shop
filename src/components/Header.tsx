import { ShoppingCart, Menu, X, Zap } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <Zap className="h-7 w-7 text-primary" />
          <span className="font-heading font-extrabold text-xl text-foreground tracking-tight">
            SPIKE<span className="text-primary"> SPORTS</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary font-medium text-sm transition-colors uppercase tracking-wider">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => setIsOpen(true)} className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse-slow">
                {itemCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2 text-foreground">
            {mobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <nav className="md:hidden bg-card border-t border-border animate-fade-in">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenu(false)} className="block px-6 py-3 text-muted-foreground hover:text-primary hover:bg-secondary font-medium uppercase tracking-wider text-sm">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;