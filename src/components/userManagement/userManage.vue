<template>
  <div class="user-manage">
    <div class="common-operate">
      <user-operate
      @stopUse="stopUse"
      @startUse="startUse"
      @exportInfo="exportInfo"
      @loadUserData="loadUserData">
      </user-operate>
    </div>
    <div class="user-info-list">
      <user-list
      :userTableData="userTableData"
      @selection="selectionChange">
      </user-list>
    </div>
    <div class="pagination">
      <page-set
        :pageInfo="pageInfo"
        @changeSize="changeSize"
        @currentChange="currentChange">

      </page-set>
    </div>
  </div>
</template>
<script>
  import userOperate from './userOperate.vue'
  import userList from './userList.vue'
  import pageset from '../common/pageset.vue'
  import Api from '../script/api'
  export default {
    data () {
      return {
        pageInfo: {
          currentPage: 1,
          pageSize: 10,
          total: 30
        },
        userTableData: [
          {
            account: 'aaa',
            name: 'MrLi',
            school: '河南理工大学',
            signDate: '2018-8-18',
            latestLoginDate: '2018-9-10'
          },
          {
            account: 'bbb',
            name: '李圆佳',
            school: '郑州升达学院',
            signDate: '2018-8-18',
            latestLoginDate: '2018-9-10'
          },
          {
            account: 'ccc',
            name: '阿宽',
            school: '河南理工大学',
            signDate: '2018-8-18',
            latestLoginDate: '2018-9-10'
          },
          {
            account: 'ddd',
            name: '阿彪',
            school: '河南理工大学',
            signDate: '2018-8-18',
            latestLoginDate: '2018-9-10'
          },
        ],
      }
    },
    created () {
      this.loadUserData()
    },
    methods: {
      stopUse () {

      },
      startUse () {

      },
      exportInfo () {

      },
      loadUserData (tableRowKey = '') {
        Api.getUserList(tableRowKey,this.pageInfo).then((data)=>{
          console.log(data.data.data.list)
          this.userTableData = data.data.data.list
          this.pageInfo.total = data.data.data.total
          if(this.userTableData.length){
            _.forEach(this.userTableData,(item) =>{
              _.mapKeys(item,(value,key)=>{
                if(value === null ||value === ''){
                  item[key] = '--'
                }
              })
            })
          }
        }).catch((err)=>{
          console.log(err)
        })
      },
      selectionChange (data) {
        console.log(data)
      },
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
      'user-operate': userOperate,
      'user-list': userList,
      'page-set': pageset
    }
  }
</script>
<style lang="scss">

</style>
