import Toast from './toast/toast'
let currentToast
export default {
  install (Vue, options) {
    Vue.prototype.$toast = function (message, options) {
      if ( currentToast ) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue, 
        message,
        propsData:options,
        callback: () => {
          if (currentToast) {
            currentToast = null
          }
        }
      })
    }
  }
}
function createToast({Vue, message, propsData, callback}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', () => {console.log('emit close')})
  document.body.appendChild(toast.$el)
  return toast
}