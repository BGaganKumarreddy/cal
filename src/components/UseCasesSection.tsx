import { Users, User, Code, Calendar, Clock, Globe, Video, ArrowRight, Layers } from 'lucide-react'

const events = [
  { title: '30 Min Discovery Meeting', slug: '/30min', duration: '30m', icon: Video, active: true },
  { title: 'Quick Product Sync', slug: '/quick', duration: '15m', icon: Clock, active: true },
  { title: 'Engineering Standup', slug: '/standup', duration: '15m', icon: Users, active: false },
  { title: 'Strategy Consultation', slug: '/consult', duration: '60m', icon: Calendar, active: true },
]

export default function UseCasesSection() {
  return (
    <section className="bg-milky-marble marble-vein-overlay px-4 sm:px-6 py-20 sm:py-28 relative">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* ── Left: copy ───────────────────────── */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-white/90 shadow-sm backdrop-blur-md mb-4">
              <Layers size={12} className="text-black/60" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-black/50">
                Use Cases
              </span>
            </div>
            <h2
              className="text-black text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-medium leading-[1.1] mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              Built for
              <br />
              real teams
            </h2>
            <p className="text-black/60 text-base md:text-[17px] leading-[1.75] mb-8 max-w-md">
              From solo founders to distributed engineering teams, Cal.com
              handles the scheduling so your people can focus on the work
              that matters.
            </p>

            {/* Mini use-case pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: User, label: 'Individuals' },
                { icon: Users, label: 'Teams' },
                { icon: Code, label: 'Developers' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-2xl bg-white/90 border border-white/90 shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-[13px] font-semibold text-black/70 hover:scale-105 transition-transform duration-200"
                >
                  <Icon size={15} strokeWidth={1.75} />
                  {label}
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-700 transition-all duration-200 group"
            >
              <span>See all use cases</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* ── Right: product visual ─────────────── */}
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-white/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)] overflow-hidden">
            {/* Mock browser chrome */}
            <div className="px-5 py-4 border-b border-black/[0.05] bg-gradient-to-b from-white to-gray-50/50 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-5 py-1 rounded-full bg-black/[0.03] border border-black/[0.04] text-[11px] text-black/50 font-medium">
                  app.cal.com/event-types
                </div>
              </div>
            </div>

            {/* Mock event type list */}
            <div className="p-5 sm:p-6 space-y-3">
              {events.map((event) => {
                const Icon = event.icon
                return (
                  <div
                    key={event.slug}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-black/[0.04] bg-white hover:bg-gray-50/80 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-milky-marble border border-black/[0.04] flex items-center justify-center shadow-2xs">
                      <Icon size={17} strokeWidth={1.75} className="text-black/60" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-semibold text-black truncate">
                        {event.title}
                      </p>
                      <p className="text-[11px] text-black/40 font-mono mt-0.5">{event.slug}</p>
                    </div>
                    <span className="text-[11px] text-black/50 font-semibold bg-black/[0.03] px-2.5 py-1 rounded-full hidden sm:block">
                      {event.duration}
                    </span>
                    <div className="flex items-center gap-2">
                      <Globe size={13} className="text-black/30" />
                      <div
                        className={`
                          w-8 h-[18px] rounded-full relative transition-colors duration-200
                          ${event.active ? 'bg-[#111111]' : 'bg-black/10'}
                        `}
                      >
                        <div
                          className={`
                            absolute top-[2px] w-[14px] h-[14px] rounded-full bg-white shadow-sm transition-all duration-200
                            ${event.active ? 'left-[14px]' : 'left-[2px]'}
                          `}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
