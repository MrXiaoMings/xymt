<template>
  <div class="user-list">
    <div class="sc-search">
      <div class="left-search">
        <el-input placeholder="请输入关键字" v-model="tableRowKey" class="search-btn"
                  @keyup.enter.native="loadReleaseData">
          <el-button slot="append" @click="loadReleaseData" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="right-search">
        <el-select v-model="type" placeholder="请选择分类">
          <el-option
            v-for="item in releaseTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="releaseTableData"
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
        label="标题"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="type"
        label="分类"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="creator"
        label="发布人"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        align="center"
        prop="joiners"
        label="参与人数"
        width="180"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created"
        label="发布时间">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRelease(scope.$index,scope.row)" type="text">
            删除
          </el-button>
          <el-button @click.native.prevent="editRelease(scope.$index,scope.row)" type="text">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import { releaseTypeOptions } from '../../mock/options.mock.data'
  export default {
    props: {
      releaseTableData:{
        type: Array,
        default: []
      }
    },
    computed: {

    },
    data () {
      return {
        tableRowKey: '',
        releaseTypeOptions: releaseTypeOptions,
        type: ''
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.$emit('selection',val)
      },
      deleteRelease(index,row) {
        console.log(index)
        console.log(row)
      },
      editRelease (index,row) {
        let routeName = ''
        switch (row.type) {
          case '1':
            routeName = 'course'
            break
          case '2':
            routeName = 'share'
            break
          case '3':
            routeName = 'partTime'
            break
          case '4':
            routeName = 'runningMan'
            break
          case '5':
            routeName = 'nearby'
            break
          default:
            break
        }
        this.$router.push({name: routeName, params: {id: row.id}})
      },
      loadReleaseData () {

      }
    }
  }
</script>
<style lang="scss">
  .user-list{
    .sc-search{
      overflow: hidden;
      height: 50px;
      width: 100%;
      .left-search{
        float: left;
        width: 50%;
        .search-btn{
          width: 50%;
          margin-top: 10px;
        }
      }
      .right-search{
        width: 50%;
        float: right;
        .el-select{
          margin-top: 10px;
          width: 50%;
        }
      }
    }

    .el-table__header-wrapper table{
      margin-top: 15px;
      border-top: 1px solid #8c939d;
    }
    .el-table td{
      padding: 5px 0;
    }
  }
</style>
