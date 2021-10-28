import React from 'react';
import { Button } from 'uiw';
import logo from './logo.png';
import styles from './App.module.css';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" /><div>
        <h1 id='name'>Cobalt (CBLT)</h1>
        <h3 id='token'>A Binance Smart Chain Token</h3>
      </div>
      <div className={styles.btns}>
        <a className='nav-item' href='https://www.cbltmint.com'>
          <Button type="primary">Cobalt Cat NFTs</Button>
        </a>
        <a className='nav-item' href='https://pancakeswap.finance/swap'>
        <Button type="success">PancakeSwap</Button>
        </a>
        <a className='nav-item' href=''>
          <Button type="light">About CBLT</Button>
        </a>
        <a className='nav-item' href=''>
          <Button type="danger">Discord Channel</Button>
        </a>
        <a className='nav-item' href=''>
          <Button type="dark">Contact Us</Button>
        </a>
      </div>
    </header>
  </div>
);

export default App;
