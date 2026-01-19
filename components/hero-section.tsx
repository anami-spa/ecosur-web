import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { asset } from "@/lib/assets"

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "10K+", label: "Toneladas procesadas" },
  { value: "100%", label: "Trazabilidad" },
]

// Palabras del título con sus estilos
const titleWords = [
  { text: "Transformamos", className: "text-white" },
  { text: "metales", className: "text-ecosur-green", highlight: true },
  { text: "en", className: "text-white" },
  { text: "oportunidades", className: "text-ecosur-blue", highlight: true },
  { text: "sustentables", className: "text-white" },
]

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = hero.offsetHeight
      const opacity = Math.max(0, 1 - scrollY / heroHeight)
      const translateY = scrollY * 0.3

      hero.style.setProperty("--scroll-opacity", opacity.toString())
      hero.style.setProperty("--scroll-translate", `${translateY}px`)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // GSAP Animation
  useEffect(() => {
    const words = wordsRef.current.filter(Boolean)
    if (words.length === 0) return

    // Estado inicial
    gsap.set(words, {
      opacity: 0,
      y: 50,
      rotateX: -40,
    })

    // Timeline de animación
    const tl = gsap.timeline({ delay: 0.3 })

    words.forEach((word, index) => {
      const isHighlight = titleWords[index]?.highlight

      tl.to(
        word,
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        index * 0.12
      )

      // Efecto extra para palabras destacadas
      if (isHighlight) {
        tl.to(
          word,
          {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
          },
          index * 0.12 + 0.4
        ).to(
          word,
          {
            scale: 1,
            duration: 0.2,
            ease: "power2.inOut",
          },
          index * 0.12 + 0.6
        )
      }
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${asset("industrial-metal-recycling-plant-aerial-view-profe.jpg")}')`,
          transform: "translateY(var(--scroll-translate, 0))",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ecosur-dark/95 via-ecosur-dark/80 to-ecosur-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ecosur-dark/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ecosur-green/20 border border-ecosur-green/30 mb-8 animate-fade-in-up">
            <Recycle className="h-4 w-4 text-ecosur-green" />
            <span className="text-sm font-medium text-ecosur-green">Economía Circular</span>
          </div>

          {/* Heading con GSAP */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ perspective: "1000px" }}
          >
            {titleWords.map((word, index) => (
              <span
                key={word.text}
                ref={(el) => { wordsRef.current[index] = el }}
                className={`inline-block mr-[0.3em] ${word.className}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {word.text}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Somos líderes en reciclaje y valorización de metales no ferrosos en el sur de Chile. Ofrecemos soluciones
            integrales con total trazabilidad y compromiso ambiental.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="bg-ecosur-green hover:bg-ecosur-green/90 text-ecosur-dark font-semibold px-8"
            >
              <Link to="/contacto">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 bg-transparent"
            >
              <Link to="/servicios">Conocer Servicios</Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-ecosur-green mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-ecosur-green" />
        </div>
      </div>
    </section>
  )
}
