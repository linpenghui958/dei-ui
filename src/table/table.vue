<template>
  <div class="dei-table-wrapper" ref="wrapper">
    <div :style="{height, overflow: 'auto'}" ref="tableWrapper">
      <table class="dei-table" ref="table" :class="{bordered, compact, striped: striped}">
        <thead>
          <tr>
            <th v-if="numberVisible" :style="{width: '50px'}">#</th>
            <th v-if="checkable" :style="{width: '50px'}" class="dei-table-center">
              <input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected"/>
            </th>
            <th :style="{width: column.width + 'px'}" v-for="(column, index) in columns" :key="index" class="dei-table-center">
              <div class="dei-table-header">
                {{column.text}} 
                <span class="dei-table-sorter" v-if="column.field in orderBy" @click="changeOrderBy(column.field)">
                  <d-icon name="asc" :class="{active: orderBy[column.field] === 'asc'}"></d-icon>
                  <d-icon name="desc" :class="{active: orderBy[column.field] === 'desc'}"></d-icon>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataSource" :key="index">
            <td v-if="checkable" :style="{width: '50px'}" class="dei-table-center">
              <input type="checkbox" @change="onChangeItem(item, index, $event)"
                :checked="inSelectedItems(item)"/>
            </td>
            <td v-if="numberVisible">{{index + 1}}</td>
            <template v-for="(column, index) in columns">
              <td :style="{width: column.width + 'px'}" :key="index">{{item[column.field]}}</td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DIcon from '../base/icon'
export default {
  components: {
    DIcon
  },
  props: {
    height: {
      type: Number,
    },
    columns: {
      type: Array,
      required: true
    },
    orderBy: {
      type: Object,
      default: () => ({})
    },
    dataSource: {
      type: Array,
      required: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    selectedItems: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    const copy = this.$refs.table.cloneNode(false)
    this.copy = copy
    this.copy.classList.add('dei-table-copy')
    let tHead = this.$refs.table.children[0]
    let { height } = tHead.getBoundingClientRect()
    this.$refs.tableWrapper.style.marginTop = height + 'px';
    this.$refs.tableWrapper.style.height = this.height - height + 'px'
    this.copy.appendChild(tHead) 
    this.$refs.wrapper.appendChild(copy)
    
  },
  beforeDestroy() {
    this.copy.remove()
  },
  computed: {
    areAllItemsSelected() {
      const a = this.selectedItems.map(i => i.id).sort()
      const b = this.dataSource.map(i => i.id).sort()
      if (a.length !== b.length) return false
      let equal = true
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          equal = false
        } 
      }
      return equal
    }
  },
  methods: {
    changeOrderBy(key) {
      const copy = JSON.parse(JSON.stringify(this.orderBy))
      console.log(copy[key])
      let oldValue = copy[key]
      if (oldValue === 'asc') {
        copy[key] = 'desc'
      } else if (oldValue === 'desc') {
        copy[key] = true
      } else {
        copy[key] = 'asc'
      }
      this.$emit('update:orderBy', copy)
    },
    inSelectedItems(item) {
      return this.selectedItems.filter(i => i.id === item.id).length > 0
    },
    onChangeItem(item, index, e) {
      console.log(item, index, e)
      const checked = e.target.checked
      let copy = JSON.parse(JSON.stringify(this.selectedItems))
      if (checked) {
        copy.push(item)
      } else {
        copy = copy.filter(i => i.id !== item.id)
      }
      this.$emit('update:selectedItems', copy)
    },
    onChangeAllItems(e) {
      const selected = e.target.checked;
      this.$emit('update:selectedItems', selected ? this.dataSource : [])
    }
  },
  watch: {
    selectedItems() {
      const length = this.dataSource.length
      if (this.selectedItems.length !== length && this.selectedItems.length !== 0) {
        this.$refs.allChecked.indeterminate = true
      } else {
        this.$refs.allChecked.indeterminate = false
      }
    }
  }
}
</script>

<style lang="scss">
@import "../styles/_var";
  $grey: darken($grey, 10%);
  .dei-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $grey;
    &.bordered {
      border: 1px solid $grey;
      td, th {
        border: 1px solid $grey;
      }
    }
    &.compact {
      td, th {
        padding: 4px;
      }
    }
    td, th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: white;
          }
          &:nth-child(even) {
            background: lighten($grey, 10%);
          }
        }
      }
    }
    &-sorter {
      display: inline-flex;
      flex-direction: column;
      margin: 0 4px;
      cursor: pointer;
      width: 10px;
      height: 10px;
      svg {
        width: 10px;
        height: 10px;
        fill: $grey;
        &.active {
          fill: red;
        }
        &:first-child {
          position: relative;
        }
        &:nth-child(2) {
          position: relative;
        }
      }
    }
    &-header {
      display: flex;
      align-items: center;
    }
    &-wrapper {
      position: relative;
      overflow: auto;
    }
    &-loading {
      background: rgba(255, 255, 255, 0.8);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 50px;
        height: 50px;
        @include spin;
      }
    }
    &-copy {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: white;
    }
    &-expendIcon {
      width: 10px;
      height: 10px;
    }
    & &-center {
      text-align: center;
    }
  }
</style>
