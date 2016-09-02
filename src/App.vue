<template>
  <Top></Top>
  <div class="m-wrap">
    <!-- 路由外链 -->
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'
import {alertMsg} from './vuex/action'
// 头部模块
import Top from './pages/layout/top.vue'

export default {
  vuex: {
    actions: {
      alertMsg
    }
  },
  data () {
    return {}
  },
  components: {
    Top
  },
  store
}
</script>

<style lang="scss" src="./scss/style.scss"></style>
