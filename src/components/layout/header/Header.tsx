import WalletButton from '@/components/common/WalletButton'
import { HeaderButton } from './internal/HeaderButton'
import HeaderMenu from './internal/HeaderMenu'
import HeaderWithShadow from './internal/HeaderWithShadow'

export function Header() {
  return (
    <HeaderWithShadow>
      <div className="relative mx-auto grid h-full min-h-0 max-w-7xl grid-cols-[4.5rem_auto_4.5rem] lg:px-8">
        <div className="relative flex size-full items-center justify-center">
          <HeaderButton />
        </div>
        <div className="flex min-w-0">
          <div className="flex flex-1 items-center justify-center">
            <HeaderMenu />
          </div>
        </div>
        <div className="relative flex min-w-36 items-center justify-center">
          <WalletButton />
        </div>
      </div>
    </HeaderWithShadow>
  )
}
