import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Trilha de motocross na Serra da Cantareira"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-[family-name:var(--font-display)] text-sm md:text-base tracking-[0.3em] mb-4 uppercase">
            Passeios Off-Road em Mairiporã
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            <span className="text-foreground">VIVA A</span>{" "}
            <span className="text-primary">ADRENALINA</span>{" "}
            <span className="text-foreground">NA SERRA DA CANTAREIRA</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 text-pretty">
            Experiências únicas de motocross em trilhas desafiadoras. 
            Aventura, natureza e muita emoção esperam por você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="#agendar">Agendar Agora</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
              <Link href="#pacotes">Ver Pacotes</Link>
            </Button>
          </div>
        </div>
      </div>

      <Link
        href="#pacotes"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={40} />
      </Link>
    </section>
  )
}
