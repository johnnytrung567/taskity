import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { Activity, CreditCard, Layout, Settings } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export interface Organization {
  id: string
  name: string
  slug: string
  imageUrl: string
}

interface NavItemProps {
  isActive: boolean
  isExpanded: boolean
  organization: Organization
  onExpand: (id: string) => void
}

const NavItem = ({
  isActive,
  isExpanded,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const routes = [
    {
      label: 'Board',
      icon: <Layout className='w-4 h-4 mr-2' />,
      link: `/organization/${organization.id}`,
    },
    {
      label: 'Activity',
      icon: <Activity className='w-4 h-4 mr-2' />,
      link: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Settings',
      icon: <Settings className='w-4 h-4 mr-2' />,
      link: `/organization/${organization.id}/settings`,
    },
    {
      label: 'Billing',
      icon: <CreditCard className='w-4 h-4 mr-2' />,
      link: `/organization/${organization.id}/billing`,
    },
  ]

  const onClickItem = (href: string) => {
    router.push(href)
  }

  return (
    <AccordionItem value={organization.id} className='border-none'>
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md transition text-start no-underline hover:no-underline',
          isActive && !isExpanded
            ? 'bg-sky-500/10 text-sky-700'
            : 'hover:bg-neutral-500/15'
        )}
      >
        <div className='flex items-center gap-x-2'>
          <Image
            src={organization.imageUrl}
            width={24}
            height={24}
            alt={organization.name}
            className='rounded-sm'
          />
          <span className='font-medium text-sm'>{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className='pb-0 text-neutral-700'>
        {routes.map(route => (
          <Button
            key={route.link}
            size='sm'
            variant='ghost'
            onClick={() => onClickItem(route.link)}
            className={cn(
              'w-full font-normal py-1 px-2 pl-10 justify-start mt-1 hover:bg-neutral-500/15',
              pathname === route.link &&
                'bg-sky-500/10 text-sky-700 hover:bg-sky-500/10 hover:text-sky-700'
            )}
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

NavItem.Skeleton = function NavItemSkeleton() {
  return (
    <div className='flex gap-x-2'>
      <Skeleton className='w-9 h-9 shrink-0' />
      <Skeleton className='w-full h-9' />
    </div>
  )
}

export default NavItem
