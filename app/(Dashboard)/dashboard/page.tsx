"use client"
import Sidebar from '@/components/dashboard/Sidebar'
import React, { useState } from 'react'

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
    <div>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </div>
  )
}

export default Page
