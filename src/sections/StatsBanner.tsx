import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StatItemProps {
  end: number
  suffix: string
  label: string
  triggered: boolean
}

function StatItem({ end, suffix, label, triggered }: StatItemProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    let startTime: number | null = null
    const duration = 2000

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [triggered, end])

  return (
    <div className="text-center">
      <div className="font-display text-3xl font-bold sm:text-4xl md:text-[42px]" style={{ color: '#C9A84C' }}>
        {count}{suffix}
      </div>
      <div className="mt-2 font-label text-xs uppercase tracking-[1.5px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
        {label}
      </div>
    </div>
  )
}

export default function StatsBanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => setTriggered(true),
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { end: 1985, suffix: '', label: 'Tahun Berdiri' },
    { end: 2400, suffix: '+', label: 'Siswa Aktif' },
    { end: 98, suffix: '%', label: 'Kelulusan' },
    { end: 180, suffix: '+', label: 'Prestasi Nasional' },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ background: '#1B2A4A', padding: '48px 24px' }}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            end={stat.end}
            suffix={stat.suffix}
            label={stat.label}
            triggered={triggered}
          />
        ))}
      </div>
    </section>
  )
}
