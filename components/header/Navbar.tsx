'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/constant'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? 'bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg translate-y-0'
            : 'bg-transparent translate-y-[-2px]'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-semibold tracking-wide">
          AI Interview
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="px-4 py-1 rounded-full hover:bg-white/10 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Button
          className="
            bg-[#512e82] text-gray-200 font-semibold
            hover:bg-[#412e82]
            transition
          "
        >
          Login
        </Button>
      </div>
    </nav>
  )
}
