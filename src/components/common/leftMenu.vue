<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    @select="selectMenu"
    background-color="#5585B7"
    text-color="#fff"
    active-text-color="#ffd04b">
    <template v-for="(item,index) in leftMenuData">
      <el-menu-item :index="item.index">
        <span slot="title">{{item.menuName}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
  import * as _ from 'lodash'
  export default {
    props: {
      leftMenuData: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        activeIndex: ''
      }
    },
    created () {
      let index = JSON.stringify(parseInt(this.$route.params.childIndex)) // 根据当前选中的子菜单初始化选中菜单
      this.activeIndex = index
    },
    methods: {
      selectMenu (index, path) {
        let name = _.find(this.leftMenuData, (item) =>{
          return item.index === path[0]
        }).name
        let moduleIndex = _.find(this.leftMenuData, (item) =>{
          return item.index === path[0]
        }).moduleIndex
        let childIndex = parseInt(index)
        if(name){
          this.$router.push({name:name,params:{moduleIndex: moduleIndex,childIndex: childIndex}})
        }else{
          this.$message.warning('未知异常！')
        }

      }
    }
  }
</script>
