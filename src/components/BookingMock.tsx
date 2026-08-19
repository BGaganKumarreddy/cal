import { Clock, User, Video, ChevronLeft, ChevronRight, Check } from 'lucide-react'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const dates = [
  [28, 29, 30, 31, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
]

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM']

export default function BookingMock() {
  return (
    <div className="w-full max-w-[420px] lg:max-w-none lg:w-[460px] mx-auto md:mx-0 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)] overflow-hidden">
      {/* ── Header ───────────────────────────────── */}
      <div className="px-5 pt-5 pb-4 border-b border-black/[0.05] bg-gradient-to-b from-white to-gray-50/50">
        <div className="flex items-center gap-3 mb-2.5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-black via-gray-900 to-gray-700 flex items-center justify-center ring-2 ring-white shadow-sm">
            <User size={15} className="text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-[11px] text-black/45 font-semibold tracking-wide uppercase leading-none">Cal.com</p>
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
            </div>
            <p className="text-[14px] font-semibold text-black leading-tight mt-0.5">30 Min Product Demo</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-black/50 font-medium">
          <span className="flex items-center gap-1 bg-black/[0.03] px-2 py-0.5 rounded-full">
            <Clock size={11} className="text-black/60" />
            30 min
          </span>
          <span className="flex items-center gap-1 bg-black/[0.03] px-2 py-0.5 rounded-full">
            <Video size={11} className="text-black/60" />
            Google Meet
          </span>
        </div>
      </div>

      {/* ── Calendar + time slots ─────────────────── */}
      <div className="flex bg-white/60">
        {/* Calendar grid */}
        <div className="flex-1 px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[13px] font-semibold text-black tracking-tight">August 2026</span>
            <div className="flex gap-1">
              <button className="p-1 rounded-lg hover:bg-black/[0.05] transition-colors duration-200">
                <ChevronLeft size={13} className="text-black/40" />
              </button>
              <button className="p-1 rounded-lg hover:bg-black/[0.05] transition-colors duration-200">
                <ChevronRight size={13} className="text-black/40" />
              </button>
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {days.map((d) => (
              <div key={d} className="text-center text-[10px] font-semibold uppercase tracking-wider text-black/35 py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Date grid */}
          {dates.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7">
              {week.map((date, di) => {
                const isCurrentMonth = wi === 0 ? di >= 4 : wi < 4 ? true : di <= 6
                const isToday = date === 19 && wi === 2
                const isSelected = date === 20 && wi === 2
                return (
                  <button
                    key={`${wi}-${di}`}
                    className={`
                      text-center text-[11px] py-[6px] rounded-lg transition-all duration-150 relative
                      ${!isCurrentMonth ? 'text-black/15' : 'text-black/70 hover:bg-black/[0.04]'}
                      ${isToday && !isSelected ? 'font-bold text-black ring-1 ring-black/20 bg-black/[0.02]' : ''}
                      ${isSelected ? 'bg-[#111] text-white hover:bg-[#222] font-semibold shadow-md scale-[1.05]' : ''}
                    `}
                  >
                    {date}
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        {/* Time slots */}
        <div className="w-[115px] border-l border-black/[0.05] py-4 px-2.5 flex flex-col gap-1.5 bg-gradient-to-b from-gray-50/30 to-white">
          <p className="text-[10px] font-semibold text-black/40 mb-0.5 px-0.5 tracking-wider uppercase">Thu, Aug 20</p>
          {timeSlots.map((slot, i) => (
            <button
              key={slot}
              className={`
                text-[11px] font-medium py-[7px] px-2 rounded-lg border transition-all duration-150 flex items-center justify-between
                ${i === 1
                  ? 'bg-[#111] text-white border-[#111] shadow-sm font-semibold'
                  : 'text-black/70 border-black/[0.06] hover:border-black/20 hover:bg-white'
                }
              `}
            >
              <span>{slot}</span>
              {i === 1 && <Check size={11} className="text-emerald-400" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
