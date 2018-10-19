<template>
  <div class="course-clude">
    <div class="sc-bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name: 'releaseManage',params:{moduleIndex: 4} }">发布管理</el-breadcrumb-item>
        <el-breadcrumb-item>title</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form label-width="150px" ref="courseForm" :model="courseForm" :rules="courseFormRules">
      <el-form-item class="halfWidth" label="模块分类">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-select v-model="courseForm.grandId" placeholder="请选择模块">
              <el-option
                v-for="item in moduleOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select :disabled="courseForm.grandId===''" v-model="courseForm.parentId" placeholder="请选择子菜单">
              <el-option
                v-for="item in moduleChildOptions[courseForm.grandId]"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6" prop="type">
            <el-select :disabled="courseForm.childId===''" v-model="courseForm.childId" placeholder="请选择分类">
              <el-option
                v-for="item in typeOptions[courseForm.grandId][courseForm.childId]"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item class="halfWidth" label="课程名称" prop="title">
        <el-input v-model="courseForm.title"></el-input>
      </el-form-item>
      <el-form-item class="halfWidth" prop="speaker" label="主讲老师">
        <el-input v-model="courseForm.speaker"></el-input>
      </el-form-item>
      <el-form-item class="halfWidth" label="主讲老师简介">
        <el-input type="textarea" placeholder="非必填" v-model="courseForm.introduction"></el-input>
      </el-form-item>
      <el-form-item label="报名截止时间">
          <el-date-picker type="datetime" placeholder="选择日期时间" v-model="courseForm.deadline" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item class="halfWidth" label="上课地点">
        <el-input v-model="courseForm.place"></el-input>
      </el-form-item>
      <el-form-item prop="wage" class="halfWidth" label="报名费">
        <el-input  v-model="courseForm.wage"></el-input>
      </el-form-item>
      <el-form-item label="是否显示原价">
        <el-switch  v-model="display"></el-switch>
      </el-form-item>
      <el-form-item class="halfWidth" label="原价">
        <el-input  v-model="courseForm.originalPrice"></el-input>
      </el-form-item>
      <el-form-item label="课程详情">
        <editor
        :editorContent="courseForm.details"
        @getContent="getContent"
        @changeEditorContent="changeEditorContent">
        </editor>
      </el-form-item>
      <el-form-item label="上传封面图">
        <el-upload
          class="upload-demo"
          :multiple="false"
          action="http://www.52matou.com/api"
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
        <el-button type="primary" @click="onSubmit('courseForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss">
  .course-clude{
    margin-top: 20px;
    padding-right: 50px;
    .sc-bread{
      margin-bottom: 20px;
      padding-left: 50px;
    }
    .halfWidth{
      .el-input{
        width: 50% !important;
      }
      .el-col-6 {
        padding-left: 0px !important;
      }
      .el-col .el-input {
        width: 100% !important;
      }
      .el-col .el-select {
        width: 100% !important;
      }
      .el-select{
        width: 50% !important;
      }
      .el-textarea{
        width: 50% !important;
      }
    }
    .el-date-editor{
      width: 50% !important;
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
import { moduleOptions, moduleChildOptions, typeOptions } from '../../mock/userData.mock.data'
import Api from '../script/api'
export default {
  data () {
    return {
      moduleOptions: moduleOptions,
      moduleChildOptions: moduleChildOptions,
      typeOptions: typeOptions,
      courseFormRules: {
        title: [{message: '课程名称不能为空', required: true, trigger: 'blur'}],
        speaker: [{message: '主讲老师不能为空', required: true, trigger: 'blur'}],
        description: [],
        deadline: [{message: '截止日期不能为空', required: true, trigger: 'blur'}],
        place: [],
        wage: [{message: '价格不能为空', required: true, trigger: 'blur'}],
        originalPrice: [],
        courseDescription: []
      },
      courseForm: {
        childId: '',
        deadline: '',
        details: '',
        grandId: '1',
        parentId: '1',
        homeId: null,
        wage: '',
        isOriginalPrice: 0,
        isShowFirstPage: 1,
        isShowToHome: 0,
        originalPrice: '',
        introduction: '',
        pageId: 4545454454,
        place: '地点',
        registery: '2018-08-08',
        speaker: '演讲人',
        title: '标题',
        type: '',
        file: '文件'
      },
      display: true,
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
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Api.release.add(this.courseForm).then((res) => {
            console.log(res)
          }).catch((err) => {
            console.log(err)
          })
        }
      })
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
      console.log(JSON.stringify(this.courseForm.details))
    },
    changeEditorContent (html) {
      this.courseForm.details = JSON.stringify(html)
    }
  },
  components: {
    'editor': editor
  }
}
</script>
