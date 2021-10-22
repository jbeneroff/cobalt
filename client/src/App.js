import { Route } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Layout from './components/Layout'
import './App.css'

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Route path='/'>
          <MainContainer />
        </Route> */}
      </Layout>
    </div>
  )
}

export default App
