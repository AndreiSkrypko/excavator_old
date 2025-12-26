import Hero from '@/components/Hero'
import Header from '@/components/Header'
import DiscountBanner from '@/components/DiscountBanner'
import Pricing from '@/components/Pricing'
import Advantages from '@/components/Advantages'
import HowToOrder from '@/components/HowToOrder'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ContactButton from '@/components/ContactButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Header />
      <DiscountBanner />
      <Pricing />
      <Advantages />
      <HowToOrder />
      <Services />
      <FAQ />
      <Reviews />
      <ContactButton />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

