import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { viewport } from './viewport'
import './globals.css'
import Analytics from '@/components/Analytics'

export { viewport }

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Экскаватор в Лиде — Аренда экскаватора с оператором 24/7 | 80 Br/час',
  description: 'Аренда экскаватора в Лиде и Лидском районе. Профессиональные услуги спецтехники: земляные работы, копка траншей, планировка участка, уборка снега. Выезд в течение 2 часов. Цена от 80 Br/час. Звоните: +375 29 784-95-44',
  keywords: 'экскаватор Лида, аренда экскаватора Лида, услуги экскаватора Лида, экскаватор с оператором Лида, земляные работы Лида, спецтехника Лида, копка траншей Лида, мини экскаватор Лида, заказ экскаватора Лида, аренда спецтехники Лида, уборка снега Лида, планировка участка Лида, погрузка песка Лида',
  authors: [{ name: 'Excavator Lida' }],
  creator: 'Excavator Lida',
  publisher: 'Excavator Lida',
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
  openGraph: {
    title: 'Экскаватор в Лиде — Аренда экскаватора с оператором 24/7',
    description: 'Аренда экскаватора в Лиде и Лидском районе. Земляные работы, копка траншей, планировка участка. Выезд в течение 2 часов. Цена от 80 Br/час. Звоните: +375 29 784-95-44',
    url: 'https://excavator-lida.by/',
    siteName: 'Excavator Lida',
    images: [
      {
        url: 'https://excavator-lida.by/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'Аренда экскаватора в Лиде',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Экскаватор в Лиде — Аренда экскаватора с оператором 24/7',
    description: 'Аренда экскаватора в Лиде и Лидском районе. Земляные работы, копка траншей, планировка участка. Выезд в течение 2 часов.',
    images: ['https://excavator-lida.by/img/logo.png'],
  },
  alternates: {
    canonical: 'https://excavator-lida.by/',
  },
  metadataBase: new URL('https://excavator-lida.by'),
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
}

// Структурированные данные Schema.org
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Excavator Lida',
  alternateName: 'Аренда экскаватора в Лиде',
  description: 'Аренда экскаватора в Лиде и Лидском районе. Профессиональные услуги спецтехники: земляные работы, копка траншей, планировка участка, уборка снега.',
  url: 'https://excavator-lida.by',
  logo: 'https://excavator-lida.by/img/logo.png',
  image: 'https://excavator-lida.by/img/amkodor.webp',
  telephone: '+375297849544',
  email: 'excavatorlida@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Лида',
    addressRegion: 'Гродненская область',
    addressCountry: 'BY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.8874,
    longitude: 25.2993,
  },
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '80 Br/час',
  currenciesAccepted: 'BYN',
  paymentAccepted: 'Cash, Credit Card',
  areaServed: {
    '@type': 'City',
    name: 'Лида',
  },
  serviceArea: {
    '@type': 'Place',
    name: 'Лидский район',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Услуги экскаватора',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Земляные работы',
        },
        price: '80',
        priceCurrency: 'BYN',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '80',
          priceCurrency: 'BYN',
          unitText: 'час',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Уборка снега',
        },
        price: '80',
        priceCurrency: 'BYN',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '80',
          priceCurrency: 'BYN',
          unitText: 'час',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Планировка участка',
        },
        price: '80',
        priceCurrency: 'BYN',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '80',
          priceCurrency: 'BYN',
          unitText: 'час',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Погрузка/выгрузка песка и гравия',
        },
        price: '80',
        priceCurrency: 'BYN',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '80',
          priceCurrency: 'BYN',
          unitText: 'час',
        },
      },
    ],
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Вера',
      },
      reviewBody: 'Очень понравилось, что приехали быстро и аккуратно убрали снег. Оператор вежливый, техника современная. Буду обращаться ещё!',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Андрей',
      },
      reviewBody: 'Работа выполнена качественно и в срок. Всё объяснили, помогли с выбором услуги. Спасибо за профессионализм!',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://instagram.com/strelkov9606',
    'https://t.me/sashaamkador',
  ],
  foundingDate: '2013',
  numberOfEmployees: '5',
  slogan: 'Быстро, качественно, недорого!',
  knowsAbout: ['Земляные работы', 'Аренда спецтехники', 'Копка траншей', 'Планировка участков', 'Уборка снега'],
  makesOffer: [
    {
      '@type': 'Offer',
      description: 'Аренда экскаватора с оператором',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит аренда экскаватора?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стоимость зависит от объёма и типа работ. Минимальная цена 80 Br/час. Позвоните нам или оставьте заявку — мы быстро рассчитаем цену под вашу задачу!',
      },
    },
    {
      '@type': 'Question',
      name: 'Как быстро вы приезжаете на объект?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Обычно мы выезжаем в течение 1-2 часов после подтверждения заказа. Работаем 24/7, без выходных!',
      },
    },
    {
      '@type': 'Question',
      name: 'Какие документы нужны для заказа?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для частных лиц — только телефон и адрес. Для организаций — реквизиты для договора. Всё просто!',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли заказать экскаватор на выходные или ночью?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, мы работаем круглосуточно и без выходных. Просто позвоните или оставьте заявку на сайте!',
      },
    },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Excavator Lida',
  url: 'https://excavator-lida.by',
  logo: 'https://excavator-lida.by/img/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+375297849544',
    contactType: 'customer service',
    availableLanguage: 'Russian',
    areaServed: 'BY',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Лида',
    addressRegion: 'Гродненская область',
    addressCountry: 'BY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Структурированные данные Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Дополнительные мета-теги для SEO */}
        <meta name="geo.region" content="BY" />
        <meta name="geo.placename" content="Лида" />
        <meta name="geo.position" content="53.8874;25.2993" />
        <meta name="ICBM" content="53.8874, 25.2993" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="176" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

