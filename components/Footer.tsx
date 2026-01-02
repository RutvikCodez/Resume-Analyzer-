import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { footerLinksData } from '@/constant'

export function Footer() {
  return (
    <footer className='bg-black border-t border-white/10 mt-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14'>
        <div className='grid md:grid-cols-4 gap-10 mb-10'>
          {/* Brand */}
          <div>
            <h3 className='text-2xl font-bold bg-linear-to-b from-white to-purple-400 bg-clip-text text-transparent mb-4'>
              InterviewAI
            </h3>
            <p className='text-sm text-white/70 leading-relaxed'>
              Master your interviews with AI-powered preparation
            </p>
          </div>

          {/* Links + Social */}
          {footerLinksData.map((section, i) => (
            <div key={i}>
              <h4 className='font-semibold mb-4 text-white'>{section.title}</h4>

              {section.type === 'links' && (
                <ul className='space-y-2 text-sm text-white/60'>
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className='hover:text-purple-400 transition-colors'>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {section.type === 'social' && (
                <div className='flex gap-4'>
                  {section.items.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        className='text-white/60 hover:text-purple-400 transition-colors'>
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50'>
          <p>© 2025 InterviewAI. All rights reserved.</p>

          <div className='flex gap-6 mt-4 md:mt-0'>
            <Link href='#' className='hover:text-purple-400 transition-colors'>
              Privacy Policy
            </Link>
            <Link href='#' className='hover:text-purple-400 transition-colors'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
