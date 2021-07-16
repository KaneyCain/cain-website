import {Navbar} from '../UI/navbar'
import Footer from '../UI/footer'

export default function Layout({ children}) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}