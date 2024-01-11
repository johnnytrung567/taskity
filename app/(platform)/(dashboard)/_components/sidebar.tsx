'use client'
import { Accordion } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useLocalStorage } from 'usehooks-ts'
import NavItem, { Organization } from './nav-item'
import { Skeleton } from '@/components/ui/skeleton'

interface SidebarProps {
  storageKey?: string
}

const Sidebar = ({ storageKey = 'sidebar-state' }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  )
  const { organization: activeOrganization, isLoaded: isOrgLoaded } =
    useOrganization()
  const { userMemberships, isLoaded: isOrgListLoaded } = useOrganizationList({
    userMemberships: { infinite: true },
  })

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key) => {
      if (expanded[key]) {
        acc.push(key)
      }
      return acc
    },
    []
  )

  const onExpand = (id: string) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !expanded[id],
    }))
  }

  if (!isOrgListLoaded || !isOrgLoaded || userMemberships?.isLoading) {
    return (
      <div>
        <div className='flex items-center justify-between mb-2'>
          <Skeleton className='w-1/2 h-6 rounded-sm' />
          <Skeleton className='w-6 h-6 rounded-sm' />
        </div>
        <div className='space-y-2'>
          {new Array(3).fill(0).map((_item, index) => (
            <NavItem.Skeleton key={index} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='text-xs font-medium flex items-center mb-1'>
        <span className='pl-4'>Workspaces</span>
        <Button asChild size='icon' variant='ghost' className='ml-auto w-6 h-6'>
          <Link href='/select-org'>
            <Plus className='w-4 h-4' />
          </Link>
        </Button>
      </div>
      <Accordion
        type='multiple'
        className='space-y-1'
        defaultValue={defaultAccordionValue}
      >
        {userMemberships?.data?.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={organization.id === activeOrganization?.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  )
}
export default Sidebar
