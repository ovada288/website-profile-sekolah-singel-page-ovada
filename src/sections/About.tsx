import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const leftElements = leftRef.current?.children
      if (leftElements) {
        gsap.from(Array.from(leftElements), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        })
      }

      gsap.from(rightRef.current, {
        x: 60,
        opacity: 0,
        rotation: 5,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="w-full"
      style={{ background: '#F8F7F4', padding: '120px 24px' }}
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 md:grid-cols-[55%_45%] md:gap-16">
        {/* Left Column */}
        <div ref={leftRef}>
          <span className="mb-4 inline-block font-label text-xs font-semibold uppercase tracking-[3px]" style={{ color: '#C9A84C' }}>
            TENTANG KAMI
          </span>

          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[40px]" style={{ color: '#1E293B' }}>
            Menjadi Sekolah Pilihan yang Menginspirasi
          </h2>

          <p className="mt-6 font-body text-base leading-relaxed" style={{ color: '#64748B' }}>
            Didirikan pada tahun 1985, SMA Negeri 1 Harapan Bangsa telah menjadi pilar pendidikan berkualitas di wilayah ini. Kami percaya bahwa setiap siswa memiliki potensi unik yang layak dikembangkan melalui pendidikan holistik — akademik, karakter, dan kreativitas.
          </p>

          <p className="mt-4 font-body text-base leading-relaxed" style={{ color: '#64748B' }}>
            Dengan fasilitas modern, tenaga pengajar berdedikasi, dan kurikulum yang relevan, kami mempersiapkan siswa untuk menjadi pemimpin masa depan yang berintegritas, berwawasan luas, dan siap menghadapi tantangan global.
          </p>

          <button
            className="mt-8 inline-flex items-center gap-2 font-label text-sm font-semibold transition-all duration-300 group"
            style={{ color: '#1B2A4A' }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#C9A84C' }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#1B2A4A' }}
          >
            Pelajari Visi & Misi
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Column */}
        <div ref={rightRef} className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/about-image.jpg"
              alt="Classroom"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Inset Frame */}
          <div
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg"
            style={{ border: '3px solid #C9A84C' }}
          />
        </div>
      </div>
    </section>
  )
}
