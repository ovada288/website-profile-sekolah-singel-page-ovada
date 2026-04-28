import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.to(labelRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out' })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6')
      .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .to(scrollIndicatorRef.current, { opacity: 0.6, duration: 0.6 }, '-=0.3')
  }, [])

  return (
    <section
      id="beranda"
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '100vh', minHeight: 600 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(27,42,74,0.55) 0%, rgba(27,42,74,0.75) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center">
        <span
          ref={labelRef}
          className="mb-6 inline-block font-label text-xs font-semibold uppercase tracking-[3px]"
          style={{ color: '#C9A84C', opacity: 0 }}
        >
          PENDIDIKAN BERKUALITAS UNTUK GENERASI EMAS
        </span>

        <h1
          ref={titleRef}
          className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-[52px]"
          style={{ color: '#FFFFFF', opacity: 0, transform: 'translateY(40px)' }}
        >
          Membangun Masa Depan,
          <br />
          <span className="relative inline-block">
            Satu Generasi Emas
            <span
              className="absolute -bottom-1 left-0 h-[3px] w-full"
              style={{ background: '#C9A84C' }}
            />
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-6 max-w-[600px] font-body text-base leading-relaxed sm:text-lg"
          style={{ color: 'rgba(255,255,255,0.85)', opacity: 0, transform: 'translateY(30px)' }}
        >
          SMA Negeri 1 Harapan Bangsa — tempat impian bertemu dedikasi, dan setiap siswa diberdayakan untuk meraih prestasi terbaik.
        </p>

        <div
          ref={buttonsRef}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <button
            className="font-label text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: '#C9A84C',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: 8,
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#B8983F' }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = '#C9A84C' }}
            onClick={() => document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jelajahi Sekolah
          </button>
          <button
            className="font-label text-sm font-semibold transition-all duration-300"
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: 8,
              border: '1.5px solid #FFFFFF',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.12)' }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = 'transparent' }}
          >
            Daftar PPDB
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{ opacity: 0 }}
      >
        <span className="mb-2 block font-label text-[11px] font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Scroll
        </span>
        <ChevronDown
          className="mx-auto h-5 w-5 animate-bounce"
          style={{ color: 'rgba(255,255,255,0.6)', animationDuration: '1.5s' }}
        />
      </div>
    </section>
  )
}
