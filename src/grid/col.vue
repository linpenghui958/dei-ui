<template>
  <div class="col" :class="colClass"
    :style="colStyle">
      <slot></slot>
  </div>
</template>
<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!(['span', 'offset'].indexOf(key) >= 0)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: 'DeiCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      ipad: {
        type: Object,
        validator
      },
      narrowpc: {
        type: Object,
        validator
      },
      pc: {
        type: Object,
        validator
      },
      widepc: {
        type: Object,
        validator
      },


    },
    data() {
      return {
        gutter: 0
      }
    },
    methods: {
      createClass(obj, str = '') {
        if (!obj) { return [] }
        let arr = []
        if (obj.span) {
          arr.push(`col-${str}${obj.span}`)
        }
        if (obj.offset) {
          arr.push(`offset-${str}${obj.offset}`)
        }
        return arr
      }
    },
    computed: {
      colClass() {
        let {span, offset, ipad, narrowpc, pc, widepc} = this
        let createClass = this.createClass
        return [
          ...createClass({span, offset}),
          ...createClass(ipad, 'ipad-'),
          ...createClass(narrowpc, 'narrow-pc-'),
          ...createClass(pc, 'pc-'),
          ...createClass(widepc, 'wide-pc-')
        ]
      },
      colStyle () {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .col{
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @media (min-width: 577px) and (max-width: 786px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 787px) and (max-width: 992px) {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) and (max-width: 1200px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }

</style>