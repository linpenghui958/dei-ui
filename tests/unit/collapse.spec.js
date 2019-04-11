import chai, {expect} from 'chai'
import {shaloowMount, mount} from '@vue/test-utils'
import Collapse from '../../src/collapse'
import CollapseItem from '../../src/collapse-item'

describe('Collapse', () => {
  it('存在', () => {
    expect(Collapse).to.be.ok
  })


  // xit('设置 selected 属性', () => {
  //   // Vue.component('d-collapse', Collapse)
  //   // Vue.component('d-collapse-item', CollapseItem)
  //   // const div = document.createElement('div')
  //   // document.body.appendChild(div)
  //   // div.innerHTML = `
  //   //   <d-collapse :selected="['1', '2']">
  //   //     <d-collapse-item title="标题1" name="1"><span id="content1">内容1</span></d-collapse-item>
  //   //     <d-collapse-item title="标题2" name="2"><span id="content2">内容2</span></d-collapse-item>
  //   //     <d-collapse-item title="标题3" name="3"><span id="content3">内容3</span></d-collapse-item>
  //   //   </d-collapse>
  //   // `
  //   // const vm = new Vue({
  //   //   el: div
  //   // })
  //   // setTimeout(() => {

  //   //   expect(vm.$el.querySelector('#content1')).to.exist
  //   //   expect(vm.$el.querySelector('#content2')).to.exist
  //   //   expect(vm.$el.querySelector('#content3')).to.not.exist
  //   //   done()
  //   // })
  //   const collapseItem = {
  //     name: 'd-collapse-item',
  //     template: `<CollapseItem title="标题1" name="1"><span id="content1">内容1</span></CollapseItem>`
  //   }

  //   const wrapper = mount(Collapse, {
  //     propsData: {
  //       selected: ['1', '2']
  //     },
  //     slots: {
  //       default: [
  //         collapseItem,
  //       ]
  //     }
  //   })
  //   console.log(wrapper.html())
  // })

  // xit('接受 single 属性', (done) => {
  //   Vue.component('d-collapse', Collapse)
  //   Vue.component('d-collapse-item', CollapseItem)
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //     <d-collapse :selected="selected" single>
  //       <d-collapse-item title="标题1" name="1"><span id="content1">内容1</span></d-collapse-item>
  //       <d-collapse-item title="标题2" name="2"><span id="content2">内容2</span></d-collapse-item>
  //       <d-collapse-item title="标题3" name="3"><span id="content3">内容3</span></d-collapse-item>
  //     </d-collapse>
  //   `
  //   let vm = new Vue({
  //     el: div,
  //     data: {
  //       selected: ['1']
  //     }
  //   })
  //   setTimeout(() => {
  //     vm.$el.querySelector('.title[data-name="2"]').click()
  //     setTimeout(() => {
  //       expect(vm.$el.querySelector('#content2')).to.be.exist
  //       expect(vm.$el.querySelector('#content1')).to.not.be.exist
  //       expect(vm.$el.querySelector('#content3')).to.not.be.exist
  //       done()
  //     })
  //   })


  // })


  // xit('可以触发 update:selected 方法', (done) => {
  //   Vue.component('d-collapse', Collapse)
  //   Vue.component('d-collapse-item', CollapseItem)
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //       <d-collapse @update:selected="func1" :selected="['1']">
  //         <d-collapse-item title="标题1" name="1"><span id="content1">内容1</span></d-collapse-item>
  //         <d-collapse-item title="标题2" name="2"><span id="content2">内容2</span></d-collapse-item>
  //         <d-collapse-item title="标题3" name="3"><span id="content3">内容3</span></d-collapse-item>
  //       </d-collapse>
  //       `

  //   const callback = sinon.fake()
  //   let vm = new Vue({
  //     el:div,
  //     methods: {
  //       func1: callback
  //     }
  //   })

  //   setTimeout(() => {
  //     vm.$el.querySelector('.title[data-name="2"]').click()
  //     setTimeout(() => {
  //       expect(callback).to.have.been.called
  //       done()
  //     })
  //   })
  // })

})
