import { useRef, useCallback } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import BookingMock from './BookingMock'

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const rafId = useRef<number>(0)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const hero = heroRef.current
    const card = cardRef.current
    if (!hero || !card) return

    cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1

      const rotateY = x * 16
      const rotateX = -y * 12
      const translateX = x * 22
      const translateY = y * 18

      // Dynamic shadow shifts opposite to tilt for realistic lighting
      const shadowX = -x * 30
      const shadowY = -y * 30 + 25

      card.style.transition = 'transform 0.15s ease-out, box-shadow 0.15s ease-out'
      card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale3d(1.025, 1.025, 1.025)`
      card.style.boxShadow =
        `${shadowX}px ${shadowY}px 70px -10px rgba(0,0,0,0.14), 0 10px 30px -5px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.9)`
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    card.style.transform =
      'rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale3d(1, 1, 1)'
    card.style.boxShadow =
      '0px 20px 50px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.8)'
  }, [])

  return (
    <section className="flex-1 px-4 sm:px-6 pt-24 pb-4 sm:pb-6 flex items-end relative overflow-hidden">
      <div
        ref={heroRef}
        className="relative w-full rounded-3xl overflow-hidden bg-[#FAFAFA] border border-white shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)]"
        style={{ minHeight: 'calc(100vh - 108px)' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Premium Abstract Atmospheric Background ── */}
        <div className="absolute inset-0 pointer-events-none bg-[#f4f4f5]">
          {/* Soft ambient moving orbs for gentle depth */}
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-slate-400/40 rounded-full blur-[120px] animate-float-slow mix-blend-multiply" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] bg-gray-400/40 rounded-full blur-[140px] animate-float-medium mix-blend-multiply" />
          <div className="absolute top-[10%] left-[30%] w-[60%] h-[60%] bg-zinc-400/30 rounded-full blur-[120px] animate-float-fast mix-blend-multiply" />
          
          {/* Refined Light Grid with Radial Fade */}
          <div className="absolute inset-0 premium-grid opacity-100 mix-blend-overlay" />
          
          {/* Subtle Vignette for Readability and Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f4f4f5]/30 to-[#FAFAFA]" />
        </div>

        {/* ── Content ────────────────────────────── */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Top: headline + CTA — centered vertically */}
          <div className="flex-1 flex items-center px-8 sm:px-12 lg:px-16 pt-12 sm:pt-0">
            <div className="max-w-[88rem] mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
              {/* Left: copy */}
              <div className="flex flex-col items-start max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-md mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-black/70 tracking-wide">
                    Open Source Scheduling Platform
                  </span>
                </div>

                <h1
                  className="text-black text-4xl sm:text-5xl md:text-[3.75rem] lg:text-6xl font-medium leading-[1.06] max-w-lg mb-6"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  Scheduling
                  <br />
                  <span className="bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
                    you own.
                  </span>
                </h1>

                <p className="text-black/65 text-base md:text-lg max-w-[27rem] mb-9 leading-relaxed font-normal">
                  Beautiful booking pages. Full data ownership.
                  Zero per-seat tax when you self-host.
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="btn-shimmer inline-flex items-center gap-3 bg-[#111111] text-white text-base font-medium pl-7 pr-5 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:scale-[1.02] group"
                  >
                    <span>Start free</span>
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-200">
                      <ArrowRight size={15} className="text-white" />
                    </span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-black/60 hover:text-black transition-colors duration-200 px-3 py-2 rounded-full hover:bg-white/50"
                  >
                    <span>View docs</span>
                    <Sparkles size={14} className="text-amber-500/80" />
                  </a>
                </div>
              </div>

              {/* Right: booking mock — 3D Parallax Tilt with Marble sheen */}
              <div
                className="w-full md:w-auto relative flex justify-center md:justify-end mt-8 md:mt-0"
                style={{ perspective: '1000px' }}
              >
                {/* Ethereal Glow behind the card */}
                <div className="absolute -inset-16 hero-glow pointer-events-none opacity-80" />

                {/* Outer: entrance animation */}
                <div className="animate-hero-card w-full max-w-[420px] md:max-w-none">
                  {/* Inner: 3D parallax tilt */}
                  <div
                    ref={cardRef}
                    className="relative will-change-transform rounded-3xl"
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: '0px 20px 50px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.9)',
                    }}
                  >
                    <BookingMock />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: trust line */}
          <div className="px-8 sm:px-12 lg:px-16 pb-6 sm:pb-8">
            <div className="max-w-[88rem] mx-auto flex items-center gap-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              <p className="text-[11px] font-semibold text-black/40 tracking-wider uppercase whitespace-nowrap">
                Open source · Self-hostable · No vendor lock-in
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
