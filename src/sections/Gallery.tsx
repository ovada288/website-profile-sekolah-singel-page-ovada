import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = [
  { src: '/gallery-1.jpg', alt: 'Tarian Tradisional' },
  { src: '/gallery-2.jpg', alt: 'Laboratorium Sains' },
  { src: '/gallery-3.jpg', alt: 'Lapangan Olahraga' },
  { src: '/gallery-4.jpg', alt: 'Orkestra Sekolah' },
  { src: '/gallery-5.jpg', alt: 'Perpustakaan' },
  { src: '/gallery-6.jpg', alt: 'Wisuda' },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, i) => {
        if (img) {
          gsap.from(img, {
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="galeri"
      ref={sectionRef}
      className="w-full"
      style={{ background: '#FFFFFF', padding: '120px 24px' }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-label text-xs font-semibold uppercase tracking-[3px]" style={{ color: '#C9A84C' }}>
            GALERI
          </span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: '#1E293B' }}>
            Momen Berharga di Sekolah Kami
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] font-body text-base leading-relaxed" style={{ color: '#64748B' }}>
            Cuplikan kehidupan sekolah — dari kelas hingga panggung prestasi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              ref={(el) => { imagesRef.current[i] = el }}
              className="group cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition-all duration-400 group-hover:scale-[1.03] group-hover:brightness-105 sm:h-72"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
