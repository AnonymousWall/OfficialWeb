export default function Marquee() {
  const words = ['ANONYMOUS', 'AUTHENTIC', 'CAMPUS', 'COMMUNITY', 'REAL TALK', 'YOUR VOICE', 'NO FILTERS']
  const text = words.map(w => `${w} · `).join('')

  return (
    <div className="py-6 border-y border-white/10 overflow-hidden bg-white/[0.02]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-2xl font-black text-white/80 pr-0">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
