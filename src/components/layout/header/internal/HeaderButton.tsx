import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeaderButton() {
  return (
    <Button className="p-0">
      <div className="pointer-events-none relative z-[9] size-[40px] cursor-pointer select-none">
        <Image className="rounded-md ring-2 ring-slate-200" src="/logo.png" alt="logo" fill />
      </div>
    </Button>
  )
}
