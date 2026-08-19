import { useState, useEffect, useRef, useCallback } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const links = ['Features', 'Self-host', 'Pricing', 'Docs', 'Blog']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navInnerRef = useRef<HTMLDivElement>(null)
  const rafId = useRef<number>(0)

  // Scroll listener for sticky floating navbar transform
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse Parallax movement for Navbar
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const navEl = navInnerRef.current
    if (!navEl) return

    cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      // Normalized coordinates (-1 to 1)
      const normX = (e.clientX / windowWidth) * 2 - 1
      const normY = (e.clientY / windowHeight) * 2 - 1

      // Subtle parallax tilt & shift
      const tiltX = -normY * 4
      const tiltY = normX * 5
      const shiftX = normX * 8
      const shiftY = normY * 3

      navEl.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateX(${shiftX}px) translateY(${shiftY}px)`
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const navEl = navInnerRef.current
    if (!navEl) return
    navEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)'
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 ${
        scrolled ? 'py-3.5' : 'py-5'
      }`}
    >
      <div
        ref={navInnerRef}
        className={`max-w-[88rem] mx-auto transition-all duration-300 rounded-full px-6 py-3 will-change-transform ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)]'
            : 'bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)]'
        }`}
        style={{
          transition: 'transform 0.15s ease-out, background-color 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="flex items-center justify-between">
          {/* ── Logo ─────────────────────────────────── */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
                aria-label="Cal.com logo"
              >
                <rect width="28" height="28" rx="7" fill="#111111" />
                <path
                  d="M8 10.5C8 9.11929 9.11929 8 10.5 8H17.5C18.8807 8 20 9.11929 20 10.5V17.5C20 18.8807 18.8807 20 17.5 20H10.5C9.11929 20 8 18.8807 8 17.5V10.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle cx="14" cy="14" r="2.5" fill="white" />
              </svg>
              {/* Subtle pearl sheen on logo */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            <span className="text-black text-2xl font-medium tracking-tight">
              Cal.com
            </span>
          </a>

          {/* ── Desktop links ────────────────────────── */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="relative text-sm text-gray-700 hover:text-black font-medium transition-colors duration-200 py-1 group/link"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-200 group-hover/link:w-full" />
              </a>
            ))}
          </div>

          {/* ── CTA + mobile toggle ──────────────────── */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="btn-shimmer hidden sm:inline-flex items-center gap-2 bg-[#111111] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:scale-[1.02]"
            >
              <span>Get started free</span>
              <Sparkles size={14} className="text-amber-300 opacity-90" />
            </a>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-1.5 text-black rounded-full hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu drawer ────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden mt-3 bg-white/95 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 mx-auto max-w-[88rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-base text-gray-800 hover:text-black font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="inline-flex justify-center items-center gap-2 bg-black text-white text-base font-medium px-7 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 mt-2 shadow-md"
            >
              <span>Get started free</span>
              <Sparkles size={16} className="text-amber-300" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
