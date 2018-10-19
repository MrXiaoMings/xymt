<template>
  <div class="user-view">
    <div class="common-info">
      <div style="text-align: left" class="first-info">
        <span class="model">会员总数:</span>
        <span>{{userInfo.total}}</span>
        <span class="model">已完善信息会员数:</span>
        <span>{{userInfo.allInfoTotal}}</span>
        <span class="model">会员活动人次数:</span>
        <span>{{userInfo.activeTotal}}</span>
      </div>
      <div class="second-info">
        <div class="select-left">
          <span>最近</span>
          <el-select size="mini" style="width: 80px" v-model="dayNumber" placeholder="请选择">
            <el-option
              v-for="item in dayOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span>天新增会员数：</span>
          <span>{{newUserNumber}}</span>
        </div>
        <div class="select-right">
          <span>最近</span>
          <el-select style="width: 80px" size="mini" v-model="dayNumber1" placeholder="请选择">
            <el-option
              v-for="item in dayOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span>天活跃会员数：</span>
          <span>{{actUserNumber}}</span>
        </div>
      </div>
    </div>
    <div class="user-info">
      <el-table
        :data="userListData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          align="center"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="newUserAmount"
          align="center"
          label="新增会员数"
          width="180">
        </el-table-column>
        <el-table-column
          prop="activeUserAmount"
          align="center"
          label="活跃会员数">
        </el-table-column>
        <el-table-column
          prop="activityUserAmount"
          align="center"
          label="活动人次数">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <page-set
        :pageInfo="pageInfo"
        @changeSize="changeSize"
        @currentChange="currentChange">

        </page-set>
      </div>
    </div>
  </div>
</template>
<script>
  import pageSet from '../common/pageset.vue'
  export default {
    data(){
      return {
        userInfo: {
          total: 0,
          allInfoTotal: 0,
          activeTotal: 0
        },
        dayNumber: 1,
        dayNumber1: 1,
        newUserNumber: 0,
        actUserNumber: 0,
        dayOptions: [
          {
            label: '1',
            value: 1
          },
          {
            label: '3',
            value: 3
          },
          {
            label: '7',
            value: 7
          },
          {
            label: '15',
            value: 15
          },
          {
            label: '30',
            value: 30
          }
        ],
        userListData:[
          {
            date: '2018-8-20',
            newUserAmount: '300',
            activeUserAmount: '200',
            activityUserAmount: '30'
          },
          {
            date: '2018-8-19',
            newUserAmount: '300',
            activeUserAmount: '200',
            activityUserAmount: '30'
          }
        ],
        pageInfo: {
          currentPage: 1,
          pageSize: 10,
          total: 30
        }
      }
    },
    methods: {
      changeSize (pageSize) {
        this.pageInfo.pageSize = pageSize
        console.log(pageSize)
      },
      currentChange(currentPage) {
        this.pageInfo.currentPage = currentPage
        console.log(currentPage)
      }
    },
    components: {
      'page-set': pageSet
    }
  }
</script>
<style lang="scss">
  .user-view{
    width: 100%;
    .common-info {
      margin-top: 10px;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #4D88C5;
      font-size: 12px;
      .first-info{
        .model{
          margin-left: 60px;
        }
      }
      .second-info{
        overflow: hidden;
        padding-left: 60px;
        padding-top: 20px;
        .select-left{
          float: left;
        }
        .select-right{
          float: left;
          margin-left: 60px;
        }
      }
    }
  }
</style>
