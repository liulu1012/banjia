import React from 'react'
import './showPic.css'

import { Row,Col }from 'antd'

import show1 from './1.jpg'
import show2 from './2.jpg'
import show3 from './3.jpg'
import show4 from './4.jpg'

class ShowPic extends React.Component{
	render(){
		return(
				
        	<div className='show-wrap'>
       			<div className='show-wrap-inner'>
					<Row type="flex" justify="space-between">
						<Col span={6}>
							<div className='show'>
		    					<img src={show1} alt="" />
		    				</div>
						</Col>
						<Col span={6}>
							<div className='show'>
	        					<img src={show2} alt="" />
	        				</div>
						</Col>
						<Col span={6}>
							<div className='show'>
	        					<img src={show3} alt="" />
	        				</div>
						</Col>
						<Col span={6}>
							<div className='show'>
	        					<img src={show4} alt="" />
	        				</div>
						</Col>
					</Row>
        		</div>
       	 </div>
			)
	}
}

export default ShowPic