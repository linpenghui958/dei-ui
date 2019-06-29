<template>
  <div class="dei-uploader">
    <button @click="onClickUpload">点击上传</button>
    <ol class="gulu-uploader-fileList">
      <li v-for="file in fileList" :key="file.name">
        <img :src="file.url" alt="">
        <button @click="removeFile(file)">x</button>
      </li>
    </ol>
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
        let rawFile = input.files[0];
        this.uploadFile(rawFile);
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
    uploadFile(rawFile){
      this.beforeUploadFile(rawFile)
      let formData = new FormData()
      formData.append(this.name, rawFile)
      let { name, size, type } = rawFile
      let newName = this.generateName(name)
      this.doUploadFile(formData, (res) => {
        res = JSON.parse(res)
        let url = this.parseFn(res.key)
        this.afterUploadFile(rawFile, newName, url)
      })
    },
    beforeUploadFile(rawFile) {
      let {name, size, type} = rawFile;
      this.$emit('update:fileList', [...this.fileList, {name, type, size, status:'uploading'}])
    },
    afterUploadFile(rawFile, newName, url) {
      let {size, type} = rawFile;
      let file = this.fileList.filter(f => f.name === newName)[0];
      let index = this.fileList.indexOf(file)
      let copy = JSON.parse(JSON.stringify(file))
      copy.url = url;
      copy.status = 'success';
      let fileListCopy = [...this.fileList]
      fileListCopy.splice(index, 1, copy)
      this.$emit('update:fileList', fileListCopy)
    },
    generateName(name) {
      while(this.fileList.filter(f => f.name === name).length > 0) {
        let dotIndex = name.lastIndexOf('.');
        let nameWithoutExtension = name.substring(0, dotIndex);
        let extension = name.substring(dotIndex);
        name = nameWithoutExtension + '.(1)' + extension;
      }
      return name;
    },
    removeFile(file) {
      let arr = [...this.fileList]
      let index = arr.indexOf(file)
      arr.splice(index, 1)
      this.$emit('update:fileList', arr)
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
