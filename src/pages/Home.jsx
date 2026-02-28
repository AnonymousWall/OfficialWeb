import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Features from '../components/Features.jsx'
import Screenshots from '../components/Screenshots.jsx'
import DownloadCTA from '../components/DownloadCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Screenshots />
      <DownloadCTA />
      <Footer />
    </div>
  )
}
