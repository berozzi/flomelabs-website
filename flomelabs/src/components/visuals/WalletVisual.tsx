import { Check, CreditCard, Sparkles } from 'lucide-react'
import { PhoneMockup } from './PhoneMockup'

interface WalletVisualProps {
  className?: string
}

export function WalletVisual({ className = '' }: WalletVisualProps) {
  return (
    <div
      className={`relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-card bg-[#e6e9f5] px-4 py-12 sm:min-h-[620px] ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,19,24,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,19,24,0.055)_1px,transparent_1px)] bg-[size:44px_44px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/45 blur-[90px]"
        aria-hidden="true"
      />

      <div className="absolute left-[6%] top-[11%] hidden w-[35%] rounded-xl border border-ink/10 bg-paper p-3 shadow-[0_18px_40px_-24px_rgba(17,19,24,0.45)] sm:block">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-muted">
            Loyalty card
          </span>
          <CreditCard className="size-3 text-ink/35" aria-hidden="true" />
        </div>
        <p className="mt-2 font-display text-[13px] font-semibold tracking-[-0.02em]">
          Café Nero
        </p>
        <p className="font-mono text-[8px] text-muted">240 points</p>
        <div className="mt-3 flex h-4 items-end gap-[2px]">
          {[8, 14, 10, 16, 9, 15, 11, 17, 8, 13, 10, 15].map((height, index) => (
            <span
              key={index}
              className="w-[2px] rounded-full bg-ink/60"
              style={{ height }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[10%] right-[6%] hidden w-[37%] rounded-xl border border-ink/10 bg-paper p-3 shadow-[0_18px_40px_-24px_rgba(17,19,24,0.45)] sm:block">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-full bg-accent text-ink">
            <Check className="size-3" aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-muted">
              Receipt saved
            </p>
            <p className="text-[10px] font-medium text-ink">Fresh Market</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-ink/10 pt-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-muted">
            Total
          </span>
          <span className="font-mono text-[9px] text-ink">$38.20</span>
        </div>
      </div>

      <div className="absolute right-[6%] top-[8%] hidden items-center gap-1.5 rounded-full border border-ink/10 bg-paper/80 px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.14em] text-muted sm:flex">
        <Sparkles className="size-2.5 text-ink/50" aria-hidden="true" />
        03 cards
      </div>

      <div className="absolute bottom-[6%] left-[6%] hidden font-mono text-[7px] uppercase tracking-[0.2em] text-ink/35 sm:block">
        CitizenWallet / Mobile
      </div>

      <PhoneMockup className="relative z-10 rotate-0 transition-transform duration-700 ease-out sm:rotate-[-6deg] group-hover:rotate-0 group-hover:scale-[1.03]" />
    </div>
  )
}
