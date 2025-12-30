import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/constant'

export default function Navbar() {
  return (
    <>
      <nav className='w-full bg-black text-white px-8 py-4 sticky top-0 z-20 border-b border-gray-800'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='font-semibold tracking-wide'>AI Interview</span>
          </div>
          <div className='hidden text-gray-400 md:flex items-center gap-2 border border-gray-800 px-4 py-2 rounded-full text-sm'>
            {NAV_LINKS.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className='px-4 py-1 rounded-full hover:bg-neutral-900 transition'>
                {link.label}
              </Link>
            ))}
          </div>
          <Button className='bg-[#512e82] hover:text-gray-400 text-gray-200 font-semibold px-3 cursor-pointer'>
            Login
          </Button>
        </div>
      </nav>
    </>
  )
}
