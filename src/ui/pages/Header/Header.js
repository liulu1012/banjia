import React from 'react'
import logo from './logo.png'

class Header extends React.Component{
render(){
return (
	<div className='home-top'>
		<div className='logo'>
			<img src={logo} />
		</div>
		<div className='tel'>
			11111111
		</div>
	</div>   
)
}
}
export default Header
  