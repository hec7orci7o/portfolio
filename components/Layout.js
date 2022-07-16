import Meta from './Meta'
import Navbar from './Navbar'

export default function Layout ({ children }) {
  return (
    <div className='bg-light dark:bg-dark'>
      <Meta />
      <div className="mx-auto min-h-screen px-4">
        <Navbar />
        <main className="container mx-auto scroll-smooth">{children}</main>
      </div>
    </div>
  )
}
