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
        Paomadeng
        <Carousel autoplay slidesToShow={7} slidesToScroll={1}>
        	<Card  bodyStyle={{padding:0}}>
					<img src={jpg5} alt='1' width='100%'/>       		
        	</Card>

				<div>
					<img src={jpg5} alt='1'/>
				</div>
				<div>
					<img src={jpg5} alt='1'/>
				</div>
				<div>
					<img src={jpg5} alt='1'/>
				</div>
				<div>
					<img src={jpg5} alt='1'/>
				</div>
				<div>
					<img src={jpg5} alt='1'/>
				</div>
				<div>
					<img src={jpg5} alt='1'/>
				</div>
				<div>
					<img src={jpg5} alt='1'/>
				</div>
			</Carousel>
      </div>    
    )
  }
  }
  export default Paomadeng
  