import { useState, useEffect } from 'react'
import { Menu, X, Shield } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Jurusan', href: '#jurusan' },
    { label: 'Prestasi', href: '#prestasi' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Kontak', href: '#kontak' },
  ]

  const scrollToSection = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 72,
          background: scrolled ? 'rgba(248,247,244,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 20px rgba(27,42,74,0.06)' : 'none',
        }}
      >
        <div className="mx-auto flex h-full items-center justify-between px-6 lg:px-12" style={{ maxWidth: 1280 }}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: '#1B2A4A' }}>
              <Shield className="h-5 w-5" style={{ color: '#C9A84C' }} />
            </div>
            <div className="flex flex-col">
              <span className="font-label text-sm font-semibold leading-tight" style={{ color: scrolled ? '#1E293B' : '#FFFFFF' }}>
                SMA Negeri 1
              </span>
              <span className="font-label text-xs font-normal leading-tight" style={{ color: scrolled ? '#64748B' : 'rgba(255,255,255,0.7)' }}>
                Harapan Bangsa
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-label text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:border-b-2"
                style={{
                  color: scrolled ? '#1E293B' : '#FFFFFF',
                  letterSpacing: '0.3px',
                  borderColor: '#C9A84C',
                  paddingBottom: 2,
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            className="hidden font-label text-sm font-semibold transition-all duration-300 hover:scale-[1.02] md:block"
            style={{
              background: '#C9A84C',
              color: '#FFFFFF',
              padding: '10px 24px',
              borderRadius: 6,
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#B8983F'
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#C9A84C'
            }}
          >
            PPDB Online
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: scrolled ? '#1E293B' : '#FFFFFF' }}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: '#1B2A4A', paddingTop: 80 }}
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-label text-lg font-medium uppercase tracking-wide"
                style={{ color: '#FFFFFF' }}
              >
                {link.label}
              </button>
            ))}
            <button
              className="mt-4 font-label text-sm font-semibold"
              style={{
                background: '#C9A84C',
                color: '#FFFFFF',
                padding: '12px 32px',
                borderRadius: 6,
              }}
            >
              PPDB Online
            </button>
          </div>
        </div>
      )}
    </>
  )
}
