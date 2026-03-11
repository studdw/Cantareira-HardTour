import Image from "next/image"
import { Shield, Users, MapPin, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Equipamentos de proteção de alta qualidade e guias treinados para sua segurança.",
  },
  {
    icon: Users,
    title: "Experiência",
    description: "Mais de 5 anos conduzindo aventuras inesquecíveis na Serra da Cantareira.",
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "Trilhas exclusivas em Mairiporã, a apenas 40km de São Paulo.",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Motos revisadas e equipamentos premium para a melhor experiência.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-[family-name:var(--font-display)] text-sm tracking-[0.2em] mb-2 uppercase">
              Sobre Nós
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-6 text-balance">
              A Maior Aventura Off-Road de São Paulo
            </h2>
            <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
              A CantareiraHard Tour nasceu da paixão pelo motocross e pela natureza. 
              Nossa missão é proporcionar experiências únicas de aventura nas trilhas 
              da Serra da Cantareira, um dos maiores parques urbanos do mundo.
            </p>
            <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
              Com guias experientes, equipamentos de primeira linha e trilhas 
              cuidadosamente selecionadas, garantimos diversão e segurança para 
              iniciantes e pilotos experientes.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/img-fundo.png"
                alt="CantareiraHard Tour Logo"
                fill
                className="object-contain bg-foreground/5 p-8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
              <div className="text-4xl font-bold font-[family-name:var(--font-display)]">500+</div>
              <div className="text-sm">Aventuras realizadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
