import {Navbar} from '../UI/navbar'
import {Footer} from '../UI/footer'
import { PageHead } from '../heading'

export default function Layout({ children }) {
  return (
    
    <>
      
      <Navbar />
        <PageHead/>
        <main>{children}</main>
      <Footer />
    </>
  )
}