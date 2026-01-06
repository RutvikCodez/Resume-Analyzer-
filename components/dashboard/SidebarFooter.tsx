import { LogOut } from 'lucide-react'
import React from 'react'

const SidebarFooter = () => {
  return (
    <div>
      <div className='p-6 border-t border-border space-y-3'>
          <button className='w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors group'>
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
    </div>
  )
}

export default SidebarFooter
