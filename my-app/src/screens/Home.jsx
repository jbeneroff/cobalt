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
        <p id='info'>Cobalt is an animal-themed currency built on the Binance Smart Chain for the benefits of instantaneous transaction speed, and bridging capabilities across various dApps and networks. It’s sole purpose is to be a rigid store of value (SoV) digital asset with the goal of defeating DOGE and Shiba Inu.</p>
      </div>
      <div className={styles.btns}>
        <Link to ='/NFT' className='nav-item'>
          <Button type="primary">Cobalt Cat NFTs</Button>
        </Link>
        <a className='nav-item' href='https://pancakeswap.finance/swap'>
          <Button type="primary">PancakeSwap</Button>
        </a>
        <Link to='/about' className='nav-item'>
          <Button type="primary">About CBLT</Button>
        </Link>
        <Link to='/contact' className='nav-item'>
          <Button type="primary">Social & Contact</Button>
        </Link>
      </div>
    </div>
  )
}
