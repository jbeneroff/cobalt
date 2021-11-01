import { Switch, Route, Link } from 'react-router-dom'
import MainContainer from './containers/MainContainer'
import Layout from './layouts/Layout'
import { Button } from 'uiw';
import logo from './assets/logo.png';
import styles from './App.module.css';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';


const App = () => (
  <div className="App">
    <header className="App-header">
      <Layout>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Layout> 
    </header>
  </div>
);

export default App;
