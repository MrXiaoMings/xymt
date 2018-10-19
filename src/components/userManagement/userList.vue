<template>
  <div class="user-list">
    <el-table
      ref="multipleTable"
      :data="userTableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        align="center"
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        align="center"
        label="账号"
        width="120">
        <template slot-scope="scope">
          {{ scope.row.account }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="真实姓名"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="phone"
        label="手机号"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        align="center"
        prop="school"
        label="学校"
        width="180"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        align="center"
        prop="signDate"
        label="注册时间">
      </el-table-column>
      <el-table-column
        align="center"
        prop="latestLoginDate"
        label="最近登陆时间">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="lookView(scope.$index,scope.row)" type="text">
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    props: {
      userTableData:{
        type: Array,
        default: []
      }
    },
    computed: {

    },
    data () {
      return {

      }
    },
    methods: {
      handleSelectionChange(val) {
        this.$emit('selection',val)
      },
      lookView(index,row) {
        console.log(index)
        console.log(row)
      }
    }
  }
</script>
<style lang="scss">
  .user-list{
    .el-table td{
      padding: 5px 0;
    }
  }
</style>
