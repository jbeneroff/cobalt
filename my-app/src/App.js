import { Switch, Route, Link } from 'react-router-dom'
import Layout from './layouts/Layout'
import { Button } from 'uiw';
import logo from './assets/logo.png';
import styles from './App.module.css';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import NFT from './screens/NFT';


const App = () => (
  <div className="App">
    <header className="App-header">
      <Layout>
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/nft'>
            <NFT />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout> 
    </header>
  </div>
);

export default App;
