import chai, {expect} from 'chai'
import {shaloowMount, mount} from '@vue/test-utils'
import Vue from 'vue'
import Nav from '@/nav/nav'
import NavItem from '@/nav/nav-item'
import SubNav from '@/nav/sub-nav'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

describe('Nav', () => {
  it('存在.', () => {
    expect(Nav).to.exist
  })

  it('可以设置selected', (done) => {
    Vue.component('DNavItem', NavItem)
    Vue.component('DSubNav', SubNav)
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
          <d-nav-item class="home" name="home">首页</d-nav-item>
          <d-sub-nav name="about">
            <template slot="title" >关于</template> 
            <d-nav-item name="company">企业</d-nav-item>
            <d-nav-item name="culture">文化</d-nav-item>
            <d-sub-nav name="contact">
              <template slot="title">联系方式</template>
              <d-nav-item name="qq">QQ</d-nav-item>
              <d-nav-item name="wechat">微信</d-nav-item>
              <d-sub-nav name="email">
                <template slot="title" >邮箱</template>
                <d-nav-item name="email1">邮箱1</d-nav-item>
                <d-nav-item name="email2">邮箱2</d-nav-item>
                <d-nav-item name="email3">邮箱3</d-nav-item>
              </d-sub-nav>
            </d-sub-nav>
          </d-sub-nav>
          <d-nav-item name="mine">我的</d-nav-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.home.selected').exists()).to.equal(true)
      done()
    })
  })

  it('可以设置vertical', (done) => {
    Vue.component('DNavItem', NavItem)
    Vue.component('DSubNav', SubNav)
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home',
        vertical: true
      },
      slots: {
        default: `
          <d-nav-item class="home" name="home">首页</d-nav-item>
          <d-sub-nav name="about">
            <template slot="title" >关于</template> 
            <d-nav-item name="company">企业</d-nav-item>
            <d-nav-item name="culture">文化</d-nav-item>
            <d-sub-nav name="contact">
              <template slot="title">联系方式</template>
              <d-nav-item name="qq">QQ</d-nav-item>
              <d-nav-item name="wechat">微信</d-nav-item>
              <d-sub-nav name="email">
                <template slot="title" >邮箱</template>
                <d-nav-item name="email1">邮箱1</d-nav-item>
                <d-nav-item name="email2">邮箱2</d-nav-item>
                <d-nav-item name="email3">邮箱3</d-nav-item>
              </d-sub-nav>
            </d-sub-nav>
          </d-sub-nav>
          <d-nav-item name="mine">我的</d-nav-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find(' .d-sub-nav-popover.vertical').exists()).to.equal(true)
      done()
    })
  })

  it('点击可以切换nav', (done) => {
    Vue.component('DNavItem', NavItem)
    Vue.component('DSubNav', SubNav)
    const callback = sinon.fake()
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
          <d-nav-item class="home" name="home">首页</d-nav-item>
          <d-nav-item class="mine" name="mine">我的</d-nav-item>
        `
      },
      listeners: {
        'update:selected': (x) => {
          callback(x)
        }
      }
    })
    setTimeout(() => {
      wrapper.find('.mine').trigger('click')
      expect(callback).to.have.been.called
      expect(callback).to.have.been.calledWith('mine')
      done()
    })
  })

})