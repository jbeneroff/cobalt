import { Button } from 'uiw';
import { Link } from 'react-router-dom'
import './NFT.css'
import logo from '../assets/logo.png';
import devil from '../assets/nft-devil.png'

export default function NFT() {
  return (
    <div>
      <div>
      <div>
        <Link to='/'> 
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <h2>The Cobalt Cat NFT Collection</h2>
      <a className='nav-item' href='https://www.cbltmint.com'>
        <Button type="primary">Mint Cobalt Cat NFTs</Button>
      </a>
      <h5>NFT Minting Website Coming Soon!!!</h5>
      <p id='nft-info'>We are committed to expanding the CBLT ecosystem and this initiative includes a website dedicated to generating CBLT Cat NFTs for our users on cbltmint.com. Click the link, connect your wallet (we suggest Phantom Wallet) and start minting your own Cobalt Cat NFTs on the Solana network today! Our second public product offering to our users is our NFT minting site. Not only do we love our mascot and want the world to have access and ownership rights to it’s universal recognition, but we also aim to turn our NFT minting operation into a source for doing good! Those who generate NFTs of Cobalt Cat on our cbltmint.com will have an added opportunity to receive a free airdrop of CBLT via our lottery system. Those who are lucky enough to generate a Rare or Legendary CBLT Cat NFT will be entered into our lottery system of collected wallet addresses and have a chance at winning more free CBLT tokens. 20% of total supply will be allocated to this gift giving distribution avenue.</p> 
    </div>
    <div className='nft-container'>
        <img className='nft' src={devil} alt="" />
        <img className='nft' src="" alt="" />
        <img className='nft' src="" alt="" />
        <img className='nft' src="" alt="" />
    </div>
  </div>
    
  )
}
