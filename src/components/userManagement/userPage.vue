<template>
  <div class="user-management">
    <div class="left-menu">
      <left-menu
      :leftMenuData="leftMenuData">

      </left-menu>
    </div>
    <div class="right-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import leftMenu from '../common/leftMenu.vue'
  export default {
    data () {
      return {
        leftMenuData: [
          {
            index: '1',
            moduleIndex: 2,
            menuName: '会员总览',
            name: 'userView'
          },
          {
            index: '2',
            moduleIndex: 2,
            menuName: '会员信息',
            name: 'userInfo'
          },
          {
            index: '3',
            moduleIndex: 2,
            menuName: '会员权限',
            name: ''
          }
        ]
      }
    },
    methods: {

    },
    components: {
      "left-menu": leftMenu
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
