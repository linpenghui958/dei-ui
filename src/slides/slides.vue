<template>
  <div class="g-slides" @mouseenter="onMouseEnter"
                        @mouseleave="onMouseLeave"
                        @touchstart="onTouchStart"
                        @touchend="onTouchEnd">
    <div class="g-slides-window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span @click="onClickPrev" data-action="prev">
        <d-icon name="left"></d-icon>
      </span>
      <span v-for="(index, key) in childLength" 
            :key="key" 
            :data-index="key"
            :class="{active: selectedIndex === index -1}"
            @click="select(index - 1)">
        {{index}}
      </span>
      <span @click="onClickNext" data-action="next">
        <d-icon name="right"></d-icon>
      </span>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  components: {
    'd-icon': Icon
  },
  name: 'd-slides',
  props: {
    selected: String,
    auto: {
      type: Boolean,
      default: true
    },
    reverse: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      childLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      touchStart: undefined,
      isTouchEvent: false
    }
  },
  mounted() {
    this.updateChildren()
    this.auto && this.autoPlay()
    this.childLength = this.names.length
  },
  updated() {
    this.updateChildren()
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.getSelected()) || 0
    },
    names() {
      return this.$children
                    .filter(vm => vm.$options.name === 'DeiSlidesItem')
                    .map(vm => vm.name)
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === 'DeiSlidesItem')
    }
  },
  methods: {
    onClickPrev() {
      this.select(this.selectedIndex - 1)
    },
    onClickNext() {
      this.select(this.selectedIndex + 1)
    },
    onTouchStart(e) {
      this.isTouchEvent = true
      this.touchStart = e.touches[0]
      this.pause()
    },  
    onTouchEnd(e) {
      const {clientX: x1, clientY: y1} = this.touchStart
      const {clientX: x2, clientY: y2} = e.changedTouches[0]
      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
      const dealtY = Math.abs(y2 - y1)
      const rotate = distance / dealtY
      if (rotate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1)
        } else {
          this.select(this.selectedIndex + 1)
        }
      }
      this.$nextTick(() => {
        this.autoPlay()
      })
    },
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      this.autoPlay()
    },
    pause() {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    select(newIndex) {
      this.lastSelectedIndex = this.selectedIndex
      if (newIndex === -1) {newIndex = this.names.length - 1}
      if (newIndex === this.names.length) { newIndex = 0 }
      this.$emit('update:selected', this.names[newIndex])
    },
    autoPlay() {
      if (this.timerId) return;
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        if (newIndex === -1) index = this.names.length - 1;
        if (newIndex === this.names.length) newIndex = 0;
        this.select(newIndex) 
        this.timerId = setTimeout(run, this.delay)
      }
      this.timerId = setTimeout(run, this.delay)
    },
    getSelected() {
      let firstName = this.items[0].name
      return this.selected || firstName
    },
    updateChildren() {
      let selected = this.getSelected()
      this.items.forEach(vm => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.timerId || this.isTouchEvent) {
          if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
            reverse = false
            console.log('false')
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
            reverse = true
            console.log('true')
          }
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          this.isTouchEvent = false
          vm.selected = selected
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 .g-slides {
    &-window {overflow: hidden;}
    &-wrapper {
      position: relative;
    }
    &-dots {
      padding: 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        width: 20px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #ddd;
        border-radius: 50%;
        margin: 0 8px;
        font-size: 12px;
        &:hover {
          cursor: pointer;
        }
        &.active {
          background: black;
          color: white;
          &:hover {
            cursor: default;
          }
        }
      }
    }
  }
</style>
