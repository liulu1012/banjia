  import React from 'react'
  import './main.css'
  import {
  	BrowserRouter as Router,
  	Route,
  	Link,
  	Switch
  }from 'react-router-dom'

  import Home from './ui/pages/Home/Home.js'

  class App extends React.Component{
  render(){
    return (
      <div className='wrap'>
        <Router>
        	<Switch>
        		<Route exact path='/' component={ Home } />
        	</Switch>
        </Router>
      </div>    
    )
  }
  }
  export default App
  