<template>
  <div class="course-clude">
    <el-form label-width="150px" ref="form" :model="runForm" :rules="runFormRules">
      <el-form-item class="halfWidth" label="跑腿描述" prop="runDes">
        <el-input type="textarea" v-model="runForm.runDes"></el-input>
      </el-form-item>
      <el-form-item class="halWidth" prop="sendTime" label="截止时间">
        <el-date-picker
          v-model="runForm.sendTime"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="halWidth" prop="university" label="学校">
        <el-select v-model="runForm.university" filterable placeholder="请选择">
          <el-option
            v-for="item in universityOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="halfWidth" prop="salary" label="跑腿酬劳">
        <el-input  v-model="runForm.salary"></el-input>
      </el-form-item>
      <el-form-item label="跑腿详情">
        <editor
          :editorContent="editorContent"
          @getContent="getContent"
          @changeEditorContent="changeEditorContent">
        </editor>
        <h5><span>注意：接单者将使用您的注册手机号与您联系</span> <span @click="useNewPhone" style="color: #4e35ff;cursor: pointer">使用新的手机号</span></h5>
      </el-form-item>
        <el-form-item class="halfWidth" v-if="useNew" label="新手机号" prop="newPhone">
          <el-input v-model="runForm.newPhone"></el-input>
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
        width: 50% !important;
      }
      .el-select{
        width: 50% !important;
      }
      .el-textarea{
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
        runFormRules: {
          runDes: [{message: '课程名称不能为空', required: true, trigger: 'blur'}],
          sendTime: [{message: '时间不能为空', required: true, trigger: 'blur'}],
          universityOptions: [{message: '学校不能为空', required: true, trigger: 'blur'}],
          salary: [{message: '酬劳不能为空', required: true, trigger: 'blur'}]
        },
        useNew: false,
        runForm: {
          runDes: '',
          sendTime: '',
          university: '',
          salary: '',
          newPhone: ''
        },
        universityOptions: [
          {
            label: '河南农业大学',
            value: 1
          },
          {
            label: '郑州工商学院',
            value: 2
          },
          {
            label: '河南财经政法大学',
            value: 3
          },
          {
            label: '河南师范大学新联学院',
            value: 4
          }
        ]
      }
    },
    watch: {

    },
    methods: {
      useNewPhone () {
        this.useNew = true
      },
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
