import Vue from 'vue'
import Button from './button'
Vue.component('d-button', Button)

var app = new Vue({
  el: '#app',
  data: {
    message: 'dei-ui'
  }
})