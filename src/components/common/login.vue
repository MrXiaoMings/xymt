<template>
  <div id="login">
    <div id="login-form">
      <el-form style="width: 60%" :label-position="labelPosition" ref="loginForm" :rules="loginFormRules" label-width="60px" :model="loginForm">
        <el-form-item class="subBtn">
          <h2>校园码头</h2>
        </el-form-item>
        <el-form-item prop="name" label="账号">
          <el-input  v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="subBtn">
          <el-button align="center" type="primary" @click="onSubmit('loginForm')">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import validator from '../../rules/validate-rule'
  import Api from '../script/api'
  import bus from '../script/bus'
  import cookie from '../script/cookie'
  import commonObj from '../script/define'
  export default {
    props: {
      isLogin:{
        type: Boolean
      }
    },
    data () {
      return {
        loginFormRules: {
          name: [{required: true,message: '账号不能为空', trigger: 'blur'}],
          password: [{required: true,message: '密码不能为空', trigger: 'blur'}]
        },
        loginForm: {
          name: '',
          password: ''
        },
        labelPosition: 'left'
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            Api.login(this.loginForm).then((data)=>{
              if(data.data.success) {
                this.$message.success('登陆成功')
                this.$router.push({name: 'baseInfo'})
                bus.$emit('isLogin',true)
                commonObj.isLogin = true
                if(this.loginForm.name === 'admin'){
                  commonObj.isAdmin = true
                }
              }else if(data.data.code === '011'){
                this.$message.warning('账号不存在')
              }else if(data.data.code === '012'){
                this.$message.warning('账号或密码错误')
              }else{
                this.$message.error('登陆失败！')
              }
            }).catch(()=>{
              this.$message.error('登陆失败！')
            })
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  #login{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    #login-form{
      background: #35b9ff;
      height: 300px;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .subBtn{
      .el-form-item__content{
        margin-left: 0px !important;
      }
    }
  }
</style>
