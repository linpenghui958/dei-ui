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
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('接受value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.value).to.eq('1234')
    })

    it('接受disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.disabled).to.eq(true)
    })

    it('接受readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.readOnly).to.eq(true)
    })

    it('接受error', () => {
      vm = new Constructor({
        propsData: {
          error: 'wrong'
        }
      }).$mount()
      const iconEle = vm.$el.querySelector('use')
      expect(iconEle.getAttribute('xlink:href')).to.eq('#i-error')
      const errMsg = vm.$el.querySelector('.errorMsg')
      expect(errMsg.innerText).to.eq('wrong')
    })
  })

  describe('event', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持change/input/blur/focus事件', () => {
      ['change', 'input', 'blur', 'focus'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // 触发input事件
        let event = new Event(eventName)
        Object.defineProperty(event, 'target',
          {
            value: {value: 'hi'},
            enumerable: true,
            configurable: true,
            writable: true
          }
        )
        let inputEle = vm.$el.querySelector('input')
        inputEle.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })


})