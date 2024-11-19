'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useUpdateEffect, useWindowSize } from 'react-use'

const HEADER_TABS = [
  { value: 'overview', label: 'Overview', href: '/' },
  { value: 'vote', label: 'Vote', href: '/vote' },
  { value: 'profile', label: 'Profile', href: '/profile' },
]

export default function HeaderMenu() {
  const [activeTab, setActiveTab] = useState(HEADER_TABS[0].value)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabsRef = useRef<HTMLDivElement>(null)
  const textRefs = useRef<Record<string, HTMLSpanElement | null>>({})
  const { width: windowWidth } = useWindowSize()

  const updateIndicator = () => {
    const tabsList = tabsRef.current
    if (!tabsList)
      return

    const activeTabElement = tabsList.querySelector(
      `[data-state="active"]`,
    ) as HTMLElement
    const activeTextElement = textRefs.current[activeTab]

    if (activeTabElement && activeTextElement) {
      const tabRect = activeTabElement.getBoundingClientRect()
      const textRect = activeTextElement.getBoundingClientRect()

      setIndicatorStyle({
        left: textRect.left - tabRect.left + activeTabElement.offsetLeft,
        width: textRect.width,
      })
    }
  }

  useUpdateEffect(() => {
    updateIndicator()
  }, [activeTab, windowWidth])

  return (
    <Tabs
      defaultValue={HEADER_TABS[0].value}
      className="mx-auto max-w-xl"
      onValueChange={setActiveTab}
    >
      <TabsList
        ref={tabsRef}
        className="relative h-auto gap-1 rounded-full bg-white p-1 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
      >
        {HEADER_TABS.map(({ value, label, href }) => (
          <Link key={value} href={href}>
            <TabsTrigger
              value={value}
              className="relative h-8 border-none px-4 text-xs text-gray-600 transition-colors duration-200 ease-in-out hover:text-rose-400 data-[state=active]:bg-transparent data-[state=active]:text-rose-400 data-[state=active]:shadow-none"
            >
              <span
                ref={(el) => {
                  textRefs.current[value] = el
                }}
              >
                {label}
              </span>
            </TabsTrigger>
          </Link>
        ))}
        <motion.div
          className="absolute bottom-0 h-0.5 bg-rose-400"
          layoutId="activeTab"
          initial={false}
          animate={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30,
          }}
        />
      </TabsList>
    </Tabs>
  )
}
