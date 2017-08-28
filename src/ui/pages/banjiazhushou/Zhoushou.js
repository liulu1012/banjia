import React from 'react'
import './zhoushou.css'
import Header from '../Header/Header'

import { Tabs,Select }from 'antd'

const TabPane = Tabs.TabPane
const Option = Select.Option

class Zhoushou extends React.Component{
 state = {
    tabPosition: 'left',
  }
  render() {
    return (
      <div>
      	<Header />
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="搬家合同" key="1">
          	<div className='hetong'>
          		<h1>搬 家 合 同</h1>
          		<h3><span>甲  方(搬家方)：</span><span>乙  方(搬家公司)：</span></h3>
          		<h3><span>地  址：</span><span>	地  址：</span></h3>
          		<h3><span>联络人：</span><span> 	联络人：</span></h3>
          		<h3><span>电  话：</span><span>	电  话：</span></h3>
          		<div>	
		      		<strong>甲乙双方就搬家一事经甲乙双方共同协商，特订立本合同，供双方共同遵守。</strong>
		      		<div className='hetongTxt'>
			      		<p>一、货物名称：（ 1 ）家私（ 2 ）电器（ 3 ）日用品（ 4 ）书籍（ 5 ）杂物（ 6 ）贵重物品：电脑（详见附件（XXX搬家物品清单），注明：清单与合同具有同等效力；</p>
			      		<p>二、搬家搬出地点： ___________________________ ；搬家搬到地点： _____________________________ </p>
			      		<p>三、车型： ________________ ；车牌号：________________
						四、签订搬家合同日期： ______ 年 ______ 月 _____ 日 ；预定搬家日期： ______ 年 ______ 月 _____ 日 </p>
						<p>五、包装要求：甲方应按乙方要求进行标准包装。也可由乙方进行包装，但包装前应检查物品保证安全运输。</p>
						<p>六、乙方责任：保证在合同规定期限内将货物安全运抵指定地点。对承运的货物要负责安全，保证货物无短缺、无损坏、无人为变质。在装卸、运输途中一旦出现货物丢失、短少、变质、损坏等情况，原则上按到达地的市场价格进行赔偿。另有约定的，按约定限额赔偿。但如果货物的缺失和损坏是由不可抗力、货物自身属性决定的合理损耗或是甲方过错造成，则乙方不承担赔偿责任。</p>
						<p>七、一般货物保险由乙方负责，贵重货物保险由甲方负责。甲方应及时对送达货物进行检验，逾期未收货，应向甲方支付保管费用。</p>
						<p>八、运输总费用： ___________ 。 结算方式 : 已付定金 _______。余下金额货物到达并验收完好后一次性付清。</p>
						<p>九、甲方违约责任：乙方按要求将货物送达后，甲方如不足额支付运输费和保管费，乙方对货物享有留置权。</p>
					</div>
					<strong>本合同在双方履约后即行终止。未尽事宜由双方协商解决。</strong>
          		</div>
				<h2><span>甲方（盖章）：</span><span>乙方（盖章）：</span></h2>
				<h2><span>授权代表：</span><span> 授权代表：</span></h2>
				<h2><span>日    期：   年   月   日</span><span>　日    期：  年   月   日</span></h2>
          	</div>
          </TabPane>
          <TabPane tab="搬家须知" key="2">Content of Tab 2</TabPane>
          <TabPane tab="搬家价格" key="3">Content of Tab 3</TabPane>
          <TabPane tab="搬家咨询" key="4">Content of Tab 3</TabPane>
          <TabPane tab="搬家投诉" key="5">Content of Tab 3</TabPane>
          <TabPane tab="搬家吉日" key="6">Content of Tab 3</TabPane>
          <TabPane tab="搬家预约" key="7">Content of Tab 3</TabPane>
          <TabPane tab="车辆介绍" key="8">Content of Tab 3</TabPane>
        </Tabs>
      </div>
		)
	}
}

export default Zhoushou