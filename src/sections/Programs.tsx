import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const programs = [
  {
    num: '01',
    name: 'MIPA',
    fullName: 'Matematika & Ilmu Pengetahuan Alam',
    desc: 'Program unggulan untuk siswa yang berbakat dalam bidang sains, matematika, dan teknologi. Persiapkan diri untuk kuliah di jurusan teknik, kedokteran, dan ilmu pengetahuan.',
    tags: ['Fisika', 'Kimia', 'Biologi', 'Matematika'],
  },
  {
    num: '02',
    name: 'IPS',
    fullName: 'Ilmu Pengetahuan Sosial',
    desc: 'Mengembangkan pemahaman mendalam tentang ekonomi, sosiologi, dan geografi. Ideal untuk siswa yang bercita-cita di bidang bisnis, hukum, dan pemerintahan.',
    tags: ['Ekonomi', 'Sosiologi', 'Geografi', 'Sejarah'],
  },
  {
    num: '03',
    name: 'Bahasa',
    fullName: '',
    desc: 'Program untuk siswa yang passionate dengan bahasa dan sastra. Membekali dengan kemampuan komunikasi multibahasa dan apresiasi terhadap kebudayaan global.',
    tags: ['Bahasa Inggris', 'Bahasa Indonesia', 'Sastra', 'Public Speaking'],
  },
  {
    num: '04',
    name: 'Teknologi',
    fullName: '',
    desc: 'Jurusan terbaru yang menggabungkan teknologi informasi dengan kurikulum SMA. Siswa mempelajari programming, desain digital, dan sistem informasi.',
    tags: ['Programming', 'Desain UI/UX', 'Data Science', 'Robotika'],
  },
]

export default function Programs() {
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
            delay: i * 0.12,
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
      id="jurusan"
      ref={sectionRef}
      className="w-full"
      style={{ background: '#1B2A4A', padding: '120px 24px' }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-16">
          <span className="mb-4 inline-block font-label text-xs font-semibold uppercase tracking-[3px]" style={{ color: '#C9A84C' }}>
            PROGRAM KEAHLIAN
          </span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: '#FFFFFF' }}>
            Pilihan Jurusan untuk Masa Depan Gemilang
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Kami menawarkan program studi yang dirancang sesuai kebutuhan dunia kerja dan pendidikan tinggi, dengan fasilitas praktik terbaik di kelasnya.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mx-auto grid max-w-[1000px] gap-6 sm:grid-cols-2">
          {programs.map((program, i) => (
            <div
              key={program.num}
              ref={(el) => { cardsRef.current[i] = el }}
              className="transition-all duration-400"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: '36px 32px',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(201,168,76,0.4)'
                el.style.background = 'rgba(255,255,255,0.09)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.1)'
                el.style.background = 'rgba(255,255,255,0.06)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div
                className="mb-4 flex h-8 w-8 items-center justify-center"
                style={{
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: 4,
                }}
              >
                <span className="font-label text-sm font-bold" style={{ color: '#C9A84C' }}>
                  {program.num}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold sm:text-2xl" style={{ color: '#FFFFFF' }}>
                {program.name}
              </h3>
              {program.fullName && (
                <p className="mt-1 font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {program.fullName}
                </p>
              )}
              <p className="mt-4 font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {program.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs font-medium"
                    style={{ color: '#C9A84C' }}
                  >
                    {tag}
                    {tag !== program.tags[program.tags.length - 1] && (
                      <span className="ml-2" style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
