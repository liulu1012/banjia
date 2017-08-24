import React from 'react'
import './home.css'
import logo from './logo.png'
import banjia from './banjia.jpg'
import show from './show.jpg'

import { Carousel } from 'antd'

import Paomadeng from '../paomadeng/Paomadeng.js'

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
                <div className="wrap1">
                    <div className="tile"> 
                        <img src={logo}/>
                        <div className="text">
                            <h1>标准双人间</h1>
                            <h2 className="animate-text">商务出差家庭出游侣蜜月</h2>
                            <p className="animate-text">面积：22-25㎡<br />规格：两张1m*2m的单人床/一张2m*2m的情侣大床<br/>设备：高速wifi、液晶电视、空调、独立卫生间、24小时热水供应、烧水设备等</p>
                            <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>


                    <div className="tile"> 
                        <img src={logo}/>
                        <div className="text">
                            <h1>温馨三人间</h1>
                            <h2 className="animate-text">三口之家、朋友聚会</h2>
                            <p className="animate-text">面积：22-25㎡<br />规格：一张1m*2m的单人床+一张2m*2m的大床<br />设备：高速wifi、液晶电视、空调、独立卫生间、24小时热水供应、烧水设备等 </p>
                            <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                    <div className="tile"> 
                        <img src={logo}/>
                        <div className="text">
                            <h1>家庭四人间</h1>
                            <h2 className="animate-text">闺蜜出行、家庭经济出游</h2>
                            <p className="animate-text">面积：22-25㎡<br />规格：两张2m*2m的大床<br />设备：高速wifi、液晶电视、空调、独立卫生间、24小时热水供应、烧水设备等 </p>
                            <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
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
  