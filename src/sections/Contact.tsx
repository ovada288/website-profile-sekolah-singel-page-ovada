import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })

      gsap.from(rightRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
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

  const contactItems = [
    { icon: MapPin, text: 'Jl. Pendidikan No. 123, Kota Harapan, Indonesia' },
    { icon: Phone, text: '(021) 838-4117-0699' },
    { icon: Mail, text: 'info@smaharapanbangsa.sch.id' },
    { icon: Clock, text: 'Senin – Jumat: 07.00 – 15.00 WIB' },
  ]

  const socials = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' },
  ]

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="w-full"
      style={{ background: '#F8F7F4', padding: '100px 24px' }}
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-2 md:gap-16">
        {/* Left Column */}
        <div ref={leftRef}>
          <span className="mb-4 inline-block font-label text-xs font-semibold uppercase tracking-[3px]" style={{ color: '#C9A84C' }}>
            HUBUNGI KAMI
          </span>
          <h2 className="text-3xl font-semibold font-display sm:text-4xl" style={{ color: '#1E293B' }}>
            Mulai Perjalananmu Bersama Kami
          </h2>
          <p className="mt-4 text-base leading-relaxed font-body" style={{ color: '#64748B' }}>
            Kami siap membantu Anda mengetahui lebih banyak tentang SMA Negeri 1 Harapan Bangsa. Kunjungi kampus kami atau hubungi tim kami.
          </p>

          <div className="mt-8 space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: '#C9A84C' }} />
                  <span className="text-sm font-body" style={{ color: '#1E293B' }}>
                    {item.text}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-8">
            {socials.map((social, i) => {
              const Icon = social.icon
              return (
                <a
                  key={i}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full"
                  style={{
                    border: '1px solid #E2E0D9',
                    color: '#1B2A4A',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.background = '#1B2A4A'
                    el.style.color = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.background = 'transparent'
                    el.style.color = '#1B2A4A'
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Right Column - Form */}
        <div ref={rightRef}>
          <div
            className="p-8 sm:p-10"
            style={{
              background: '#FFFFFF',
              borderRadius: 16,
              boxShadow: '0 4px 24px rgba(27,42,74,0.06)',
            }}
          >
            <h3 className="mb-6 text-xl font-semibold font-display" style={{ color: '#1E293B' }}>
              Kirim Pesan
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Nama Lengkap"
                required
                className="w-full rounded-lg border px-4 py-3 font-body text-sm outline-none transition-colors focus:border-[#C9A84C]"
                style={{ borderColor: '#E2E0D9', color: '#1E293B' }}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-lg border px-4 py-3 font-body text-sm outline-none transition-colors focus:border-[#C9A84C]"
                style={{ borderColor: '#E2E0D9', color: '#1E293B' }}
              />
              <input
                type="text"
                placeholder="Subjek"
                required
                className="w-full rounded-lg border px-4 py-3 font-body text-sm outline-none transition-colors focus:border-[#C9A84C]"
                style={{ borderColor: '#E2E0D9', color: '#1E293B' }}
              />
              <textarea
                placeholder="Pesan"
                required
                rows={4}
                className="w-full rounded-lg border px-4 py-3 font-body text-sm outline-none transition-colors focus:border-[#C9A84C]"
                style={{ borderColor: '#E2E0D9', color: '#1E293B' }}
              />
              <button
                type="submit"
                className="w-full text-sm font-semibold transition-all duration-300 font-label"
                style={{
                  background: '#C9A84C',
                  color: '#FFFFFF',
                  padding: '14px',
                  borderRadius: 8,
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#B8983F' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.background = '#C9A84C' }}
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
