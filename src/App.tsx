import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import StatsBanner from './sections/StatsBanner'
import About from './sections/About'
import VisionMission from './sections/VisionMission'
import Programs from './sections/Programs'
import Achievements from './sections/Achievements'
import Gallery from './sections/Gallery'
import Faculty from './sections/Faculty'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    let resizeTimer: ReturnType<typeof setTimeout>
    const debouncedResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(handleResize, 200)
    }
    window.addEventListener('resize', debouncedResize)
    return () => {
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ background: '#F8F7F4' }}>
      <Navigation />
      <Hero />
      <StatsBanner />
      <About />
      <VisionMission />
      <Programs />
      <Achievements />
      <Gallery />
      <Faculty />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
