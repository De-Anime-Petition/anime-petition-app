import type { PropsWithChildren } from 'react'

export default function HeaderWithShadow({ children }: PropsWithChildren) {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] h-16 overflow-hidden">
      {children}
    </header>
  )
}
