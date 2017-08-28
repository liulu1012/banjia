  import React from 'react'
  import './footer.css'

  import { Row,Col,Tabs }from 'antd'

const TabPane = Tabs.TabPane	
  class Footer extends React.Component{
  	callback = (key) => {
  		console.log(key)
  	}
  render(){
    return (
      <div className='footer'>
        Footer
        <div className='footer-inner'>

			<Row  justify="center">
				<Col span={4}>关于我们</Col>
				<Col span={4}>联系我们</Col>
				<Col span={4}>合作招商</Col>
				<Col span={4}>商家帮助</Col>
				<Col span={4}>最新动态</Col>
				<Col span={4} className='last'>投诉建议</Col>
			</Row>
        </div>
        <div className='footer-bottom'>
		<Tabs defaultActiveKey="1" onChange={this.callback} tabBarStyle={{border:'0px',color:'white'}}>
			<TabPane tab="关于我们" key="1">
				关于我们
			</TabPane>
			<TabPane tab="联系我们" key="2">
				联系我们
			</TabPane>
			<TabPane tab="合作招商" key="3">
				合作招商
			</TabPane>
			<TabPane tab="商家帮助" key="4">
				商家帮助
			</TabPane>
			<TabPane tab="最新动态" key="5">
				最新动态
			</TabPane>
			<TabPane tab="T投诉建议" key="6">
				投诉建议
			</TabPane>
		</Tabs>
		</div>
      </div>    
    )
  }
  }
  export default Footer
  