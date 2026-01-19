import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import { SkipToContent } from "@/components/skip-to-content"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "ECOSUR SPA | Reciclaje y Valorización de Metales",
  description:
    "Empresa líder en reciclaje y valorización de metales no ferrosos en el sur de Chile. Comprometidos con la economía circular y la sustentabilidad.",
  keywords: ["reciclaje", "metales no ferrosos", "economía circular", "sustentabilidad", "Chile", "Concepción"],
  authors: [{ name: "ECOSUR SPA" }],
  creator: "Anami SPA",
  openGraph: {
    title: "ECOSUR SPA | Reciclaje y Valorización de Metales",
    description: "Empresa líder en reciclaje y valorización de metales no ferrosos en el sur de Chile.",
    type: "website",
    locale: "es_CL",
    siteName: "ECOSUR SPA",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECOSUR SPA | Reciclaje y Valorización de Metales",
    description: "Empresa líder en reciclaje y valorización de metales no ferrosos en el sur de Chile.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: "#4cc63d",
  width: "device-width",
  initialScale: 1,
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "ECOSUR SPA",
  description: "Empresa líder en reciclaje y valorización de metales no ferrosos en el sur de Chile.",
  url: "https://ecosurspa.com",
  logo: "https://ecosurspa.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Caupolicán 1580",
    addressLocality: "Concepción",
    addressRegion: "Biobío",
    postalCode: "4030000",
    addressCountry: "CL",
  },
  telephone: "+56412460097",
  email: "contacto@ecosurspa.com",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "18:30",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -36.827,
      longitude: -73.0503,
    },
    geoRadius: "500000",
  },
  sameAs: ["https://www.linkedin.com/company/ecosurspa"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`${poppins.className} font-sans antialiased`}>
        <LanguageProvider>
          <SkipToContent />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
