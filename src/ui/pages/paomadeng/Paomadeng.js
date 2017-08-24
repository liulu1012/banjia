  import React from 'react'
  import './paomadeng.css'
  import jpg2 from './2.jpg'
  import jpg3 from './3.jpg'
  import jpg4 from './4.jpg'
  import jpg5 from './5.jpg'

class Paomadeng extends React.Component{
	constructor(){
		super()
		this.state = {
			data:0
		}
	}
  render(){
    return (
      <div className=''>
        Paomadeng
        	<div className="str-wrap">
        		<div className="str-inner">
					<img src={jpg5} alt='1'/>
					<img src={jpg2}  alt='1'/>
					<img src={jpg3} alt='1' />
					<img src={jpg4} alt='1' />
					<img src={jpg5} alt='1' />
					<img src={jpg4} alt='1' />
					<img src={jpg2} alt='1' />
					<img src={jpg3} alt='1' />
					<img src={jpg4} alt='1' />
					<img src={jpg5} alt='1' />
					<img src={jpg3} alt='1' />
					<img src={jpg2} alt='1' />
					<img src={jpg3} alt='1' />
					<img src={jpg4} alt='1' />
					<img src={jpg5} alt='1' />
					<img src={jpg4} alt='1' />
					<img src={jpg3}  alt='1'/>
					<img src={jpg2}  alt='1'/>
					<img src={jpg3}  alt='1'/>
        		</div>
		    </div>
      </div>    
    )
  }
  }
  export default Paomadeng
  