import React from 'react'
import Home from './containers/Home'
import ChartsContainer from './containers/ChartsContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Charts'>Bar Chart</Link>
          </li>
        </ul>
        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/Charts' component={ChartsContainer} />
      </div>
    </Router>
  )
}

export default App
