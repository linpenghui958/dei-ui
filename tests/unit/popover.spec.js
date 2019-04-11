import chai, {expect} from 'chai'
import {shaloowMount, mount} from '@vue/test-utils'
import Popover from '@/popover'

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('可以设置 position', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>点我</button>`},
        content: '<div> 弹出内容</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    let classes = wrapper.find('.content-wrapper').classes()
    expect(classes).to.include('position-bottom') 
  })

  it('可以设置 trigger', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>点我</button>`},
        content: '<div class="show-content"> 弹出内容</div>'
      },
      propsData: {
        trigger: 'mouse'
      }
    })
    expect(wrapper.find('.content-wrapper').isVisible()).to.equal(false)
    wrapper.find('.popover').trigger('mouseenter')
    expect(wrapper.find('.content-wrapper').isVisible()).to.equal(true)
  })
})