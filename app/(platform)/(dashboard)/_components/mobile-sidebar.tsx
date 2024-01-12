'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar'
import { Menu } from 'lucide-react'
import Sidebar from './sidebar'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const MobileSidebar = () => {
  const isOpen = useMobileSidebar(state => state.isOpen)
  const onOpen = useMobileSidebar(state => state.onOpen)
  const onClose = useMobileSidebar(state => state.onClose)

  const pathname = usePathname()

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  return (
    <>
      <Button
        size='icon'
        variant='ghost'
        className='mr-2 md:hidden'
        onClick={onOpen}
      >
        <Menu className='w-4 h-4' />
      </Button>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side='left' className='p-2 pt-10'>
          <Sidebar storageKey='mobile-sidebar-state' />
        </SheetContent>
      </Sheet>
    </>
  )
}
export default MobileSidebar
