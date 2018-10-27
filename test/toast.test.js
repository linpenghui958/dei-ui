const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
      expect(Toast).to.exist
  })
  describe('props', () => {

    it('接受 autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.equal(false)
        done()
      })
    })

    it('接受 closeButton', (done) => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: 'closeText',
            callback
          }
        }
      }).$mount()
      let useElement = vm.$el.querySelector('.close')
      expect(useElement.textContent.trim()).to.equal('closeText')
      setTimeout(() => {
        useElement.click()
        expect(callback).to.have.been.called
        done()
      }, 200)
    })

    it('接受 enableHtml', () => {
      const Construtor = Vue.extend(Toast)
      const vm = new Construtor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })

    it('可以设置position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
          propsData: {
              position: 'top'
          }
      }).$mount()
      expect(vm.$el.classList[1]).to.equal('position-top')
    })
  })


})
