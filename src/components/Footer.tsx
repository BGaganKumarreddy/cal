import { ArrowRight, Sparkles } from 'lucide-react'

const footerLinks = {
  Product: ['Features', 'Self-hosting', 'Pricing', 'Enterprise', 'API'],
  Resources: ['Documentation', 'Blog', 'Changelog', 'Status'],
  Company: ['About', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms'],
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white relative overflow-hidden">
      {/* ── Top CTA banner card ─────────────────────────── */}
      <div className="px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20 relative z-10">
        <div className="max-w-[88rem] mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-gray-900 via-[#1a1a1a] to-gray-900 border border-white/10 p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Ambient specular highlight */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <h2
              className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              Ready to own your schedule?
            </h2>
            <p className="text-white/60 text-base sm:text-lg mb-9 max-w-md mx-auto leading-relaxed">
              Start free on cloud or self-host from day one.
              No credit card required.
            </p>
            <a
              href="#"
              className="btn-shimmer inline-flex items-center gap-3 bg-white text-[#111111] text-base font-semibold pl-8 pr-6 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl hover:scale-105 group"
            >
              <span>Get started free</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black/10 group-hover:bg-black/15 transition-colors duration-200">
                <ArrowRight size={15} className="text-[#111111]" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Divider ────────────────────────────── */}
      <div className="px-4 sm:px-6">
        <div className="max-w-[88rem] mx-auto">
          <div className="h-px bg-white/10" />
        </div>
      </div>

      {/* ── Link grid ──────────────────────────── */}
      <div className="px-4 sm:px-6 py-14 sm:py-16">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[11px] font-semibold tracking-widest uppercase text-white/35 mb-5">
                  {category}
                </h4>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] text-white/55 hover:text-white transition-colors duration-200 font-medium"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────── */}
      <div className="px-4 sm:px-6 pb-10">
        <div className="max-w-[88rem] mx-auto">
          <div className="h-px bg-white/10 mb-8" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="28" height="28" rx="6" fill="white" />
                <path
                  d="M8 10.5C8 9.11929 9.11929 8 10.5 8H17.5C18.8807 8 20 9.11929 20 10.5V17.5C20 18.8807 18.8807 20 17.5 20H10.5C9.11929 20 8 18.8807 8 17.5V10.5Z"
                  stroke="#111"
                  strokeWidth="1.5"
                />
                <circle cx="14" cy="14" r="2.5" fill="#111" />
              </svg>
              <span className="text-[13px] text-white/40 font-medium">
                © {new Date().getFullYear()} Cal.com, Inc.
              </span>
            </div>
            <p className="text-[12px] text-white/30 font-medium flex items-center gap-1.5">
              <span>Open scheduling infrastructure for everyone</span>
              <Sparkles size={12} className="text-amber-400/60" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
