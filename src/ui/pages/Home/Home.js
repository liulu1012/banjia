import React from 'react'
import './home.css'


import banner1 from './1.jpg'
import banner2 from './2.jpg'
import banner3 from './3.jpg'
import banner4 from './4.jpg'


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
                    <img src={banner2} alt="banner1" />            
                </div>
				<div>
                    <img src={banner1} alt="banner2" />            
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
  