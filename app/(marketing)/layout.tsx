import Footer from './_components/footer'
import Navbar from './_components/navbar'

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-slate-100 h-full'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default MarketingLayout
