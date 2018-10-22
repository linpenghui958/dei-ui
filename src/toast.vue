<template>
    <div class="toast">
      <div class="message">
        <div v-if="enableHtml" v-html="$slots.default[0]"></div>
        <slot v-else></slot>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickButton">
        {{closeButton.text}}
      </span>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'DeiToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 30
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: () => {}
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.updateClass()
    this.execAutoClose()
  },
  methods: {
    updateClass() {
      this.$nextTick(() => {
        this.$refs.line.style.height = this.$el.getBoundingClientRect().height + 'px'
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.delay * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$destroy()
    },
    log () {
      console.log('test')
    },
    onClickButton() {
      this.close()
      if ( this.closeButton && typeof this.closeButton.callback ) {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>

<style lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast{
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .message{
    padding: 4px 0;
  }
}
.close{
  padding-left: 16px;
  flex-shrink: 0;
}
.line{
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
</style>
