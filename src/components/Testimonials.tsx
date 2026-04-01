import { Star } from "lucide-react";

const testimonials = [
  { name: "Carlos Silva", city: "São Paulo, SP", text: "Camisa de qualidade incrível! Chegou antes do prazo. Usei no jogo e recebi vários elogios. Loja top!", rating: 5 },
  { name: "Ana Souza", city: "Rio de Janeiro, RJ", text: "Comprei o kit completo para a família. Todos amaram! Atendimento excelente e preços justos.", rating: 5 },
  { name: "Pedro Santos", city: "Belo Horizonte, MG", text: "O cachecol é lindo e o chaveiro ficou perfeito na minha coleção. Já estou planejando a próxima compra!", rating: 5 },
  { name: "Mariana Lima", city: "Salvador, BA", text: "Presente perfeito pro meu pai que é fanático por futebol. A caneca é linda e a entrega foi super rápida!", rating: 5 },
];

const Testimonials = () => (
  <section id="depoimentos" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3">
          O que nossos <span className="text-primary">torcedores</span> dizem
        </h2>
        <p className="text-muted-foreground">+10 mil clientes satisfeitos em todo o Brasil</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-muted/30 border border-border rounded-xl p-6 hover:shadow-card transition-shadow">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-card-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
            <div>
              <p className="font-heading font-bold text-sm text-card-foreground">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
