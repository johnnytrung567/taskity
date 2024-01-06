import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex items-center px-4 h-12 border-b'>
      <div className='hidden md:block mr-4'>
        <Logo />
      </div>
      <Button size='sm' className='hidden md:block'>
        Create
      </Button>
      <Button size='sm' className='block md:hidden'>
        <Plus className='w-4 h-4' />
      </Button>
      <div className='ml-auto flex items-center gap-x-4'>
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl='/organization/:id'
          afterSelectOrganizationUrl='/organization/:id'
          afterLeaveOrganizationUrl='/select-org'
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          }}
        />

        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: {
                width: 30,
                height: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  )
}
export default Navbar
