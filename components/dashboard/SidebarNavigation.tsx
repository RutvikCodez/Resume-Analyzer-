import { dashboardMenuItems } from '@/constant'
import Link from 'next/link';
import React from 'react'

const SidebarNavigation = ({ isActive, setOpen }: { isActive: (href: string) => boolean; setOpen: (open: boolean) => void }) => {
  return (
    <div>
      <nav className='flex-1 overflow-auto py-6 px-3 space-y-2'>
        {dashboardMenuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen?.(false)}
            className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all group ${
              isActive(item.href)
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}>
            <div className='flex items-center gap-3'>
              <item.icon size={20} />
              <span>{item.title}</span>
            </div>
            {item.badge && (
              <span className='px-2 py-1 text-xs font-bold bg-accent text-accent-foreground rounded-full'>
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default SidebarNavigation
