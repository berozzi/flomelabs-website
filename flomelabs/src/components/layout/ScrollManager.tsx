import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      let frame = 0
      let attempts = 0
      let fallback = 0

      const scrollToTarget = () => {
        const target = document.getElementById(id)
        if (!target) {
          if (attempts < 12) {
            attempts += 1
            frame = requestAnimationFrame(scrollToTarget)
          }
          return
        }

        const startY = window.scrollY
        target.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start',
        })

        // Some browsers suspend animated scrolling (background tabs,
        // low-power mode). If nothing moved, jump there directly.
        fallback = window.setTimeout(() => {
          if (window.scrollY === startY) {
            target.scrollIntoView({ behavior: 'auto', block: 'start' })
          }
        }, 600)
      }

      frame = requestAnimationFrame(scrollToTarget)
      return () => {
        cancelAnimationFrame(frame)
        window.clearTimeout(fallback)
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
