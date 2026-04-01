import { Heart, Trophy, Users, Truck } from "lucide-react";

const stats = [
  { icon: Users, value: "10.000+", label: "Clientes felizes" },
  { icon: Trophy, value: "5 anos", label: "No mercado" },
  { icon: Truck, value: "27 estados", label: "Entregamos" },
  { icon: Heart, value: "99%", label: "Aprovação" },
];

const AboutSection = () => (
  <section id="sobre" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4 text-foreground">
          Sobre a <span className="text-gradient-green">Spike Sports</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Somos apaixonados por futebol brasileiro. Nascemos com a missão de levar produtos de qualidade
          para torcedores de todo o país. Cada item é selecionado com carinho para que você viva a emoção
          do esporte dentro e fora dos estádios.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="text-center p-6 bg-secondary rounded-xl border border-border">
            <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
            <p className="font-heading font-extrabold text-2xl md:text-3xl text-foreground">{stat.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;