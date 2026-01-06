'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/constant'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300 ease-out
        ${
          scrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(168,85,247,0.15)]'
            : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="
            text-lg font-bold tracking-wide
            bg-gradient-to-b from-white to-purple-400
            bg-clip-text text-transparent
            drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]
          "
        >
          InterviewAI
        </Link>

        {/* Nav Links */}
        <div className="
          hidden md:flex items-center gap-2
          border border-white/10
          bg-black/40 backdrop-blur
          px-3 py-2 rounded-full
        ">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="
                relative px-4 py-1 text-sm text-white/70
                transition-all duration-300
                hover:text-purple-400
              "
            >
              {link.label}

              {/* Hover underline */}
              <span
                className="
                  absolute left-1/2 -bottom-1 h-[2px] w-0
                  bg-gradient-to-r from-purple-500 to-fuchsia-500
                  transition-all duration-300
                  group-hover:w-1/2
                "
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Button
          className="
            px-6 py-2 rounded-full font-semibold
            bg-gradient-to-r from-purple-600 to-fuchsia-600
            text-white
            shadow-[0_10px_30px_rgba(168,85,247,0.45)]
            hover:scale-105
            transition-all duration-300
          "
        >
          Login
        </Button>
      </div>
    </nav>
  )
}
