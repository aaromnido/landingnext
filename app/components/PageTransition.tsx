'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        // This is where the transition happens
      })
    }
  }, [pathname])

  return (
    <div className="page-transition">
      {children}
    </div>
  )
}