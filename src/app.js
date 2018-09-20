import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
Vue.component('d-button', Button)
Vue.component('d-icon', Icon)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-input', Input)

var app = new Vue({
  el: '#app',
  data: {
    message: 'dei-ui',
    loading1: false,
    loading2: false,
    loading3: false,
  }
})
