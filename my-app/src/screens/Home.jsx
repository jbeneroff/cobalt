import { Switch, Route, Link } from 'react-router-dom'
import { Button } from 'uiw';
import logo from '../assets/logo.png';
import styles from '../App.module.css';
import './Home.css'

export default function Home() {
  return (
    <div>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <h1 id='name'>Cobalt (CBLT)</h1>
        <h3 id='token'>A Binance Smart Chain Token</h3>
        <h5 id='address'>Contract Address: 0x599a2070482CA75e5F76B5F3c94A6dc08bdEC6F3</h5>
        <h6 id='wallet'>We recommend setting up a Trust or Metamask wallet and adding the token by the contract address.</h6>
        <p id='info'>Cobalt is an cat-themed token built on the Binance Smart Chain for the benefits of near instantaneous transaction speed, and bridging capabilities across various dApps and networks. Its purpose is to be a rigid Store of Value (SoV) digital asset.</p>
      </div>
      <div className={styles.btns}>
        {/* <Link to ='/NFT' className='nav-item'>
          <Button type="primary">Cobalt Cat NFTs</Button>
        </Link> */}
        <a className='nav-item' href='https://pancakeswap.finance/swap'>
          <Button type="primary">PancakeSwap</Button>
        </a>
        <Link to='/about' className='nav-item'>
          <Button type="primary">About CBLT</Button>
        </Link>
        <Link to='/contact' className='nav-item'>
          <Button type="primary">Socials & Contact</Button>
        </Link>
      </div>
    </div>
  )
}
