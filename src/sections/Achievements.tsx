import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Trophy } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    category: 'Akademik',
    title: 'Juara 1 Olimpiade Sains Nasional',
    desc: 'Siswa kami meraih medali emas dalam Olimpiade Fisika tingkat nasional, mengalahkan 500+ peserta dari seluruh Indonesia.',
  },
  {
    category: 'Olahraga',
    title: 'Champion Basket Porda 2024',
    desc: 'Tim basket putra SMA Negeri 1 Harapan Bangsa menjadi juara pertama dalam kompetisi antar sekolah se-provinsi.',
  },
  {
    category: 'Seni',
    title: 'Best Performance Festival Musik',
    desc: 'Orkestra sekolah kami meraih penghargaan Best Performance dalam festival musik klasik tingkat nasional.',
  },
  {
    category: 'Teknologi',
    title: '1st Place Robotics Competition',
    desc: 'Tim robotika kami memenangkan kompetisi robot line-follower tingkat nasional dengan desain inovatif.',
  },
  {
    category: 'Bahasa',
    title: 'Debate Champion English Day',
    desc: 'Tim debat bahasa Inggris kami menjadi juara dalam kompetisi debat antar SMA se-kawasan.',
  },
  {
    category: 'Sosial',
    title: 'Best School Community Service',
    desc: 'Program pengabdian masyarakat sekolah kami dinobatkan sebagai program terbaik oleh Dinas Pendidikan.',
  },
]

export default function Achievements() {
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
            delay: i * 0.1,
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
      id="prestasi"
      ref={sectionRef}
      className="w-full"
      style={{ background: '#F8F7F4', padding: '120px 24px' }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-label text-xs font-semibold uppercase tracking-[3px]" style={{ color: '#C9A84C' }}>
            PRESTASI
          </span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: '#1E293B' }}>
            Pencapaian yang Membanggakan
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => { cardsRef.current[i] = el }}
              style={{
                background: '#FFFFFF',
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid #E2E0D9',
              }}
            >
              <div className="flex flex-col items-center pt-8">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: 'rgba(201,168,76,0.1)' }}
                >
                  <Trophy className="h-5 w-5" style={{ color: '#C9A84C' }} />
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 text-center">
                <span
                  className="mb-3 inline-block font-label text-xs font-semibold uppercase tracking-wide"
                  style={{
                    color: '#1B2A4A',
                    background: '#E2E0D9',
                    padding: '4px 12px',
                    borderRadius: 4,
                  }}
                >
                  {item.category}
                </span>
                <h3 className="font-display text-lg font-semibold" style={{ color: '#1E293B' }}>
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed" style={{ color: '#64748B' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
