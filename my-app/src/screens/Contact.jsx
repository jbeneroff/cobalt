import { Link } from 'react-router-dom'
import './Contact.css'
import logo from '../assets/logo.png';

export default function Contact() {
  return (
    <div>
      <div>
        <Link to='/'> 
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <h2>Join the Discussion</h2>
      <p id='contact-info'>We believe staying anonymous will help the progression of the various products in the pipeline and the overall distribution of our awareness. However we don’t want to totally cut ourselves off from our community and curious cats around the world. We have many ways to be reached!</p>
      <div className='socials'>
        <a id='twitter' href="">
          <button>Twitter</button>
        </a>
        <a id='insta' href="">
          <button>Instagram</button>
        </a>
        <a id='discord' href="">
          <button>Discord</button>
        </a>
        <a id='reddit' href="">
          <button>Reddit</button>
        </a>
      </div>
      <h3>Get in Touch with the Developer</h3>
      <div className='contact'>
        <h4>Founder and Lead Developer:  Jared Beneroff</h4>
        <p id='email'>Email:  admin@cbltcoin.com</p>
        <a id='linkedin' href="https://www.linkedin.com/in/jared-beneroff/">
          <button>LinkedIn</button>
        </a>
        <a id='github' href="https://github.com/jbeneroff">
          <button>Github</button>
        </a>
      </div>
    </div>
  )
}
