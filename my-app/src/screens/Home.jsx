import { Switch, Route, Link } from 'react-router-dom'
import { Button } from 'uiw';
import logo from '../assets/logo.png';
import metamask from '../assets/metamask.svg'
import styles from '../App.module.css';
import './Home.css'

export default function Home() {
  return (
    <div>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='home-text'>
        <h1 id='name'>Cobalt (CBLT)</h1>
        <h3 id='token'>A Binance Smart Chain Token</h3>
        <h5 id='address'>Contract Address: 0x599a2070482CA75e5F76B5F3c94A6dc08bdEC6F3</h5>
        <div className='add-wallet'>
          <h6 id='wallet'>We recommend setting up a Trust or Metamask wallet and adding the token by the contract address.</h6>
          <a className='nav-item' href='https://vittominacori.github.io/watch-token/page/?hash=0x7b2261646472657373223a22307835393961323037303438324341373565354637364235463363393441366463303862644543364633222c226c6f676f223a2268747470733a2f2f692e696d6775722e636f6d2f776f65776e4e302e706e67227d&network=bsc_mainnet'>
            <img id='metamask-logo' src={metamask} alt="Metamask" title='Add Token to Metamask'/>
          </a>
        </div>
        <p id='info'>Cobalt (CBLT) is a cat-themed BEP-20 token built on the Binance Smart Chain for the benefit of near instantaneous transaction speed.
          Its purpose is to be a rigid Store of Value (SoV) digital asset. The total supply of CBLT is 1 Billion tokens.
          These will be gradually introduced to the market as the development team uses them to expand the Cobalt ecosystem.
          A portion of all proceeds will be donated to various animal shelters.</p>
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
