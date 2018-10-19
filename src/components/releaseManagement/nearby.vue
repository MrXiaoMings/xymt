<template>
  <div class="course-clude">
    <el-form label-width="150px" ref="form" :model="nearbyForm" :rules="nearbyFormRules">
      <el-form-item class="halfWidth" label="商品名称" prop="goodsName">
        <el-input v-model="nearbyForm.goodsName"></el-input>
      </el-form-item>
      <el-form-item class="halfWidth" prop="stopTime" label="截止日期">
        <el-date-picker
          v-model="nearbyForm.stopTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="halfWidth" prop="nearbyUniversities" label="附近学校">
        <el-select v-model="nearbyForm.nearbyUniversities" filterable multiple placeholder="请选择">
          <el-option
            v-for="item in nearbyUniversityOption"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否显示原价">
        <el-switch  v-model="nearbyForm.display"></el-switch>
      </el-form-item>
      <el-form-item class="halfWidth" v-if="nearbyForm.display" prop="oldPrice" label="原价">
        <el-input  v-model="nearbyForm.oldPrice"></el-input>
      </el-form-item>
      <el-form-item label="商品详情">
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
  .el-select {
    min-width: 400px;
  }
  .course-clude{
    .halfWidth{
      .el-input{
        width: 50% !important;
      }
      .el-select{
        width: 50% !important;
        .el-input{
          width: 100% !important;
        }
      }
      .el-textarea{
        width: 50% !important;
      }
    }
    margin-top: 20px;
    padding-right: 50px;
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
        nearbyUniversityOption: [
          {
            label: '河南农业大学',
            value: '1'
          },
          {
            label: '河南警察学院',
            value: '2'
          },
          {
            label: '河南财经政法大学',
            value: '3'
          },
          {
            label: '河南司法警官职业学院',
            value: '4'
          },
          {
            label: '河南中医药大学',
            value: '5'
          }
        ],
        nearbyFormRules: {
          goodsName: [{message: '商品名称不能为空', required: true, trigger: 'blur'}],
          stopTime: [{message: '截止日期不能为空', required: true, trigger: 'blur'}],
          nearbyUniversities: [{message: '附近学校不能为空', required: true, trigger: 'blur'}],
          oldPrice: [{message: '原价不能为空', required: true, trigger: 'blur'}]
        },
        nearbyForm: {
          goodsName: '',
          stopTime: '',
          nearbyUniversities: '',
          display: true,
          oldPrice: ''
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
