import { Shield, MapPin, Phone, Mail } from 'lucide-react'

const navLinks = ['Beranda', 'Tentang', 'Jurusan', 'Prestasi', 'Galeri']
const infoLinks = ['PPDB Online', 'Kalender Akademik', 'Download Formulir', 'FAQ']

export default function Footer() {
  const scrollToSection = (label: string) => {
    const map: Record<string, string> = {
      Beranda: '#beranda',
      Tentang: '#tentang',
      Jurusan: '#jurusan',
      Prestasi: '#prestasi',
      Galeri: '#galeri',
    }
    const href = map[label]
    if (href) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full" style={{ background: '#1B2A4A', padding: '64px 24px 32px' }}>
      <div className="mx-auto max-w-[1280px]">
        {/* Top Area */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Shield className="h-5 w-5" style={{ color: '#C9A84C' }} />
              </div>
              <span className="font-display text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                SMA Negeri 1
                <br />
                Harapan Bangsa
              </span>
            </div>
            <p className="mt-4 font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Membangun generasi emas Indonesia sejak 1985.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="mb-4 font-label text-sm font-semibold uppercase tracking-wide" style={{ color: '#C9A84C' }}>
              Navigasi
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="font-body text-sm transition-colors duration-300 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4 font-label text-sm font-semibold uppercase tracking-wide" style={{ color: '#C9A84C' }}>
              Informasi
            </h4>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link}>
                  <span className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="mb-4 font-label text-sm font-semibold uppercase tracking-wide" style={{ color: '#C9A84C' }}>
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: '#C9A84C' }} />
                <span className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Jl. Pendidikan No. 123, Kota Harapan
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: '#C9A84C' }} />
                <span className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  (021) 555-7890
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: '#C9A84C' }} />
                <span className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  info@smaharapanbangsa.sch.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full" style={{ background: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © 2024 SMA Negeri 1 Harapan Bangsa. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6">
            <span className="font-body text-xs cursor-pointer hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Kebijakan Privasi
            </span>
            <span className="font-body text-xs cursor-pointer hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Syarat Penggunaan
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
