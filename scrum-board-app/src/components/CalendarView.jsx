export default function CalendarView() {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl">
      <h3 className="text-sm font-semibold mb-3">Calendar</h3>
      <div className="grid grid-cols-7 gap-2 text-center text-sm text-neutral-400">
        {['S','M','T','W','T','F','S'].map(d => (
          <div key={d} className="font-semibold">{d}</div>
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="p-2 rounded hover:bg-neutral-800 cursor-pointer"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
