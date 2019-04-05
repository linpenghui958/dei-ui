import {expect} from 'chai'
import {shaloowMount, mount} from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Button from '@/button'

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.exist
  })
  it('可以设置icon.', () => {
    // const Constructor = Vue.extend(Button)
    // const vm = new Constructor({
    //   propsData: {
    //     icon: 'settings'
    //   }
    // }).$mount()
    // const useElement = vm.$el.querySelector('use')
    // expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    // vm.$destroy()
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    const element = wrapper.find('use')
    expect(element.attributes('href')).to.equal('#i-settings')
  })
  it('可以设置loading.', () => {
    const wrapper = mount(Button, {
        propsData: {
          icon: 'setting',
          loading: true
        }
    })
    const element = wrapper.find('use')
    expect(element).to.exist
    expect(element.attributes()['href']).to.equal('#i-loading')
  })
  it('icon 默认的 order 是 1', () => {
    // const div = document.createElement('div')
    // document.body.appendChild(div)
    // const Constructor = Vue.extend(Button)
    // const vm = new Constructor({
    //   propsData: {
    //     icon: 'setting',
    //   }
    // }).$mount(div)
    // const icon = vm.$el.querySelector('svg')
    // expect(getComputedStyle(icon).order).to.eq('1')
    // vm.$el.remove()
    // vm.$destroy()
    
  })
  // it('设置 iconPosition 可以改变 order', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: 'setting',
  //       position: 'right'
  //     }
  //   }).$mount(div)
  //   const icon = vm.$el.querySelector('svg')
  //   expect(getComputedStyle(icon).order).to.eq('2')
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
  // it('点击 button 触发 click 事件', () => {
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: 'setting',
  //     }
  //   }).$mount()
  
  //   const callback = sinon.fake();
  //   vm.$on('click', callback)
  //   vm.$el.click()
  //   expect(callback).to.have.been.called

  //   const wrapper = mount(Button, {
  //     propsData: {
  //       icon: 'setting',
  //     }
  //   })
  
  // })
})
