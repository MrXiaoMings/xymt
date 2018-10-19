<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#409EFF"
    text-color="#000000"
    active-text-color="#fff">
    <el-row style="float: left; width:30%;height: 40px;">
      <el-col style="line-height: 56px" :span="24">
        校园码头后台管理系统
      </el-col>
    </el-row>
    <el-row style="float: right;height: 100%;width: 70%">
      <template v-for="(item,index) in headData">
        <el-col :span="3.5">
          <el-menu-item :index='item.index'>{{item.name}}</el-menu-item>
        </el-col>
      </template>
    </el-row>
  </el-menu>
</template>
<script>
  export default {
    data () {
      return {
        activeIndex: '',
        headData: [
          {
            index: '1',
            name: '全局设置'
          },
          {
            index: '2',
            name: '会员管理'
          },
          {
            index: '3',
            name: '管理员管理'
          },
          {
            index: '4',
            name: '发布管理'
          },
          {
            index: '5',
            name: '广告管理'
          },
          {
            index: '6',
            name: '信息审核'
          },
          {
            index: '7',
            name: '订单处理'
          }
        ]
      }
    },
    created () {
      let moduleIndex = JSON.stringify(parseInt(this.$route.params.moduleIndex))
      this.activeIndex = moduleIndex
    },
    methods: {
      handleSelect (index, path) {
        let moduleIndex = JSON.stringify(parseInt(this.$route.params.moduleIndex))
        if(moduleIndex === index){
          return
        }
        switch (index) {
          case '1':
            console.log('全局设置')
            break
          case '2':
            this.$router.push({name:'userManage',params:{moduleIndex:2,childIndex:1}})
                break
          case '3':
            console.log('管理员管理')
                break
          case '4':
            this.$router.push({name:'releaseManage',params:{moduleIndex:4}})
                break
          case '5':
            console.log('广告管理')
            break
          case '6':
            console.log('信息审核')
            break
          case '7':
            console.log('订单处理')
            break
          default:
            break
        }
        console.log(index)
        console.log(path)
      }
    }
  }
</script>
<style lang="scss">
  .el-menu-item.is-active{
    background: rgba(0,0,0,0.3) !important;
  }
  .el-row:focus{
    outline: none !important;
    .el-col-24:focus {
      outline: none !important;
    }
  }
</style>
