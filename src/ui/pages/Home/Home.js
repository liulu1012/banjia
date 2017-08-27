import React from 'react'
import './home.css'
import logo from './logo.png'
import banjia from './banjia.jpg'
import banner1 from './1.jpg'
import banner2 from './2.jpg'
import banner3 from './3.jpg'
import banner4 from './4.jpg'


import { Carousel } from 'antd'

import ShowPic from '../ShowPic/ShowPic'
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
				<div>
                    <img src={banner1} alt="banner1" />            
                </div>
				<div>
                    <img src={banner2} alt="banner2" />            
                </div>
				<div>
                    <img src={banner3} alt="banner3" />            
                </div>
				<div>
                    <img src={banner4} alt="banner4" />            
                </div>
			</Carousel>
        </div>
        <Serve />
        <ShowPic />
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
  