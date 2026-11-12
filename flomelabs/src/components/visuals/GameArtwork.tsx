import { useId } from 'react'

interface GameArtworkProps {
  className?: string
  showTitle?: boolean
}

export function GameArtwork({ className = '', showTitle = true }: GameArtworkProps) {
  const uid = useId().replace(/:/g, '')

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#08090c] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#151b26" />
            <stop offset="1" stopColor="#07080b" />
          </linearGradient>
          <linearGradient id={`${uid}-spire`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e8c39e" />
            <stop offset="1" stopColor="#7a4e36" />
          </linearGradient>
          <radialGradient id={`${uid}-ember`}>
            <stop offset="0" stopColor="#e8c39e" stopOpacity="0.85" />
            <stop offset="1" stopColor="#e8c39e" stopOpacity="0" />
          </radialGradient>
          <filter id={`${uid}-blur`}>
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <rect width="600" height="400" fill={`url(#${uid}-sky)`} />

        <path
          d="M0 280 Q120 250 220 275 T420 260 T600 285 V400 H0 Z"
          fill="#0b0e14"
        />
        <path
          d="M0 310 Q150 285 300 305 T600 300 V400 H0 Z"
          fill="#07090d"
        />

        <g stroke="#d8a47f" strokeOpacity="0.32" fill="none" strokeWidth="1.2">
          <path d="M-20 340 C80 300 140 360 220 330 S380 300 460 340 S560 330 640 300" />
          <path d="M-20 370 C90 340 160 390 260 360 S420 340 520 370 S600 360 640 340" />
          <path d="M80 400 C100 340 180 330 210 290 S250 220 300 200" />
          <path d="M520 400 C500 340 430 330 400 290 S350 220 300 200" />
        </g>

        <g fill="#e8c39e">
          <circle cx="120" cy="328" r="2.5" />
          <circle cx="220" cy="330" r="2" />
          <circle cx="460" cy="340" r="2.5" />
          <circle cx="400" cy="290" r="2" />
          <circle cx="210" cy="290" r="2" />
        </g>

        <g>
          <ellipse
            cx="300"
            cy="210"
            rx="92"
            ry="92"
            fill={`url(#${uid}-ember)`}
            opacity="0.4"
            filter={`url(#${uid}-blur)`}
          />
          <path
            d="M300 110 L335 210 L320 300 L300 330 L280 300 L265 210 Z"
            fill={`url(#${uid}-spire)`}
            opacity="0.9"
          />
          <path
            d="M300 130 L318 205 L308 280 L300 300 L292 280 L282 205 Z"
            fill="#f4f2ed"
            opacity="0.08"
          />
          <g fill="#111318" opacity="0.72">
            <rect x="294" y="160" width="12" height="6" rx="1" />
            <rect x="292" y="185" width="16" height="6" rx="1" />
            <rect x="290" y="210" width="20" height="6" rx="1" />
            <rect x="293" y="235" width="14" height="6" rx="1" />
            <rect x="296" y="260" width="8" height="6" rx="1" />
          </g>
          <path d="M300 110 L300 330" stroke="#f4f2ed" strokeOpacity="0.22" strokeWidth="0.8" />
        </g>

        <g fill="#e8c39e" className="animate-pulse motion-reduce:animate-none">
          <circle cx="250" cy="180" r="1.4" opacity="0.7" />
          <circle cx="356" cy="240" r="1.2" opacity="0.55" />
          <circle cx="330" cy="150" r="1" opacity="0.5" />
          <circle cx="270" cy="260" r="1.3" opacity="0.6" />
          <circle cx="380" cy="200" r="1" opacity="0.45" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(216,164,127,0.14),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#07080b] to-transparent" />

      {showTitle ? (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#e8c39e]/70">
              Game development · Strategy
            </p>
            <p className="mt-1 font-display text-2xl font-semibold tracking-[-0.03em] text-paper">
              AntSpire
            </p>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/35">
            Build 0.4
          </span>
        </div>
      ) : null}
    </div>
  )
}
