import React from 'react'
import './showPic.css'

import { Row,Col }from 'antd'



class ShowPic extends React.Component{
	render(){
		return(
				
        	<div className='show-wrap'>
       			<div className='show-wrap-inner'>
					<Row type="flex" justify="space-between">
						<Col span={6}>
							<div className='show'>
		    					<img src='http://ovj2zrj7v.bkt.clouddn.com/show1%20%281%29.jpg' alt="" />
		    				</div>
						</Col>
						<Col span={6}>
							<div className='show'>
	        					<img src='http://ovj2zrj7v.bkt.clouddn.com/show1%20%282%29.jpg' alt="" />
	        				</div>
						</Col>
						<Col span={6}>
							<div className='show'>
	        					<img src='http://ovj2zrj7v.bkt.clouddn.com/show1%20%283%29.jpg' alt="" />
	        				</div>
						</Col>
						<Col span={6}>
							<div className='show'>
	        					<img src='http://ovj2zrj7v.bkt.clouddn.com/show1%20%284%29.jpg' alt="" />
	        				</div>
						</Col>
					</Row>
        		</div>
       	 </div>
			)
	}
}

export default ShowPic