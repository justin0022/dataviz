import React from 'react'
import Home from './routes/Home'
import LineChart from './routes/LineChart'
import BarChart from './routes/BarChart'
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
            <Link to='/BarChart'>Bar Chart</Link>
          </li>
          <li>
            <Link to='/LineChart'>Line Chart</Link>
          </li>
        </ul>

        <hr />

        <Route exact path='/' component={Home} />
        <div className='parent'>
          <Route path='/BarChart' className='chart' component={BarChart} />
        </div>
        <Route path='/LineChart' component={LineChart} />
      </div>
    </Router>
  )
}

export default App
