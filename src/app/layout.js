import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

// SEO Metadata
export const metadata = {
  metadataBase: new URL('https://www.moncoachinformaclique.fr'),
  title: {
    default: 'Mon Coach Informaclique | Dépannage & Formation Informatique à Nantes',
    template: '%s | Mon Coach Informaclique',
  },
  description: 'Dépannage informatique à domicile, formation personnalisée et création de sites web vitrines à Nantes. Plus de 10 ans d\'expérience. Devis gratuit !',
  keywords: ['dépannage informatique', 'formation informatique', 'site web vitrine', 'Nantes', 'coach informatique', 'réparation ordinateur', 'aide numérique'],
  authors: [{ name: 'Mon Coach Informaclique' }],
  creator: 'Mon Coach Informaclique',
  publisher: 'Mon Coach Informaclique',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.moncoachinformaclique.fr',
    siteName: 'Mon Coach Informaclique',
    title: 'Mon Coach Informaclique | Dépannage & Formation Informatique à Nantes',
    description: 'Dépannage informatique à domicile, formation personnalisée et création de sites web vitrines à Nantes. Devis gratuit !',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mon Coach Informaclique - Dépannage informatique à Nantes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mon Coach Informaclique | Dépannage & Formation Informatique à Nantes',
    description: 'Dépannage informatique à domicile, formation personnalisée et création de sites web vitrines à Nantes.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.moncoachinformaclique.fr',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'XRHDYB0cC6AIxlU3PeNwWGOdcWZ3m0_pksXglznJGrg',
  },
}

// JSON-LD Structured Data for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.moncoachinformaclique.fr',
  name: 'Mon Coach Informaclique',
  description: 'Dépannage informatique à domicile, formation personnalisée et création de sites web vitrines à Nantes',
  url: 'https://www.moncoachinformaclique.fr',
  telephone: '+33640749962',
  email: 'contact@moncoachinformaclique.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nantes',
    addressRegion: 'Loire-Atlantique',
    postalCode: '44000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.218371,
    longitude: -1.553621,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 47.218371,
      longitude: -1.553621,
    },
    geoRadius: '30000',
  },
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/ithan-boismardgillot/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services informatiques',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dépannage informatique à domicile',
          description: 'Diagnostic et réparation de vos problèmes informatiques directement chez vous',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Formation informatique',
          description: 'Cours personnalisés pour maîtriser Windows, Office, internet et vos logiciels',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Création de sites web vitrines',
          description: 'Sites web professionnels pour commerces et artisans',
        },
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FF6B6B" />
        <link rel="canonical" href="https://www.moncoachinformaclique.fr" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
