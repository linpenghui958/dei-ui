import {expect} from 'chai'
import {shaloowMount, mount} from '@vue/test-utils'
import Row from '@/row'
import Col from '@/col'

describe('Col', () => {
  it('存在', () => {
    expect(Col).to.exist
  })

  it('接受 span 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        span: '1'
      }
    })
    expect(wrapper.classes().includes('col-1')).to.equal(true)
  })

  it('接受 offset 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        offset: '1'
      }
    })
    expect(wrapper.classes().includes('offset-1')).to.equal(true)
  })

  it('接受 pc 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        pc: { span: 1, offset: 2}
      }
    })
    expect(wrapper.classes().includes('offset-pc-2')).to.equal(true)
    expect(wrapper.classes().includes('col-pc-1')).to.equal(true)
  })

  it('接受 ipad 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        ipad: { span: 1, offset: 2}
      }
    })
    expect(wrapper.classes().includes('offset-ipad-2')).to.equal(true)
    expect(wrapper.classes().includes('col-ipad-1')).to.equal(true)
  })

  it('接受 narrow-pc 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        narrowpc: { span: 1, offset: 2}
      }
    })
    expect(wrapper.classes().includes('offset-narrow-pc-2')).to.equal(true)
    expect(wrapper.classes().includes('col-narrow-pc-1')).to.equal(true)
  })

  it('接受 wide-pc 属性', () => {
    const wrapper = mount(Col, {
      propsData: {
        widepc: { span: 1, offset: 2}
      }
    })
    expect(wrapper.classes().includes('offset-wide-pc-2')).to.equal(true)
    expect(wrapper.classes().includes('col-wide-pc-1')).to.equal(true)
  })

})
