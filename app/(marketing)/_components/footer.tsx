import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <nav className='p-4 border-t fixed bottom-0 w-full '>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
        <div className='md:block hidden'>
          <Logo />
        </div>
        <div className='space-x-4 flex items-center justify-between w-full md:w-auto'>
          <Button size='sm' variant='ghost'>
            Privacy Policy
          </Button>
          <Button size='sm' variant='ghost'>
            Terms of Service
          </Button>
        </div>
      </div>
    </nav>
  )
}
export default Footer
