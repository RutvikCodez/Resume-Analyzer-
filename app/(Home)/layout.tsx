import { Footer } from '@/components/utils/Footer'
import Navbar from '@/components/utils/Navbar'
import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      {/* Primary Purple Glow */}
      <div className='fixed pointer-events-none -top-1/3 left-1/2 -translate-x-1/2 w-200 h-200 bg-purple-700/40 rounded-full blur-3xl' />

      {/* Secondary Indigo Glow */}
      <div className='pointer-events-none absolute top-1/3 left-[15%] w-175 h-175 bg-indigo-600/20 rounded-full blur-3xl' />

      {/* Page Content */}
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout
