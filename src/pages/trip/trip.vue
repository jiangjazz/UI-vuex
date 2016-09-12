<template>
trip
</template>

<script>
// 获取读写数据方法
import {setActNav} from '../../vuex/action'
export default {
  data () {
    return {
    }
  },
  vuex: {
    actions: {
      // 设置当前导航栏
      setActNav
    }
  },
  created () {
    this.setActNav('trip')
  }
}
</script>
