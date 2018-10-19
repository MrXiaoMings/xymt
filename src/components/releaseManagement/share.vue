<template>
  <div class="content-clude">
    <el-form label-width="150px" ref="form" :model="contentForm" :rules="contentFormRules">
      <el-form-item class="halfWidth" label="标题" prop="contentTitle">
        <el-input v-model="contentForm.contentTitle"></el-input>
      </el-form-item>
      <el-form-item label="分享详情">
        <editor
        :editorContent="editorContent"
        @getContent="getContent"
        @changeEditorContent="changeEditorContent">
        </editor>
      </el-form-item>
      <el-form-item label="上传封面图">
        <el-upload
          class="upload-demo"
          :multiple="false"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-success="handleSuccess"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">{{fileList.length ? '修改图片' : '点击上传'}}</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss">
  .content-clude{
    margin-top: 20px;
    padding-right: 50px;
    .halfWidth{
      .el-input{
        width: 50% !important;
      }
    }
    .el-form-item__content{
      text-align: left;
      .line{
        text-align: center;
      }
    }
  }
</style>
<script>
  //  import validate from '../../../rules/validate-rule'
  import editor from '../common/wangEditor.vue'
  export default {
    data () {
      return {
        editorContent: '',
        contentFormRules: {
          contentTitle: [{message: '课程名称不能为空', required: true, trigger: 'blur'}]
        },
        contentForm: {
          contentTitle: ''
        },
        fileList: []
      }
    },
    watch: {
      fileList () {
        console.log(this.fileList)
        if (this.fileList.length > 1) {
          this.fileList = this.fileList.splice(0, 1)
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      },
      handleSuccess (res, fileList) {
        console.log(res, fileList)
        this.fileList = [fileList]
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      getContent () {
        console.log(this.editorContent)
      },
      changeEditorContent (html) {
        this.editorContent = html
      }
    },
    components: {
      'editor': editor
    }
  }
</script>
