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
          <button className='social-btn'>Twitter</button>
        </a>
        <a id='insta' href="">
          <button className='social-btn'>Instagram</button>
        </a>
        <a id='discord' href="">
          <button className='social-btn'>Discord</button>
        </a>
        <a id='reddit' href="">
          <button className='social-btn'>Reddit</button>
        </a>
      </div>
      <h3 id='touch'>Get in Touch with the Developer</h3>
      <div className='contact'>
        <h4 id='name'>Founder and Lead Developer:  Jared Beneroff</h4>
        <p id='email'>Email:  admin@cbltcoin.com</p>
        <a id='linkedin' href="https://www.linkedin.com/in/jared-beneroff/">
          <button className='social-btn'>LinkedIn</button>
        </a>
        <a id='github' href="https://github.com/jbeneroff">
          <button className='social-btn'>Github</button>
        </a>
      </div>
    </div>
  )
}
