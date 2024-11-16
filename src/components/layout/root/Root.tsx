import { Content } from '../content/Content'
import { Header } from '../header/Header'

export function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  )
}
