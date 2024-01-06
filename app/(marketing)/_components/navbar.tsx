import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='px-4 border-b fixed top-0 w-full bg-background'>
      <div className='mx-auto h-12 max-w-screen-xl flex justify-between items-center'>
        <div className='md:block hidden'>
          <Logo />
        </div>
        <div className='space-x-4 flex items-center justify-between w-full md:w-auto'>
          <Button size='sm' variant='outline' asChild>
            <Link href='/login'>Login</Link>
          </Button>
          <Button size='sm' asChild>
            <Link href='/signup'>Get Taskity for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
