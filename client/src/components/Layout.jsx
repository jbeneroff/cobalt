import Header from '../components/Header'
import Footer from '../components/Footer'
import './Layout.css'

export default function Layout(props) {

  return (
    <div className='layout'>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}