import { ArrowDownLeft, ArrowUpRight, CreditCard, ReceiptText } from 'lucide-react'

interface PhoneMockupProps {
  className?: string
}

const receipts = [
  { name: 'Fresh Market', meta: 'Receipt saved · 12:40', amount: '-$38.20' },
  { name: 'Blue Bottle', meta: 'Receipt saved · Yesterday', amount: '-$4.80' },
]

export function PhoneMockup({ className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative w-[200px] sm:w-[260px] ${className}`} aria-hidden="true">
      <div className="rounded-[2.6rem] border border-ink/15 bg-ink p-[7px] shadow-[0_40px_90px_-30px_rgba(17,19,24,0.55)]">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-[#f8f7f3]">
          <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-ink/80" />

          <div className="px-4 pb-5 pt-8">
            <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-wider text-ink/40">
              <span>9:41</span>
              <span className="flex items-center gap-1.5">
                <span>5G</span>
                <span>100%</span>
              </span>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <div>
                <p className="text-[10px] text-ink/45">Good morning,</p>
                <p className="font-display text-lg font-semibold tracking-[-0.03em] text-ink">
                  Alex
                </p>
              </div>
              <span className="grid size-8 place-items-center rounded-full border border-ink/10 bg-white text-ink/60">
                <CreditCard className="size-3.5" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-4 rounded-2xl bg-accent p-4 text-ink">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink/55">
                    Loyalty card
                  </p>
                  <p className="mt-2 font-display text-base font-semibold tracking-[-0.02em]">
                    Café Nero
                  </p>
                </div>
                <span className="rounded-full bg-ink px-2 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-paper">
                  240 pts
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div className="flex h-6 items-end gap-[3px]">
                  {[10, 18, 14, 22, 12, 20, 16, 24, 11, 19].map((height, index) => (
                    <span
                      key={index}
                      className="w-[2px] rounded-full bg-ink/70"
                      style={{ height }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-ink/45">
                  Member since 2024
                </span>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-ink/10 bg-white p-3">
                <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-ink/40">
                  Transit
                </p>
                <p className="mt-1 font-display text-[11px] font-semibold text-ink">Metro</p>
                <p className="font-mono text-[7px] text-ink/40">Monthly pass</p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white p-3">
                <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-ink/40">
                  Grocery
                </p>
                <p className="mt-1 font-display text-[11px] font-semibold text-ink">
                  Fresh Market
                </p>
                <p className="font-mono text-[7px] text-ink/40">80 pts</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink/40">
                Recent receipts
              </p>
              <ReceiptText className="size-3 text-ink/35" aria-hidden="true" />
            </div>

            <div className="mt-2 space-y-1.5">
              {receipts.map((receipt) => (
                <div
                  key={receipt.name}
                  className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2"
                >
                  <div>
                    <p className="text-[9px] font-medium text-ink">{receipt.name}</p>
                    <p className="font-mono text-[6.5px] text-ink/40">{receipt.meta}</p>
                  </div>
                  <span className="font-mono text-[8px] text-ink/55">{receipt.amount}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-around rounded-full bg-ink px-3 py-2.5 text-paper">
              <ArrowUpRight className="size-3" aria-hidden="true" />
              <ArrowDownLeft className="size-3 text-accent" aria-hidden="true" />
              <CreditCard className="size-3 text-paper/50" aria-hidden="true" />
              <ReceiptText className="size-3 text-paper/50" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-[3px] top-24 h-10 w-[3px] rounded-full bg-ink/25" />
      <div className="absolute -left-[3px] top-20 h-14 w-[3px] rounded-full bg-ink/20" />
    </div>
  )
}
