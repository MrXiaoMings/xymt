<template>
  <div id="wangEditor">
    <div ref="editor" style="text-align:left"></div>
    <button v-on:click="getContent">查看内容</button>
  </div>
</template>
<script>
import E from 'wangeditor'
export default {
  name: 'editor',
  props: {
    editorContent: ''
  },
  data () {
    return {}
  },
  methods: {
    getContent () {
      this.$emit('getContent')
    }
  },
  mounted () {
    let editor = new E(this.$refs.editor)
    editor.customConfig.menus = [
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'italic',  // 斜体
      'underline',  // 下划线
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'emoticon',  // 表情
      'image',  // 插入图片
      'table',  // 表格
      // 'video',  // 插入视频
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
    ]
    editor.customConfig.onchange = (html) => {
      this.$emit('changeEditorContent', html)
    }
    editor.customConfig.uploadImgServer = '/upload'
    editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024 // 图片大小不得超过2M
    editor.customConfig.uploadImgMaxLength = 8 // 最多上传8张图片
    editor.create()
  }
}
</script>
<style lang="scss">
  #wangEditor {
    .w-e-menu{
      z-index: 100001 !important;
    }
  }
</style>
