import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href='/'
      className='flex gap-x-1 items-center text-xl hover:opacity-75 transition-opacity font-bold'
    >
      <Image src='/logo.svg' alt='Logo' width={30} height={30} />
      Taskity
    </Link>
  )
}
export default Logo
