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

describe('TabsPane', () => {
  it('存在.', () => {
    expect(TabsPane).to.be.ok
  })

  // it('接受 name 属性', () => {
  //   const Construtor = Vue.extend(TabsPane)
  //   const vm = new Construtor({
  //     propsData: {
  //       name: 'xxx'
  //     }
  //   }).$mount()
  //   console.log(vm.$el);
  //   expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  // })
})
