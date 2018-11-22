const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.component('d-collapse', Collapse)
Vue.component('d-collapse', CollapseItem)

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Collapse', () => {
  it('存在', () => {
    expect(Collapse).to.be.ok
  })

  it('接受 selected 属性', (done) => {
    Vue.component('d-collapse', Collapse)
    Vue.component('d-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <d-collapse :selected="xxx">
          <d-collapse-item title="标题1" name="1"><span id="content-1">1</span></d-collapse-item>
          <d-collapse-item title="标题2" name="2"><span id="content-2">2</span></d-collapse-item>
          <d-collapse-item title="标题3" name="3"><span id="content-3">3</span></d-collapse-item>
        </d-collapse>
    `
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1', '2']
      }
    })
    setTimeout(() => {
      console.log(vm.$el.querySelector('.title'))
      expect(vm.$el.querySelector('#content-1')).to.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      expect(vm.$el.querySelector('#content-3')).to.not.exist
      done()
    })
  })


  it('设置 selected 属性', (done) => {
    Vue.component('d-collapse', Collapse)
    Vue.component('d-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <d-collapse :selected.sync="['1', '2']">
        <d-collapse-item title="标题1" name="1">内容1</d-collapse-item>
        <d-collapse-item title="标题2" name="2">内容2</d-collapse-item>
        <d-collapse-item title="标题3" name="3">内容3</d-collapse-item>
      </d-collapse>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {

      console.log(vm.$el.querySelector('.title[data-name="1"]'));
      // vm.$el.querySelector('.title[data-name="2"]').to.not.exist()
      // vm.$el.querySelector('.title[data-name="3"]').to.not.exist()
      done()
    })
  })

  // it('接受 single 属性', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //     <d-collapse :selected.sync="selected" single>
  //       <d-collapse-item title="标题1" name="1">内容1</d-collapse-item>
  //       <d-collapse-item title="标题2" name="2">内容2</d-collapse-item>
  //       <d-collapse-item title="标题3" name="3">内容3</d-collapse-item>
  //     </d-collapse>
  //   `
  //   let vm = new Vue({
  //     el: div,
  //     data: {
  //       selected: ['1']
  //     }
  //   })
  //   vm.$nextTick(() => {
  //     vm.$el.querySelector('.title[data=2]').click()
  //
  //     // vm.$el.querySelector('.title[data-2]').to.be.exist()
  //     // vm.$el.querySelector('.title[data-1]').to.not.be.exist()
  //     // vm.$el.querySelector('.title[data-3]').to.not.be.exist()
  //
  //   })
  //
  // })

})
