<template>
  <div class="user-management">
    <div class="release-content">
      <router-view
      :releaseTableData="releaseTableData">
      </router-view>
    </div>
  </div>
</template>
<script>
  import leftMenu from '../common/leftMenu.vue'
  export default {
    data () {
      return {
        releaseTableData: [
          {
            id: 1,
            childId: '',
            deadline: '',
            creator: '测试人员',
            details: '',
            grandId: '1',
            parentId: '1',
            joiners: 23,
            homeId: null,
            wage: '',
            isOriginalPrice: 0,
            isShowFirstPage: 1,
            isShowToHome: 0,
            originalPrice: '',
            introduction: '',
            created: '2018-10-08 12:08:12',
            pageId: 4545454454,
            parentId: 2454112,
            place: '地点',
            registery: '2018-08-08',
            speaker: '演讲人',
            title: '标题',
            type: '2',
            file: '文件'
          },
          {
            id: 2,
            childId: '',
            deadline: '',
            details: '',
            grandId: '1',
            parentId: '1',
            creator: '测试人员',
            joiners: 23,
            homeId: null,
            wage: '',
            isOriginalPrice: 0,
            isShowFirstPage: 1,
            isShowToHome: 0,
            originalPrice: '',
            introduction: '',
            created: '2018-10-08 12:08:12',
            pageId: 4545454454,
            parentId: 2454112,
            place: '地点',
            registery: '2018-08-08',
            speaker: '演讲人',
            title: '标题',
            type: '1',
            file: '文件'
          },
          {
            id: 3,
            childId: '',
            deadline: '',
            details: '',
            grandId: '1',
            parentId: '1',
            creator: '测试人员',
            joiners: 23,
            homeId: null,
            wage: '',
            isOriginalPrice: 0,
            isShowFirstPage: 1,
            isShowToHome: 0,
            originalPrice: '',
            introduction: '',
            created: '2018-10-08 12:08:12',
            pageId: 4545454454,
            parentId: 2454112,
            place: '地点',
            registery: '2018-08-08',
            speaker: '演讲人',
            title: '标题',
            type: '3',
            file: '文件'
          }
        ]
      }
    },
    methods: {

    },
    components: {

    }
  }
</script>
<style lang="scss">
  .user-management{
    width: 100%;
    height:100%;
    .left-menu{
      height: 100%;
      width: 100px;
      float: left;
      .el-menu-vertical-demo{
        height: 100%;
      }
    }
    .right-content{
      width: calc(100% - 130px);
      float: right;
      padding-top: 20px;
    }
  }
</style>
