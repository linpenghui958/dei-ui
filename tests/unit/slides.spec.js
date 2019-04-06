import chai, {expect} from 'chai'
import {shaloowMount, mount} from '@vue/test-utils'
import Slides from '@/slides/slides'
import SlidesItem from '@/slides/slides-item'
import Vue from 'vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

describe('Slides', () => {
  it('存在', () => {
    expect(Slides).to.exist
  })
  
  it('Slides 默认展示第一个', (done) => {
    Vue.component('DSlidesItem', SlidesItem)
    const wrapper = mount(Slides, {
      propsData: {
       auto: false 
      },
      slots: {
        default: `
        <d-slides-item name="1">
          <div class="box1">1</div>
        </d-slides-item>
        <d-slides-item name="2">
          <div class="box2">2</div>
        </d-slides-item>
        <d-slides-item name="3">
          <div class="box3">3</div>
        </d-slides-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.box1').exists()).to.equal(true)
      done()
    })
  })

  it('Slides 点击可以切换', (done) => {
    Vue.component('DSlidesItem', SlidesItem)
    const wrapper = mount(Slides, {
      propsData: {
       auto: false,
       selected: '1'
      },
      slots: {
        default: `
        <d-slides-item name="1">
          <div class="box1">1</div>
        </d-slides-item>
        <d-slides-item name="2">
          <div class="box2">2</div>
        </d-slides-item>
        <d-slides-item name="3">
          <div class="box3">3</div>
        </d-slides-item>
        `
      },
      listeners: {
        'update:selected': (index) => {
          expect(index).to.equal('2')
          done()
        }
      }
    })
    setTimeout(() => {
      wrapper.find('[data-index="1"]').trigger('click')
    })
  })

  it('Slides 可以自动播放', (done) => {
    Vue.component('DSlidesItem', SlidesItem)
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
       auto: true,
       selected: '1',
       delay: 20
      },
      slots: {
        default: `
        <d-slides-item name="1">
          <div class="box1">1</div>
        </d-slides-item>
        <d-slides-item name="2">
          <div class="box2">2</div>
        </d-slides-item>
        <d-slides-item name="3">
          <div class="box3">3</div>
        </d-slides-item>
        `
      },
      listeners: {
        'update:selected': (x) => {
          callback(x)
        }
      }
    })
    setTimeout(() => {
      expect(callback).to.have.been.called
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 21)
  })

  it('Slides 可以点击上一张', (done) => {
    Vue.component('DSlidesItem', SlidesItem)
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
       auto: false,
       selected: '1',
       delay: 20
      },
      slots: {
        default: `
        <d-slides-item name="1">
          <div class="box1">1</div>
        </d-slides-item>
        <d-slides-item name="2">
          <div class="box2">2</div>
        </d-slides-item>
        <d-slides-item name="3">
          <div class="box3">3</div>
        </d-slides-item>
        `
      },
      listeners: {
        'update:selected': (x) => {
          callback(x)
        }
      }
    })
    setTimeout(() => {
      wrapper.find('[data-action="prev"]').trigger('click')
      expect(callback).to.have.been.calledWith('3')
      done()
    }, 21)
  })

  it('Slides 可以点击下一张', (done) => {
    Vue.component('DSlidesItem', SlidesItem)
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
       auto: false,
       selected: '1',
       delay: 20
      },
      slots: {
        default: `
        <d-slides-item name="1">
          <div class="box1">1</div>
        </d-slides-item>
        <d-slides-item name="2">
          <div class="box2">2</div>
        </d-slides-item>
        <d-slides-item name="3">
          <div class="box3">3</div>
        </d-slides-item>
        `
      },
      listeners: {
        'update:selected': (x) => {
          callback(x)
        }
      }
    })
    setTimeout(() => {
      wrapper.find('[data-action="next"]').trigger('click')
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 21)
  })

})