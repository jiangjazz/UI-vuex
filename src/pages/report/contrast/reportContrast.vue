<template>
  <div class="">
    功能正在开发中，敬请期待
  </div>
</template>

<script>
// 获取读写数据方法
import {setNavSecond} from '../../../vuex/action'

export default {
  data () {
    return {
    }
  },
  vuex: {
    actions: {
      // 设置当前导航栏
      setNavSecond
    }
  },
  created () {
    this.setNavSecond('contrast')
  },
  beforeDestroy () {
    this.setNavSecond('')
  }
}
</script>
