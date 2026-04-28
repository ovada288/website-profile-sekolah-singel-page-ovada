import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: 'SMA Negeri 1 Harapan Bangsa bukan sekadar sekolah — ini adalah tempat saya menemukan jati diri dan passion untuk sains. Guru-gurunya luar biasa supportive.',
    name: 'Andi Wijaya',
    role: 'Alumni 2020 — Mahasiswa Kedokteran UI',
    image: '/testimonial-1.jpg',
  },
  {
    quote: 'Pendidikan karakter di sekolah ini sungguh istimewa. Anak saya tidak hanya pintar, tapi juga punya empati dan kepedulian sosial yang tinggi.',
    name: 'Ibu Marlena',
    role: 'Orang Tua Siswa',
    image: '/testimonial-2.jpg',
  },
  {
    quote: 'Fasilitas dan kurikulumnya sangat mendukung pengembangan bakat. Tim basket saya berkembang pesat berkat dukungan penuh dari sekolah.',
    name: 'Dimas Pratama',
    role: 'Siswa Kelas 12 — Captain Tim Basket',
    image: '/testimonial-3.jpg',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.testimonial-card')
      if (cards && cards.length > 0) {
        gsap.from(Array.from(cards), {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ background: '#1B2A4A', padding: '120px 24px' }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-label text-xs font-semibold uppercase tracking-[3px]" style={{ color: '#C9A84C' }}>
            TESTIMONI
          </span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: '#FFFFFF' }}>
            Apa Kata Mereka?
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:bg-white/10 lg:flex"
            style={{
              width: 40,
              height: 40,
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <ChevronLeft className="h-5 w-5" style={{ color: 'rgba(255,255,255,0.6)' }} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:bg-white/10 lg:flex"
            style={{
              width: 40,
              height: 40,
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <ChevronRight className="h-5 w-5" style={{ color: 'rgba(255,255,255,0.6)' }} />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-0 lg:px-16">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="testimonial-card w-full flex-shrink-0 px-0 sm:px-4 lg:w-1/3"
                >
                  <div
                    className="relative"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 16,
                      padding: 40,
                    }}
                  >
                    <Quote
                      className="absolute left-6 top-6 h-12 w-12"
                      style={{ color: '#C9A84C', opacity: 0.3 }}
                    />
                    <p
                      className="relative z-10 pt-8 font-display text-lg italic leading-relaxed"
                      style={{ color: 'rgba(255,255,255,0.9)' }}
                    >
                      "{t.quote}"
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-label text-sm font-semibold" style={{ color: '#FFFFFF' }}>
                          {t.name}
                        </p>
                        <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: currentIndex === i ? 24 : 8,
                  background: currentIndex === i ? '#C9A84C' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
