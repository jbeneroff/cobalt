import { Switch, Route, Link } from 'react-router-dom'
import { Button } from 'uiw';
import logo from '../assets/logo.png';
import styles from '../App.module.css';
import Home from '../screens/Home';

export default function MainContainer() {
  return (
    <div>
      <Route path='/'>
        <Home />
      </Route>
    </div>
  )
}
