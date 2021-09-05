import {Navbar} from '../UI/NavBar/navbar'
import {Footer} from '../UI/footer'
import { PageHead } from '../heading'

interface ILayoutProps extends React.HTMLProps<HTMLDivElement> {}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Navbar />
      <PageHead/>
      <main> {props.children} </main>
      <Footer />
    </>
  )
}

