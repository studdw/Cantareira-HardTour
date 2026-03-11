"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Pilotos em trilha de lama na floresta",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Grupo de motociclistas no mirante",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Piloto saltando sobre rampa de terra",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Travessia de riacho na trilha",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-[family-name:var(--font-display)] text-sm tracking-[0.2em] mb-2 uppercase">
            Galeria
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4 text-balance">
            Momentos de Aventura
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Confira algumas fotos das nossas trilhas e aventuras na Serra da Cantareira.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  Ver foto
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors p-2"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-foreground hover:text-primary transition-colors p-2"
            aria-label="Anterior"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 text-foreground hover:text-primary transition-colors p-2"
            aria-label="Próxima"
          >
            <ChevronRight size={40} />
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
