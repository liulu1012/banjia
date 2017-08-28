  import React from 'react'
  import './main.css'
  import {
  	BrowserRouter as Router,
  	Route,
  	Link,
  	Switch
  }from 'react-router-dom'

  import Home from './ui/pages/Home/Home.js'
  import Zhoushou from './ui/pages/banjiazhushou/Zhoushou'

  class App extends React.Component{
  render(){
    return (
      <div className='wrap'>
        <Router>
        	<Switch>
        		<Route exact path='/' component={ Home } />
            <Route path='/zhushou' component={ Zhoushou } />
        	</Switch>
        </Router>
      </div>    
    )
  }
  }
  export default App
  