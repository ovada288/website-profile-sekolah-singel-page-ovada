import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const teachers = [
  {
    name: 'Dra. Siti Aminah, M.Pd.',
    role: 'Kepala Sekolah',
    bio: 'Memimpin SMA Negeri 1 Harapan Bangsa sejak 2018 dengan visi transformasi pendidikan berbasis karakter.',
    image: '/teacher-1.jpg',
  },
  {
    name: 'Dr. Budi Santoso, M.Si.',
    role: 'Wakasek Kurikulum',
    bio: 'Ahli kurikulum dengan 20 tahun pengalaman mengajar matematika dan sains.',
    image: '/teacher-2.jpg',
  },
  {
    name: 'Hj. Rina Wulandari, S.Pd., M.Pd.',
    role: 'Wakasek Kesiswaan',
    bio: 'Dedikasi penuh untuk pembentukan karakter dan pengembangan bakat siswa.',
    image: '/teacher-3.jpg',
  },
  {
    name: 'Agus Hermawan, S.T., M.Pd.',
    role: 'Koordinator Teknologi',
    bio: 'Memimpin jurusan teknologi dengan latar belakang engineer dan pendidik.',
    image: '/teacher-4.jpg',
  },
]

export default function Faculty() {
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
      ref={sectionRef}
      className="w-full"
      style={{ background: '#F8F7F4', padding: '120px 24px' }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-label text-xs font-semibold uppercase tracking-[3px]" style={{ color: '#C9A84C' }}>
            TENAGA PENGAJAR
          </span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: '#1E293B' }}>
            Guru Berdedikasi, Penggerak Perubahan
          </h2>
        </div>

        {/* Teachers Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, i) => (
            <div
              key={teacher.name}
              ref={(el) => { cardsRef.current[i] = el }}
              className="text-center transition-all duration-400"
              style={{
                background: '#FFFFFF',
                borderRadius: 16,
                padding: 32,
                border: '1px solid #E2E0D9',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-6px)'
                el.style.boxShadow = '0 16px 32px rgba(27,42,74,0.06)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              <div className="mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full" style={{ border: '3px solid #C9A84C' }}>
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-lg font-semibold" style={{ color: '#1E293B' }}>
                {teacher.name}
              </h3>
              <p className="mt-1 font-label text-xs font-medium uppercase tracking-wide" style={{ color: '#C9A84C' }}>
                {teacher.role}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed" style={{ color: '#64748B' }}>
                {teacher.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
