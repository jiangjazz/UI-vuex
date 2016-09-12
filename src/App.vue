<template>
  <Top></Top>
  <div class="m-wrap">
    <!-- 路由外链 -->
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'
import {initLang} from './vuex/action'
// 头部模块
import Top from './pages/layout/top.vue'

export default {
  data () {
    return {
    }
  },
  vuex: {
    actions: {
      // 初始化语言
      initLang
    }
  },
  created () {
    this.initLang('cn')
  },
  components: {
    Top
  },
  store
}
</script>

<style lang="scss" src="./scss/style.scss"></style>
