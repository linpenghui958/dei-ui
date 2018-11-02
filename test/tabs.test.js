const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsBody from '../src/tabs-body'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('d-tabs', Tabs)
Vue.component('d-tabs-body', TabsBody)
Vue.component('d-tabs-head', TabsHead)
Vue.component('d-tabs-item', TabsItem)
Vue.component('d-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.ok
  })
  it('可以设置selected props', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <d-tabs selected="finance" >
      <d-tabs-head>
        <d-tabs-item name="woman">美女</d-tabs-item>
        <d-tabs-item name="finance">财经</d-tabs-item>
        <d-tabs-item name="sports">体育</d-tabs-item>
      </d-tabs-head>
      <d-tabs-body>
        <d-tabs-pane name="woman">美女相关咨询</d-tabs-pane>
        <d-tabs-pane name="finance">财经相关咨询</d-tabs-pane>
        <d-tabs-pane name="sports">体育相关咨询</d-tabs-pane>
      </d-tabs-body>
    </d-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let el = vm.$el.querySelector('.tabs-item[data-name="finance"]')
      expect(el.classList.contains('active')).to.be.true
      done()
    })
  })

})
