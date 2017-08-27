import React from 'react'
import './home.css'
import logo from './logo.png'
import banjia from './banjia.jpg'
import show from './show.jpg'

import { Carousel } from 'antd'

import Paomadeng from '../paomadeng/Paomadeng.js'
import Serve from '../Serve/Serve'

class Home extends React.Component{
  render(){
    return (
      <div className='home-wrap'>
        <div className='home-top'>
        	<div className='logo'>
        		<img src={logo} />
        	</div>
        	<div className='tel'>
				11111111
        	</div>
        </div>
        <div className='banner'>
			<Carousel autoplay>
				<div><h3>1</h3></div>
				<div><h3>2</h3></div>
				<div><h3>3</h3></div>
				<div><h3>4</h3></div>
			</Carousel>
        </div>
        <Serve />

        <div className='fuwu'>
        	<h1 className='title'>服务类别</h1>
        	<h3 className='solgan'>神马都不留，一个电话搬地球</h3>
        	<ul className='fuwu-nav'>
        		<li>全部</li>
        		<li>个人搬家</li>
        		<li>公司搬家</li>
        		<li>长途搬家</li>
        		<li>空调移机</li>
        		<li>家具家电</li>
        	</ul>
        	<div className='show-wrap'>
        		<div className='show'>
        			<img src={show} alt="" />
        		</div>
        		<div className='show'>
        			<img src={show} alt="" />
        		</div>
        		<div className='show'>
        			<img src={show} alt="" />
        		</div>
        		<div className='show'>
        			<img src={show} alt="" />
        		</div>
        	</div>
        </div>
        <div className='intro-wrap'>
        	<div className='intro'>
	          	<div className='user'>
	        		<h3>搬家助手</h3>
	        		<div className='intro-nav'>
	        			<ul>
	        				<li>搬家合同</li>
	        				<li>搬家须知</li>
	        			</ul>
	        			<ul>
	        				<li>搬家价格</li>
	        				<li>搬家咨询</li>
	        			</ul>
	        			<ul>
	        				<li>搬家投诉</li>
	        				<li>搬家吉日</li>
	        			</ul>
	        			<ul>
	        				<li>搬家预约</li>
	        				<li>车辆介绍</li>
	        			</ul>
	        		</div>
	        	</div>
	        	<div className='intro-tel'></div>
	        	<div className='news'>
	        		<h3>相关新闻</h3>
	        	</div>      		
        	</div>
        </div>
        <div className='car'>
        	<h3>车辆展示</h3>
        	<div>
        		<Paomadeng />
        	</div>
        </div>
      </div>    
    )
  }
}
export default Home
  