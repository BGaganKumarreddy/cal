import { Cloud, HardDrive, Check, Minus, ArrowRight, Server } from 'lucide-react'

const rows = [
  { label: 'Booking pages', cloud: true, self: true },
  { label: 'API access', cloud: true, self: true },
  { label: 'Team scheduling', cloud: true, self: true },
  { label: 'Full data ownership', cloud: false, self: true },
  { label: 'No per-seat pricing', cloud: false, self: true },
  { label: 'Custom deployment', cloud: false, self: true },
  { label: 'Managed infrastructure', cloud: true, self: false },
]

export default function SelfHostSection() {
  return (
    <section className="bg-white/90 backdrop-blur-xl px-4 sm:px-6 py-20 sm:py-28 relative">
      <div className="max-w-[88rem] mx-auto">
        {/* ── Two-column header ──────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-14 sm:mb-16 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 shadow-sm mb-4">
              <Server size={12} className="text-black/60" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-black/60">
                Deployment Freedom
              </span>
            </div>
            <h2
              className="text-black text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-medium leading-[1.1]"
              style={{ letterSpacing: '-0.03em' }}
            >
              Self-host when
              <br className="hidden sm:block" />
              you're ready
            </h2>
          </div>
          <div>
            <p className="text-black/60 text-base md:text-[17px] leading-[1.75] mb-6">
              Start on our cloud in seconds. When your team grows or your data
              requirements change, move to self-hosting — same product, full
              control, zero per-seat pricing.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-700 transition-colors duration-200 group"
            >
              <span>Read the self-hosting guide</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* ── Comparison table ───────────────────── */}
        <div className="rounded-3xl bg-milky-marble border border-white/90 overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)]">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_160px_160px] bg-white/70 backdrop-blur-md">
            <div className="px-5 sm:px-8 py-5" />
            <div className="px-3 sm:px-4 py-5 flex items-center justify-center gap-2 border-l border-black/[0.05]">
              <Cloud size={16} className="text-black/50" />
              <span className="text-[13px] font-semibold text-black/60">Cloud</span>
            </div>
            <div className="px-3 sm:px-4 py-5 flex items-center justify-center gap-2 border-l border-black/[0.05] bg-black/[0.03]">
              <HardDrive size={16} className="text-black" />
              <span className="text-[13px] font-bold text-black">Self-hosted</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`
                comparison-row
                grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_160px_160px]
                border-t border-black/[0.04]
              `}
            >
              <div className="px-5 sm:px-8 py-4.5 text-[13px] sm:text-sm text-black/70 font-medium">
                {row.label}
              </div>
              <div className="px-3 sm:px-4 py-4.5 flex items-center justify-center border-l border-black/[0.04]">
                {row.cloud ? (
                  <div className="w-5.5 h-5.5 rounded-full bg-black/[0.06] flex items-center justify-center">
                    <Check size={13} className="text-black/60" />
                  </div>
                ) : (
                  <Minus size={14} className="text-black/20" />
                )}
              </div>
              <div className="px-3 sm:px-4 py-4.5 flex items-center justify-center border-l border-black/[0.04] bg-black/[0.025]">
                {row.self ? (
                  <div className="w-5.5 h-5.5 rounded-full bg-[#111111] flex items-center justify-center shadow-sm">
                    <Check size={13} className="text-white" />
                  </div>
                ) : (
                  <Minus size={14} className="text-black/20" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
