<template>
  <div class="dei-uploader">
    <button @click="onClickUpload">点击上传</button>
    <img :src="url" alt="">
  </div>
</template>

<script>
export default {
  props: {
    fileList: {
      type: Array,
    },
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
      let input = this.createInput();
      input.addEventListener('change', () => {
        let file = input.files[0];
        this.uploadFile(file);
        input.remove()
      })
      input.click()
    },
    createInput() {
      let input = document.createElement('input');
      input.type = 'file';
      document.body.append(input)
      return input;
    },
    uploadFile(file){
      let formData = new FormData()
      formData.append(this.name, file)
      let { name, size, type } = file
      this.doUploadFile(formData, (res) => {
        res = JSON.parse(res)
        let url = this.parseFn(res.key)
        this.url = url
        while(this.fileList.filter(f => f.name === name).length > 0) {
          let dotIndex = name.lastIndexOf('.');
          let nameWithoutExtension = name.substring(0, dotIndex);
          let extension = name.substring(dotIndex);
          name = nameWithoutExtension + '.(1)' + extension;
        }
        this.$emit('update:fileList', [...this.fileList, {name, type, size}])
      })
    },
    doUploadFile(formData, success) {
      const xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action)
      xhr.onload = () => {
        success(xhr.response);
      }
      xhr.send(formData)
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
