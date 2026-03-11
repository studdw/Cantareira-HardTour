import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(11) 97840-5755",
    href: "https://api.whatsapp.com/message/S2MCOHMSIP74B1?autoload=1&app_absent=0&utm_source=ig",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    label: "Instagram",
    value: "@cantareirahardtour",
    href: "https://instagram.com/cantareirahardtour",
    color: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "cantareirahardtour@gmail.com",
    href: "mailto:cantareirahardtour@gmail.com",
    color: "bg-blue-600 hover:bg-blue-700",
  },
 ]

export function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-[family-name:var(--font-display)] text-sm tracking-[0.2em] mb-2 uppercase">
            Contato
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4 text-balance">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tire suas dúvidas ou faça sua reserva por qualquer um dos nossos canais de atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {contacts.map((contact) => (
            <Link
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${contact.color} text-primary-foreground rounded-xl p-6 text-center transition-transform hover:scale-105`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-foreground/10 flex items-center justify-center">
                <contact.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">{contact.label}</h3>
              <p className="text-sm opacity-90">{contact.value}</p>
            </Link>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 border border-border max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Localização</h3>
              <p className="text-muted-foreground mb-4">
                Mairiporã, SP - Serra da Cantareira<br />
                A 40km do centro de São Paulo
              </p>
              <Button variant="outline" asChild>
                <Link
                  href="https://www.google.com/maps/place/Cantareira+Hardtour/@-23.3664744,-46.6147346,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef19febbb6f0f:0x3c78bfd9da94c887!8m2!3d-23.3664793!4d-46.6121597!16s%2Fg%2F11r_xhjsfh?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver no Google Maps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
