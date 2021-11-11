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
        <a className='social-btn' id='twitter' href="https://twitter.com/CBLTcoin">
          Twitter
        </a>
        <a className='social-btn' id='insta' href="https://www.instagram.com/cbltcoin/">
          Instagram
        </a>
        <a className='social-btn' id='discord' href="https://discord.gg/FwJ5Xkfj">
          Discord
        </a>
        <a className='social-btn' id='reddit' href="https://www.reddit.com/r/cblt">
          Reddit
        </a>
      </div>
      <h3 id='touch'>Get in Touch with the Developer</h3>
      <div className='contact'>
        <h4 id='my-name'>Founder and Lead Developer:  Jared Beneroff</h4>
        <p id='email'>Email:  admin@cbltcoin.com</p>
        <a className='social-btn' id='linkedin' href="https://www.linkedin.com/in/jared-beneroff/">
          LinkedIn
        </a>
        <a className='social-btn' id='github' href="https://github.com/jbeneroff">
          Github
        </a>
      </div>
    </div>
  )
}
