import Meta from './Meta'
import Navbar from './Navbar'

export default function Layout ({ children }) {
  return (
    <>
    <Meta />
    <div className="mx-auto bg-light dark:bg-dark min-h-screen px-4">
      <Navbar />
      <main className="container mx-auto scroll-smooth">{children}</main>
    </div>
    </>
  )
}
