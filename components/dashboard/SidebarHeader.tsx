import { X } from 'lucide-react'
import React from 'react'

const SidebarHeader = ({setOpen}: {setOpen: (open: boolean) => void}) => {
  return (
    <div>
      <div className='p-6 border-b border-border flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground text-sm'>
            AI
          </div>
          <span className='font-bold text-lg hidden sm:inline'>
            InterviewAI
          </span>
        </div>
        <button
          onClick={() => setOpen?.(false)}
          className='lg:hidden hover:bg-muted p-1 rounded-lg transition-colors'>
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

export default SidebarHeader
