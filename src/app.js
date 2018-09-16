import Vue from 'vue'
import Button from './button'
import Icon from './icon'
Vue.component('d-button', Button)
Vue.component('d-icon', Icon)

var app = new Vue({
  el: '#app',
  data: {
    message: 'dei-ui'
  }
})