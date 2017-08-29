import React from 'react'
import banjia from './banjia.jpg'
import './ten.css'

class Ten extends React.Component{
	render(){
		return(
				<div>
					<div className='ten'>
			        	<div className='renzheng'>
			        		<h2>优质搬家公司</h2>
			        	</div>
			        	<div className='tenPic'>
							<div className='tenTop'>
								<img src={banjia} alt="" />
								<img src={banjia} alt="" />
								<img src={banjia} alt="" />
								<img src={banjia} alt="" />
								<img src={banjia} alt="" />
							</div>
							<div className='tenBotm'>
								<img src={banjia} alt="" />
								<img src={banjia} alt="" />
								<img src={banjia} alt="" />
								<img src={banjia} alt="" />
								<img src={banjia} alt="" />
							</div>
			        	</div>
        			</div>
				</div>
			)
	}
}

export default Ten