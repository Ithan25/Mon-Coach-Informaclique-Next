import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import PackVitrine from '@/components/sections/PackVitrine'
import Abonnement from '@/components/sections/Abonnement'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import CustomCursor from '@/components/ui/CustomCursor'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Services />
        <PackVitrine />
        <Abonnement />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
