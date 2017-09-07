import React from 'react'
import './home.css'




import { Carousel } from 'antd'

import Header from '../Header/Header'
import ShowPic from '../ShowPic/ShowPic'
import Paomadeng from '../paomadeng/Paomadeng.js'
import Serve from '../Serve/Serve'
import News from '../News/News'
import Ten from '../Ten/Ten'
import Footer from '../Footer/Footer'

class Home extends React.Component{
  render(){
    return (
      <div className='home-wrap'>
        <Header />
        <div className='banner'>
			<Carousel autoplay>
				<div>
                    <img src='http://ovj2zrj7v.bkt.clouddn.com/banner2.jpg' alt="banner1" />            
                </div>
				<div>
                    <img src='http://ovj2zrj7v.bkt.clouddn.com/banner1.jpg' alt="banner2" />            
                </div>
				<div>
                    <img src='http://ovj2zrj7v.bkt.clouddn.com/banner3.jpg' alt="banner3" />            
                </div>
				<div>
                    <img src='http://ovj2zrj7v.bkt.clouddn.com/banner4.jpg' alt="banner4" />            
                </div>
			</Carousel>
        </div>
        <Serve />
        <Ten />
        <ShowPic />
        <News />
        <div className='car'>
        	<h1>车辆展示</h1>
            <h3>因为专业，所以安心</h3>
        	<div>
        		<Paomadeng />
        	</div>
        </div>
        <Footer />
      </div>    
    )
  }
}
export default Home
  