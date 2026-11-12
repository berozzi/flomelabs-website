import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent } from 'react'
import { useId } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

export function HeroVisual() {
  const uid = useId().replace(/:/g, '')
  const reduce = useReducedMotion()

  const pointerX = useSpring(0, { stiffness: 120, damping: 22 })
  const pointerY = useSpring(0, { stiffness: 120, damping: 22 })
  const rotateX = useTransform(pointerY, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(pointerX, [-0.5, 0.5], [-9, 9])

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reduce) return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[560px] [perspective:1200px]"
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
    >
      <div
        className="absolute left-1/2 top-1/2 size-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[110px]"
        aria-hidden="true"
      />

      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        style={{ rotateX, rotateY }}
      >
        <svg
          viewBox="0 0 600 600"
          fill="none"
          className="absolute inset-0 size-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`${uid}-ring`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#A9B8FF" stopOpacity="0.85" />
              <stop offset="0.55" stopColor="#A9B8FF" stopOpacity="0.12" />
              <stop offset="1" stopColor="#A9B8FF" stopOpacity="0" />
            </linearGradient>
          </defs>

          <circle
            cx="300"
            cy="300"
            r="252"
            stroke="#F4F2ED"
            strokeOpacity="0.07"
            strokeDasharray="2 10"
          />
          <g className="origin-center animate-spin-slow [transform-box:view-box] motion-reduce:animate-none">
            <ellipse
              cx="300"
              cy="300"
              rx="278"
              ry="116"
              transform="rotate(-26 300 300)"
              stroke={`url(#${uid}-ring)`}
              strokeWidth="1"
            />
            <circle cx="578" cy="300" r="3" fill="#A9B8FF" />
          </g>
          <ellipse
            cx="300"
            cy="300"
            rx="278"
            ry="116"
            transform="rotate(34 300 300)"
            stroke="#F4F2ED"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        </svg>

        <div className="absolute left-1/2 top-1/2 size-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_26%,#f4f2ed_0%,#dfe4ff_10%,#a9b8ff_30%,#5f6aa8_58%,#181b22_100%)] shadow-[inset_-24px_-28px_70px_rgba(0,0,0,0.6),0_0_90px_rgba(169,184,255,0.16)]">
          <div className="absolute left-[16%] top-[12%] size-[20%] rounded-full bg-paper/50 blur-lg" />
          <div className="absolute inset-0 rounded-full border border-paper/10" />
        </div>

        <div className="absolute left-0 top-[13%] w-[45%] animate-float rounded-2xl border border-paper/10 bg-ink-soft/90 p-4 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] motion-reduce:animate-none">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-paper/40">
            <span>Studio system</span>
            <span className="text-accent">01</span>
          </div>
          <div className="mt-5 flex h-12 items-end gap-1.5">
            {[36, 58, 42, 76, 54, 88, 66].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-sm bg-accent/80"
                style={{ height: `${height}%`, opacity: 0.35 + index * 0.08 }}
              />
            ))}
          </div>
          <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/45">
            Mobile · Software · Games
          </p>
        </div>

        <div className="absolute bottom-[9%] right-0 w-[48%] animate-float-delayed rounded-2xl border border-paper/10 bg-ink-soft/90 p-4 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] motion-reduce:animate-none">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-paper/40">
            <span>Selected work</span>
            <span>2026</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="size-1.5 rounded-full bg-paper/25" />
            <span className="size-1.5 rounded-full bg-paper/25" />
          </div>
          <p className="mt-4 font-display text-lg font-medium tracking-[-0.03em] text-paper/90">
            CitizenWallet
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/40">
            AntSpire · In development
          </p>
        </div>

        <div className="absolute right-[3%] top-[2%] rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
          Available for 2026
        </div>

        <div
          className="absolute inset-x-[14%] bottom-[1%] h-[20%] bg-[radial-gradient(circle,rgba(244,242,237,0.22)_1px,transparent_1px)] bg-[size:14px_14px] opacity-50 [mask-image:linear-gradient(to_top,black,transparent)]"
          aria-hidden="true"
        />
      </motion.div>

      <div className="grain pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]" />
    </motion.div>
  )
}
