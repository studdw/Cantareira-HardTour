import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, Star, Crown } from "lucide-react"

const packages = [
  {
    name: "Iniciante",
    price: "R$ 250",
    description: "Perfeito para quem está começando no mundo off-road",
    icon: Zap,
    features: [
      "Trilha de 15km",
      "Duração: 2 horas",
      "Guia experiente",
      "Equipamentos básicos inclusos",
      "Fotos da aventura",
      "Água e lanche",
    ],
    popular: false,
  },
  {
    name: "Intermediário",
    price: "R$ 450",
    description: "Para quem busca mais desafio e adrenalina",
    icon: Star,
    features: [
      "Trilha de 30km",
      "Duração: 4 horas",
      "Guia experiente",
      "Equipamentos completos inclusos",
      "Fotos e vídeos profissionais",
      "Almoço incluso",
      "Travessia de riachos",
      "Mirantes exclusivos",
    ],
    popular: true,
  },
  {
    name: "Hard",
    price: "R$ 750",
    description: "O máximo da aventura para pilotos experientes",
    icon: Crown,
    features: [
      "Trilha de 50km",
      "Duração: dia inteiro",
      "Guia especializado",
      "Equipamentos premium",
      "Cobertura completa de mídia",
      "Refeições incluídas",
      "Trechos técnicos avançados",
      "Certificado de conclusão",
      "Brinde exclusivo",
    ],
    popular: false,
  },
]

export function PackagesSection() {
  return (
    <section id="pacotes" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-[family-name:var(--font-display)] text-sm tracking-[0.2em] mb-2 uppercase">
            Nossos Pacotes
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4 text-balance">
            Escolha Sua Aventura
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Temos opções para todos os níveis de experiência. 
            Cada pacote foi pensado para proporcionar a melhor experiência off-road.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                pkg.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MAIS POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <pkg.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-display)] text-2xl">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {pkg.description}
                </CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground">/pessoa</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link href="#agendar">Reservar Agora</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
