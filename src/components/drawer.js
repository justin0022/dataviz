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