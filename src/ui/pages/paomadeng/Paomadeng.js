  import React from 'react'
  import './paomadeng.css'
  import { Carousel,Card } from 'antd'
  import jpg2 from './2.jpg'
  import jpg3 from './3.jpg'
  import jpg4 from './4.jpg'
  import jpg5 from './5.jpg'

class Paomadeng extends React.Component{

  render(){

    return (
      <div className=''>
        <Carousel autoplay slidesToShow={6} slidesToScroll={1} dots={false}>
        	<Card  bodyStyle={{padding:0}} style={{height:'380px'}}>
				<div className="custom-image jpg1">
					 
				</div>     		
        	</Card>
        	<Card  bodyStyle={{padding:0}} style={{height:'380px'}}>
				<div className="custom-image jpg2">
					 
				</div>     		
        	</Card>
        	<Card  bodyStyle={{padding:0}} style={{height:'380px'}}>
				<div className="custom-image jpg3">
					 
				</div>     		
        	</Card>
        	<Card  bodyStyle={{padding:0}} style={{height:'380px'}}>
				<div className="custom-image jpg4">
					 
				</div>     		
        	</Card>
        	<Card  bodyStyle={{padding:0}} style={{height:'380px'}}>
				<div className="custom-image jpg5">
					 
				</div>     		
        	</Card>
        	<Card  bodyStyle={{padding:0}} style={{height:'380px'}}>
				<div className="custom-image jpg6">
					 
				</div>     		
        	</Card>
        	<Card  bodyStyle={{padding:0}} style={{height:'380px'}}>
				<div className="custom-image jpg7">
					 
				</div>     		
        	</Card>
        	<Card  bodyStyle={{padding:0}} style={{height:'380px'}}>
				<div className="custom-image jpg8">
					 
				</div>     		
        	</Card>
			</Carousel>
      </div>    
    )
  }
  }
  export default Paomadeng
  