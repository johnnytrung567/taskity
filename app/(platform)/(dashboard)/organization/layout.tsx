import Sidebar from '../_components/sidebar'

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='pt-5 md:pt-10 flex max-w-6xl mx-auto'>
      <div className='w-[288px] shrink-0 hidden md:block px-4'>
        <Sidebar />
      </div>
      <div className='px-4'>{children}</div>
    </div>
  )
}
export default OrganizationLayout
