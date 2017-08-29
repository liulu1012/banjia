  import React from 'react'

  import './news.css'
  import {Link} from 'react-router-dom'

  class News extends React.Component{
  render(){
    return (
        <div className='intro-wrap'>
        	<div className='intro'>
	          	<div className='user'>
	        		<h3>搬家助手</h3>
	        		<div className='intro-nav'>
	        			<ul>
	        				<li><Link to='/zhushou'>搬家合同</Link></li>
	        				<li><Link to='/zhushou'>搬家须知</Link></li>
	        			</ul>
	        			<ul>
	        				<li><Link to='/zhushou'>搬家价格</Link></li>
	        				<li><Link to='/zhushou'>搬家咨询</Link></li>
	        			</ul>
	        			<ul>
	        				<li><Link to='/zhushou'>搬家投诉</Link></li>
	        				<li><Link to='/zhushou'>搬家吉日</Link></li>
	        			</ul>
	        			<ul>
	        				<li><Link to='/zhushou'>搬家预约</Link></li>
	        				<li><Link to='/zhushou'>车辆介绍</Link></li>
	        			</ul>
	        		</div>
	        	</div>
	        	<div className='intro-tel'>
					<h3>注意事项</h3>
	        	</div>
	        	<div className='news'>
	        		<h3>相关新闻</h3>
					<div className="page">
						<ul className="box item1">
							<li>搬家当天应该注意哪些事项？</li>
							<li>搬家后的需要做哪些整理工作</li>
							<li>搬家过程中如遇到损坏后索赔情况</li>
							<li>搬家的打包学问大</li>
							<li>搬家入驻新房讲究这些您知道吧?</li>
							<li>搬家过程中如何避免您的物品碰撞？</li>
							<li>搬家有哪些禁忌</li>
							<li>新房搬家注意事项</li>
							<li>居民搬家应注意哪些事项</li>
							<li>钢琴在搬运中需要注意哪些事项</li>
							<li>搬运保险柜要注意哪些</li>
							<li>大学生搬家有哪些注意事项呢？</li>
							<li>那么雨天搬家需要注意什么？</li>
							<li>贵重家电搬运需要注意的事情</li>
							<li>搬家之前您需要了解这些问题</li>
						</ul>
						<ul className="box item2">
							<li>搬家当天应该注意哪些事项？</li>
							<li>搬家后的需要做哪些整理工作</li>
							<li>搬家过程中如遇到损坏后索赔情况</li>
							<li>搬家的打包学问大</li>
							<li>搬家入驻新房讲究这些您知道吧?</li>
							<li>搬家过程中如何避免您的物品碰撞？</li>
							<li>搬家有哪些禁忌</li>
							<li>新房搬家注意事项</li>
							<li>居民搬家应注意哪些事项</li>
							<li>钢琴在搬运中需要注意哪些事项</li>
							<li>搬运保险柜要注意哪些</li>
							<li>大学生搬家有哪些注意事项呢？</li>
							<li>那么雨天搬家需要注意什么？</li>
							<li>贵重家电搬运需要注意的事情</li>
							<li>搬家之前您需要了解这些问题</li>
						</ul>
					</div>
	        	</div>      		
        	</div>
        </div>   
    )
  }
  }
  export default News
  