import { useState } from "react";
import { products, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const categories = [
  { key: "todos", label: "Todos" },
  { key: "camisas", label: "Camisas" },
  { key: "bandeiras", label: "Bandeiras" },
  { key: "acessorios", label: "Acessórios" },
  { key: "personalizados", label: "Personalizados" },
];

const ProductCatalog = () => {
  const [filter, setFilter] = useState("todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = filter === "todos" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="produtos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3">
            Nossos <span className="text-primary">Produtos</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Encontre tudo para torcer com estilo na Copa do Brasil
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                filter === cat.key
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
          ))}
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};

export default ProductCatalog;
