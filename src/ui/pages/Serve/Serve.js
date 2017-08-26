  import React from 'react'
  import './serve.css'
  import eot from './iconfont.eot'
  import woff from './iconfont.woff'
  import ttf from './iconfont.ttf'
  import svg from './iconfont.svg'

  import { Row,Col }from 'antd'

  class Serve extends React.Component{
  render(){
    return (
    	<div className='serve-wrap'>
			<div className='serve'>
			   <h1>服务类别</h1>
			   <h3>神马都不留，一个电话搬地球</h3>
				<Row type="flex" justify="space-around">
					<Col span={4}>
						<div>
						<i className='iconfont jumin'></i>
						</div>
					</Col>
					<Col span={4}>
						<i className='iconfont jumin'></i>
					</Col>
					<Col span={4}>
						<i className='iconfont jumin'></i>
					</Col>
					<Col span={4}>
						<i className='iconfont jumin'></i>
					</Col>
				</Row>
				<Row type="flex" justify="space-around">
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
				</Row>
		  </div>
    	</div>    
    )
  }
  }
  export default Serve
  