import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap, Target, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    icon: GraduationCap,
    title: 'Visi',
    body: 'Menjadi sekolah menengah atas unggulan yang menghasilkan lulusan berprestasi, berkarakter mulia, dan mampu bersaing di tingkat nasional maupun internasional.',
  },
  {
    icon: Target,
    title: 'Misi',
    body: 'Menyelenggarakan pendidikan berkualitas dengan pendekatan pembelajaran aktif, mengembangkan potensi akademik dan non-akademik, serta membentuk karakter siswa yang berintegritas dan berdaya saing tinggi.',
  },
  {
    icon: Heart,
    title: 'Nilai-Nilai',
    body: 'Integritas, disiplin, kreativitas, kepedulian sosial, dan semangat keunggulan menjadi landasan setiap aktivitas dan interaksi di lingkungan sekolah kami.',
  },
]

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: 'power3.out',
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
      ref={sectionRef}
      className="w-full"
      style={{ background: '#FFFFFF', padding: '120px 24px' }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-label text-xs font-semibold uppercase tracking-[3px]" style={{ color: '#C9A84C' }}>
            VISI & MISI
          </span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: '#1E293B' }}>
            Membangun Karakter, Meraih Prestasi
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                ref={(el) => { cardsRef.current[i] = el }}
                className="group transition-all duration-400"
                style={{
                  background: '#F8F7F4',
                  borderRadius: 16,
                  padding: '40px 32px',
                  border: '1px solid #E2E0D9',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = '0 20px 40px rgba(27,42,74,0.08)'
                  el.style.borderColor = '#C9A84C'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                  el.style.borderColor = '#E2E0D9'
                }}
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: 'rgba(201,168,76,0.12)' }}
                >
                  <Icon className="h-6 w-6" style={{ color: '#C9A84C' }} />
                </div>
                <h3 className="font-display text-xl font-semibold sm:text-[22px]" style={{ color: '#1E293B' }}>
                  {card.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed" style={{ color: '#64748B' }}>
                  {card.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
