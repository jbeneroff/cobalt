import { Switch, Route, Link } from 'react-router-dom'
import { Button } from 'uiw';
import logo from '../assets/logo.png';
import styles from '../App.module.css';

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
        <a className='nav-item' href='https://pancakeswap.finance/swap'>
          <Button type="success">PancakeSwap</Button>
        </a>
        <Link to='/about'>
          <Button type="light">About CBLT</Button>
        </Link>
      </div>
      <div>
        <h4>Contact Us</h4>
        <p>admin@cbltcoin.com</p>
      </div>
    </div>
  )
}
