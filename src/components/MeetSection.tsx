import { ArrowRight, Shield, Server, Sparkles, Code } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Own your data',
    desc: 'Self-host or use our cloud. Your scheduling data stays under your control.',
    dark: false,
  },
  {
    icon: Server,
    title: 'No per-seat tax',
    desc: 'Self-host and pay only for your server. Scale your team without extra user fees.',
    dark: true,
  },
  {
    icon: Sparkles,
    title: 'Beautiful by default',
    desc: 'Clean booking pages that look premium out of the box. No design work needed.',
    dark: false,
  },
  {
    icon: Code,
    title: 'Developer friendly',
    desc: 'Full API, embed widgets, webhooks, and open-source roots you can inspect.',
    dark: false,
  },
]

export default function MeetSection() {
  return (
    <section className="bg-milky-marble marble-vein-overlay px-4 sm:px-6 py-20 sm:py-28 relative">
      <div className="max-w-[88rem] mx-auto">
        {/* ── Row 1: intro ───────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 sm:mb-20 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-white/90 shadow-sm backdrop-blur-md mb-4">
              <Sparkles size={12} className="text-amber-500" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-black/50">
                The Platform
              </span>
            </div>
            <h2
              className="text-black text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-medium leading-[1.1] mb-7"
              style={{ letterSpacing: '-0.03em' }}
            >
              Meet Cal.com.
            </h2>
            <a
              href="#"
              className="btn-shimmer inline-flex items-center gap-3 bg-[#111111] text-white text-sm font-medium pl-6 pr-4 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-md group"
            >
              <span>Discover it</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-200">
                <ArrowRight size={14} className="text-white" />
              </span>
            </a>
          </div>
          <div className="md:pt-2">
            <p className="text-black/65 text-base md:text-[17px] leading-[1.75] font-normal">
              Cal.com is the modern scheduling platform that gives you beautiful
              booking pages, full control over your data, and the option to
              self-host so you never pay per seat. Whether you're a solo founder
              booking discovery calls or a 500-person team coordinating across
              time zones, Cal.com adapts to how you work — not the other way
              around.
            </p>
          </div>
        </div>

        {/* ── Row 2: feature cards ───────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className={`
                  rounded-3xl p-7 sm:p-8 flex flex-col gap-6 transition-all duration-300 relative overflow-hidden group
                  ${f.dark
                    ? 'bg-[#111111] text-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-gray-800'
                    : 'milky-card milky-card-hover text-black'
                  }
                `}
              >
                {/* Subtle shine angle overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 via-transparent to-transparent pointer-events-none" />

                <div
                  className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110
                    ${f.dark ? 'bg-white/10' : 'bg-white shadow-sm border border-black/[0.04]'}
                  `}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.75}
                    className={f.dark ? 'text-white' : 'text-black/80'}
                  />
                </div>
                <div>
                  <h3
                    className="text-[18px] font-semibold mb-2"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {f.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${f.dark ? 'text-white/60' : 'text-black/55'}`}>
                    {f.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
