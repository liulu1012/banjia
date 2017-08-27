  import React from 'react'
  import './serve.css'
  import  './iconfont.eot'
  import './iconfont.woff'
  import './iconfont.ttf'
  import './iconfont.svg'
import { Row ,Col} from 'antd'

  class Serve extends React.Component{
  render(){
    return (
    	<div className='serve-wrap'>
			<div className='serve'>
			   <h1>服务类别</h1>
			   <h3>神马都不留，一个电话搬地球</h3>
				<Row type="flex" justify="space-around">
					<Col span={6}>
						<i className='iconfont iconFont geren'>
							&#xe630;
							<p><span>个人搬家</span></p>
						</i>
					</Col>
					<Col span={6}>
						<i className='iconfont iconFont bangongshi'>
							&#xe631;
							<p><span>办公室搬迁</span></p>
						</i>
					</Col>
					<Col span={6}>
						<i className='iconfont iconFont changtu'>
							&#xe6b4;
							<p><span>长途搬家</span></p>
						</i>
					</Col>
					<Col span={6}>
						<i className='iconfont iconFont kongtiao'>
							&#xe807;
							<p><span>空调移机</span></p>
						</i>
					</Col>
				</Row>
				<Row type="flex" justify="space-around">
					<Col span={6}>
						<i className='iconfont iconFont qizhong'>
							&#xe613;
							<p><span>起重服务</span></p>
						</i>
					</Col>
					<Col span={6}>
						<i className='iconfont iconFont jiaju'>
							&#xe60b;
							<p><span>家具拆装</span></p>
						</i>
					</Col>
					<Col span={6}>
						<i className='iconfont iconFont baojie'>
							&#xe7f4;
							<p><span>保洁家政</span></p>
						</i>
					</Col>
					<Col span={6}>
						<i className='iconfont iconFont cangku'>
							&#xe62c;
							<p><span>仓储服务</span></p>
						</i>
					</Col>
				</Row>
		  </div>
    	</div>    
    )
  }
  }
  export default Serve
  