<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th v-for="(column, index) in columns" :key="index">{{column.text}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="index">
          <td>{{index + 1}}</td>
          <template v-for="(column, index) in columns">
            <td :key="index">{{item[column.field]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>
