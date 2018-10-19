<template>
  <div class="topOperate">
    <el-button class="operateBtn" size="mini" @click="stopUse">停用</el-button>
    <el-button class="operateBtn" size="mini" @click="startUse">启用</el-button>
    <el-button class="operateBtn" size="mini" v-if="isAdmin">删除</el-button>
    <el-button class="operateBtn" size="mini" @click="exportInfo">导出</el-button>
    <el-input placeholder="请输入关键字" v-model="tableRowKey" class="search-btn"
              @keyup.enter.native="loadUserData">
      <el-button slot="append" @click="loadUserData" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>
<script>
  export default {
    props: {

    },
    data () {
      return {
        tableRowKey: '',
        isAdmin: window.isAdmin || false
      }
    },
    methods: {
      stopUse () {
        this.$emit('stopUse')
      },
      startUse () {
        this.$emit('startUse')
      },
      exportInfo () {
        this.$emit('exportInfo')
      },
      loadUserData() {
        this.$emit('loadUserData',this.tableRowKey)
      }
    }
  }
</script>
<style lang="scss">
  .topOperate{
    height: 50px;
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #4D88C5;
    .operateBtn{
      float: left;
      margin-left: 4%;
      margin-top: 11px;
    }
    .operateBtn:nth-child(1){
      margin-left: 0px;
    }
    .search-btn{
      float: right;
      margin-right: 40px;
    }
    .el-input-group{
      width: 300px;
      margin-top: 5px;
    }
  }
</style>
