<template>
  <div class="dei-uploader">
    <button @click="onClickUpload">点击上传</button>
    <img :src="url" alt="">
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: String
    },
    name: {
      type: String
    },
    method: {
      type: String
    },
    parseFn: {
      type: Function
    }
  },
  data() {
    return {
      url: 'about:blank'
    }
  },
  methods: {
    onClickUpload() {
      console.log('onClickUpload');
      let input = document.createElement('input');
      input.type = 'file';
      document.body.append(input)
      input.addEventListener('change', () => {
        let file = input.files[0]
        input.remove()
        let formData = new FormData()
        formData.append(this.name, file)
        const xhr = new XMLHttpRequest();
        xhr.open(this.method, this.action)
        xhr.onload = () => {
          console.log(xhr.response)
          const res = JSON.parse(xhr.response)
          let url = this.parseFn(res.key)
          this.url = url
        }
        xhr.send(formData)
      })
      input.click()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_var";
.dei-uploader {
  &-fileList {
    list-style: none;
    > li {
      display: flex;
      align-items: center;
      margin: 8px 0;
      border: 1px solid darken($grey, 10%);
    }
  }
  &-defaultImage {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
  &-image {
    margin-right: 8px;
    border: none;
  }
  &-name {
    margin-right: auto;
    &.success {
      color: green;
    }
    &.fail {
      color: red;
    }
  }
  &-remove {
    width: 32px;
    height: 32px;
  }
  &-spin {
    width: 32px;
    height: 32px;
    @include spin;
  }
}

</style>
