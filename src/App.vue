<template>
  <div id="app">
    <div class="common-head">
      <template v-if="isLogin">
        <common-head></common-head>
      </template>
    </div>
    <div class="common-bottom">
      <router-view/>
    </div>

  </div>
</template>

<script>
  import commonHead from './components/common/head.vue'
  import bus from './components/script/bus'
  import cookie from './components/script/cookie'

  export default {
    name: 'App',
    data() {
      return {
        isLogin:isLogin
      }
    },
    created(){
      bus.$on('isLogin',(data)=>{
        this.isLogin = data
      })
      let name = this.$route.name
      if(name === 'login'){
        this.isLogin = false
      }else{
        this.isLogin = true
      }
    },
    computed: {

    },
    methods: {

    },
    components: {
      'common-head': commonHead
    }
  }
</script>

<style lang="scss">
  html {
    height: 100%;
    body {
      height: 100%;
    }
  }

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: sans-serif, 'Avenir', Helvetica, Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
    color: #2c3e50;
    .common-head {
      height: 40px;
    }
    .common-bottom {
      height: calc(100% - 60px);
      width: 100%;
      overflow-y: auto;
    }
    .loginPage {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
