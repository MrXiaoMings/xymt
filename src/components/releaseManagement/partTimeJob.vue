<template>
  <div class="course-clude">
    <el-form label-width="150px" ref="form" :model="partTimeForm" :rules="partTimeFormRules">
      <el-form-item class="halfWidth" label="兼职名称" prop="partTimeName">
        <el-input v-model="partTimeForm.partTimeName"></el-input>
      </el-form-item>
      <el-form-item class="halfWidth" prop="workTime" label="工作时间">
        <el-time-picker
          is-range
          v-model="partTimeForm.workTime"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
      </el-form-item>
      <el-form-item class="halfWidth" prop="stopTime" label="报名截止时间">
        <el-date-picker
          v-model="partTimeForm.stopTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="halfWidth" prop="address" label="上班地点">
        <el-input v-model="partTimeForm.address"></el-input>
      </el-form-item>
      <el-form-item class="halfWidth" prop="wages" label="工资">
        <el-input  v-model="partTimeForm.wages"></el-input>
      </el-form-item>
      <el-form-item label="计薪单位">
        <el-radio-group v-model="partTimeForm.salaryUnit">
          <el-radio :label="1">天</el-radio>
          <el-radio :label="2">月</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="结算周期">
        <el-radio-group v-model="partTimeForm.salaryCycle">
          <el-radio :label="1">天</el-radio>
          <el-radio :label="2">月</el-radio>
          <el-radio :label="3">完工结算</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="兼职详情">
        <editor
          :editorContent="editorContent"
          @getContent="getContent"
          @changeEditorContent="changeEditorContent">
        </editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss">
  .course-clude{
    margin-top: 20px;
    padding-right: 50px;
    .halfWidth{
      .el-input{
        width: 50%;
      }
      .el-select{
        width: 50% !important;
      }
      .el-textarea{
        width: 50%;
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
        partTimeFormRules: {
          partTimeName: [{message: '课程名称不能为空', required: true, trigger: 'blur'}],
          workTime: [{message: '工作时间不能为空', required: true, trigger: 'blur'}],
          stopTime: [{message: '', required: false, trigger: 'blur'}],
          address: [{message: '工作地址不能为空', required: true, trigger: 'blur'}],
          wages: [{message: '工资不能为空', required: true, trigger: 'blur'}]
        },
        partTimeForm: {
          partTimeName: '',
          workTime: '',
          stopTime: '',
          address: '',
          wages: '',
          salaryUnit: 1,
          salaryCycle: 1
        }
      }
    },
    watch: {

    },
    methods: {
      onSubmit () {
        console.log('submit!')
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
