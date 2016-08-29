<template>
    <div class="menu">
      <a href="/#!/">返回首页</a>
      <ul>
        <li><a href="/#!/paging">分页</a></li>
      </ul>
    </div>
    <div class="main">
      <!-- 路由外链 -->
      <router-view></router-view>
    </div>
    <div class="aside">
    </div>
</template>

<script>
import store from './vuex/store'
import {alertMsg} from './vuex/action'

export default {
  vuex: {
    actions: {
      alertMsg
    }
  },
  data () {
    return {}
  },
  store
}
</script>

<style lang="scss" src="./scss/style.scss"></style>
