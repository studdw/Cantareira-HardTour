import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});
const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron"
});

export const metadata: Metadata = {
  title: 'CantareiraHard Tour | Passeios Off-Road em Mairiporã',
  description: 'Aventura off-road de motocross na Serra da Cantareira. Agende sua viagem e viva uma experiência única de adrenalina em Mairiporã, SP.',
  generator: 'v0.app',
  keywords: ['motocross', 'off-road', 'mairiporã', 'cantareira', 'aventura', 'trilha'],
  icons: {
    icon: '/images/img-sfundo.png',
    apple: '/images/img-sfundo.png',
    shortcut: '/images/img-sfundo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
