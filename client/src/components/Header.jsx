import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div>
        <h1 id='name'>Cobalt (CBLT)</h1>
        <h3 id='token'>A Binance Smart Chain Token</h3>
      </div>
      <div className='nav'>
        <a className='nav-item' href="">Cobalt Cat NFTs</a>
        <a className='nav-item' href="">Buy CBLT on PancakeSwap</a>
        <a className='nav-item' id='contact-nav' href='#contact-link'>Contact Us</a>
      </div>
    </div>
  )
}