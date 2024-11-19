import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { href: 'https://github.com', icon: Github },
  { href: 'https://twitter.com', icon: Twitter },
  { href: 'https://instagram.com', icon: Instagram },
  { href: 'https://linkedin.com', icon: Linkedin },
]

export default function Home() {
  return (
    <div className="mx-auto mt-[-4.5rem] h-dvh max-w-7xl px-8">
      <div className="relative mx-auto flex size-full items-center justify-center">
        <div className="flex w-1/2 flex-col justify-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            Hi, There's
            {' '}
            <span className="text-primary">Anime Petition</span>
            {' '}
            ✨
          </h1>
          <p className="mb-6 text-muted-foreground">
            A platform for anime fans to make their voices heard
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-1/2 justify-end">
          <div className="relative size-80 overflow-hidden rounded-full border-4 border-muted">
            <Image
              src="/logo.png"
              alt="Avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
