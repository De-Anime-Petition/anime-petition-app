import type { PropsWithChildren } from 'react'

export function Content({ children }: PropsWithChildren) {
  return (
    <main className="fill-content relative z-[1] px-4 pt-[4.5rem] md:px-0">
      {children}
    </main>
  )
}
