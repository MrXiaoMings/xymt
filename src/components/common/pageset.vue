<template>
  <div class="pagination-clude">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.currentPage"
      :page-sizes="pageSizes"
      :page-size="pageInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    props: {
      pageInfo:{
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        pageSizes: [10,15,20,30]
      }
    },
    methods:{
      handleSizeChange (pageSize) {
        this.pageInfo.pageSize = pageSize
        this.$emit('changeSize',pageSize)
      },
      handleCurrentChange (currentPage) {
        this.$emit('currentChange',currentPage)
      }
    }
  }
</script>
<style lang="scss">
  .pagination-clude{
    margin-top: 20px;
  }
</style>
