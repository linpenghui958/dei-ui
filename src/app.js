import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('d-button', Button)
Vue.component('d-icon', Icon)
Vue.component('d-button-group', ButtonGroup)

var app = new Vue({
  el: '#app',
  data: {
    message: 'dei-ui',
    loading1: false,
    loading2: false,
    loading3: false,
  }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
  const Construtor = Vue.extend(Button)
  const button = new Construtor({
    propsData: {
      icon: 'setting'
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  console.log(href)
  expect(href).to.eq('#i-setting')
}
{
  const Construtor = Vue.extend(Button)
  const button = new Construtor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  console.log(href)
  expect(href).to.eq('#i-loading')
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Construtor = Vue.extend(Button)
  const gButton = new Construtor({
    propsData: {
      icon: 'setting',
      position: 'right'
    }
  })
  gButton.$mount(div)
  let svg = gButton.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  gButton.$el.remove()
  gButton.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Construtor = Vue.extend(Button)
  const gButton = new Construtor({
    propsData: {
      icon: 'setting',
    }
  })
  gButton.$mount(div)
  let svg = gButton.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  gButton.$el.remove()
  gButton.$destroy()
}
{
  const Construtor = Vue.extend(Button)
  const gButton = new Construtor({
    propsData: {
      icon: 'setting',
    }
  })
  gButton.$mount()
  const spy = chai.spy(function () {})
  gButton.$on('click', spy)
  let button = gButton.$el
  button.click()
  expect(spy).to.have.been.called()
}