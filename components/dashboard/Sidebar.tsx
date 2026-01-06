import { usePathname } from 'next/navigation'
import SidebarNavigation from './SidebarNavigation'
import SidebarHeader from './SidebarHeader'
import SidebarFooter from './SidebarFooter'

const Sidebar = ({ open, setOpen }: dashboardMenuOpenCloseProps) => {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className='fixed inset-0 bg-black/50 z-40 lg:hidden' onClick={() => setOpen?.(false)}/>
      )}
      <aside className={`fixed lg:relative w-64 h-screen bg-card border-r border-border flex flex-col transition-all duration-300 z-50 lg:z-0 ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <SidebarHeader setOpen={setOpen} />
        <SidebarNavigation isActive={isActive} setOpen={setOpen} />
        <SidebarFooter />
      </aside>
    </>
  )
}

export default Sidebar
