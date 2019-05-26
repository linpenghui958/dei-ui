<template>
   <div class="dei-pager" :class="{hide: hideIfOnePage === true && totalPage <= 1}">
    <span class="dei-pager-nav prev" :class="{disabled:currentPage===1}"
      @click="onClickPage(currentPage-1)">
      <d-icon name="left"></d-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="dei-pager-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <!-- <d-icon class="dei-pager-separator" name="dots"></d-icon></d-icon> -->
        <span>...</span>
      </template>
      <template v-else>
        <span class="dei-pager-item other">{{page}}</span>
      </template>
    </template>
    <span class="dei-pager-nav next" :class="{disabled: currentPage===totalPage}"
      @click="onClickPage(currentPage+1)">
      <d-icon name="right"></d-icon>
    </span>
  </div>
</template>

<script>
import DIcon from '@/base/icon'
export default {
  name: 'DPager',
  components: {
    DIcon
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
  },
  data() {
    let pages = [1, this.currentPage, this.totalPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2]
    pages = unique(pages.sort((a,b) => a-b).filter(i => i > 0))
    console.log(pages)
    let result = pages.reduce((prev, current, idx) => {
      const nextValue = pages[idx + 1]
      prev.push(current)
      nextValue !== undefined && nextValue - current > 1 && prev.push('...')
      return prev
    }, [])
    return {
      pages: result
    }
  }
}

const unique = arr => {
  return Array.from(new Set(arr))
}
</script>

<style lang="scss">
@import '../styles/_var';
.dei-pager { display: flex; justify-content: flex-start; align-items: center; user-select: none;
    $width: 20px; $height: 20px; $font-size: 12px;
    &.hide { display: none; }
    &-separator {
      width: $width;
      font-size: $font-size;
    }
    &-item {
      min-width: $width; height: $height;font-size: $font-size;
      border: 1px solid #e1e1e1; border-radius: $border-radius; padding: 0 4px; display: inline-flex; justify-content: center;
      align-items: center; margin: 0 4px; cursor: pointer;
      &.current, &:hover { border-color: $blue; }
      &.current { cursor: default; }
    }
    &-nav {
      margin: 0 4px; display: inline-flex; justify-content: center; align-items: center;
      background: $grey; height: $height; width: $width; border-radius: $border-radius; font-size: $font-size;
      cursor: pointer;
      &.disabled {
        cursor: default;
        svg { fill: darken($grey, 30%); }
      }
    }
  }
</style>
