const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在', () => {
    expect(Input).to.exist
  })
  describe('props', () => {
    it('接受value', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.value).to.eq('1234')
      vm.$destroy()
    })

    it('接受disabled', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.disabled).to.eq(true)
      vm.$destroy()
    })

    it('接受readonly', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.readOnly).to.eq(true)
      vm.$destroy()
    })

    it('接受error', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          error: 'wrong'
        }
      }).$mount()
      const iconEle = vm.$el.querySelector('use')
      expect(iconEle.getAttribute('xlink:href')).to.eq('#i-error')
      const errMsg = vm.$el.querySelector('.errorMsg')
      expect(errMsg.innerText).to.eq('wrong')
      vm.$destroy()
    })
  })

  // describe('event', () => {
  //   it('支持change事件')
  // })


})