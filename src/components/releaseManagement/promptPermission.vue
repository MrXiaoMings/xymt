<template>
  <div class="sc-permission">
    <i class="iconfont">&#xe62a;</i>
    <span>您还没有权限进行此类别的发布活动，试试其他类别，或</span><span style="color: #3a8ee6; cursor: pointer" @click="goToApply">申请权限</span>
  </div>
</template>
<style lang="scss">
  .sc-permission{
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 300px;
    span{
      vertical-align: super;
    }
    .iconfont {
      font-size: 40px;
    }
  }
</style>
<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      goToApply () {
        this.$emit('goToApply')
      }
    }
  }
</script>
