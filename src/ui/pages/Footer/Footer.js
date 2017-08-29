  import React from 'react'
  import './footer.css'

  import { Row,Col,Tabs }from 'antd'

  import mengqu from './mengqu.jpg'
  import yiqu from './yiqu.png'

const TabPane = Tabs.TabPane	
  class Footer extends React.Component{
  	callback = (key) => {
  		console.log(key)
  	}
  render(){
    return (
      <div className='footer'>
        <div className='footer-bottom'>
		<Tabs defaultActiveKey="1" onChange={this.callback} tabBarStyle={{border:'0px',color:'white'}}>
			<TabPane tab="关于我们" key="1">
				<div className='guanyu'>
					<p>秦皇岛亿谷科技自成立以来，以<span style={{fontStyle:'oblique',color:'gray'}}>网站建设/推广/SEO优化、系统开发，微信公众平台及第三方建设管理、管理信息系统开发</span>等为主要业务，向全国各行业各地区中小企业提供多样式一体化服务。</p>
					<p>2015年，亿谷科技已正式被河北天博网授权为华北地区一级代理。以快速模板建站为主营模式，更深一步的帮助客户做好网络营销工作。至今已成功为上百家企业及机构提供网站建设营销管理等服务，并且更多的客户选择与亿谷【天博网】建立长期合作。
					天博网技术团队至今已成功设计出上百款网站模板样式，涉及数十种行业机构，针对各行业特点设计，内容展示全面、外观优化大气、页面丰富整齐。使用天博网自主研发的建站后台，独特免费SEO优化技术和专业人员原创文章，可加快提升排名，进一步为客户做好网站营销工作。

					天博网技术团队使用自主研发的建站后台，独特SEO优化技术，并有专业人员编辑原创文章，可加快提升网站排名，更快一步为客户做好网站营销工作。</p>
					<p>2016年，亿谷科技研发出以旅游、住宿、美食等信息服务为一体的“秦皇岛旅游网”官方网站，网站专注于秦皇岛各个县区景区周边住宿景点资源信息，致力于为商户打造专业的旅游住宿类信息发布推广平台，为广大用户提供最全面的秦皇岛旅游住宿信息，并获得广大用户的好评和鼓励。
					秦皇岛旅游网由亿谷技术团队开发完成——正式上线，亿谷技术团队素质高，技术过硬，人员配备齐全；能够为入驻商户完美多角度展现特点，以广大用户需求为中心。秦皇岛旅游网得到了众多客户用户的点赞认可。
					亿谷科技针对微信平台服务正式启动啦！商城网站 微服务 吸粉推广 微文发布 官网建设等等微信服务一步到位，以最快的速度和最高的品质为客户做好微信管理服务</p>
					<p>2017年，亿谷科技团队将继续扩大。以“尽职尽责，高效执行”为理念，我们坚持“<span style={{fontStyle:'oblique',color:'red'}}>客户第一，服务第一</span>”的服务宗旨，为客户创造价值为自身的社会使命，帮助更多企业客户做好网络营销工作。
					我们不仅为企业提供卓越的，创新的，迎合潮流的网站、软件的设计开发服务，同时为各类机构提供企业级的信息化解决方案</p>	
				</div>
			</TabPane>
			<TabPane tab="联系我们" key="2">
				<div className='lianxi'>		
					<div>				
						<p>		
							<i className="footerIcon fIcon">&#xe643;</i>
							<span className='txt'>400-0000-0000</span>
						</p>
						<p>				
							<i className="footerIcon fIcon">&#xe7c1;</i>
							<span className='txt'>秦皇岛市海港区金辉国贸大厦B座1701室</span>		
						</p>
					</div>
					<div className='lianxi-inner'>
						<h2>关注本公司微信公众号</h2>
						<div className='footerImg'>
							<div>			
								<img src={mengqu} alt="mengqu" />
								<h4>萌趣咨询</h4>
							</div>
							<div>						
								<img src={yiqu} alt="yiqu" />
								<h4>生活逸趣</h4>
							</div>
						</div>
					</div>
				</div>
			</TabPane>
			<TabPane tab="合作招商" key="3">
				<div className='hezuo'>
					<span>亿谷网络科技公司自成立以来，一直致力于中小型企业网站建设，多年来广受好评，不仅为商家节省了推广费用，也将实际效益带来给商家。</span>
					<p className='first'>亿谷官网：<span style={{color:'red'}}>www.qhdego.com</span></p>
					<p>天博网网址：http://qhd.tianbo.tv/</p>
					<p>天狐网网址：http://moban.thuu.cn/</p>
					<p>公司旅游网：http://www.bjhmjz.top/</p>
					<p>公司苗木网：http://www.hbmiaomu.tv/</p>
				</div>
			</TabPane>
			<TabPane tab="商家帮助" key="4">
				<div className='lianxi'>		
					<div>				
						<p>		
							<i className="footerIcon fIcon">&#xe643;</i>
							<span className='txt'>400-0000-0000</span>
						</p>
						<p>				
							<i className="footerIcon fIcon">&#xe7c1;</i>
							<span className='txt'>秦皇岛市海港区金辉国贸大厦B座1701室</span>		
						</p>
					</div>
					<div className='lianxi-inner'>
						<h2>关注本公司微信公众号</h2>
						<div className='footerImg'>
							<div>			
								<img src={mengqu} alt="mengqu" />
								<h4>萌趣咨询</h4>
							</div>
							<div>						
								<img src={yiqu} alt="yiqu" />
								<h4>生活逸趣</h4>
							</div>
						</div>
					</div>
				</div>
			</TabPane>
			<TabPane tab="最新动态" key="5">
				最新动态
			</TabPane>
			<TabPane tab="投诉建议" key="6">
				<div className='lianxi'>		
					<div>				
						<p>		
							<i className="footerIcon fIcon">&#xe643;</i>
							<span className='txt'>400-0000-0000</span>
						</p>
						<p>				
							<i className="footerIcon fIcon">&#xe7c1;</i>
							<span className='txt'>秦皇岛市海港区金辉国贸大厦B座1701室</span>		
						</p>
					</div>
					<div className='lianxi-inner'>
						<h2>关注本公司微信公众号</h2>
						<div className='footerImg'>
							<div>			
								<img src={mengqu} alt="mengqu" />
								<h4>萌趣咨询</h4>
							</div>
							<div>						
								<img src={yiqu} alt="yiqu" />
								<h4>生活逸趣</h4>
							</div>
						</div>
					</div>
				</div>
			</TabPane>
		</Tabs>
		</div>
      </div>    
    )
  }
  }
  export default Footer
  