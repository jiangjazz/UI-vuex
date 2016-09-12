<template>
  <div class="m-leftNav" v-if="secondNav != 'null'">
    <dl class="menu">
      <dt>
        <div class="title">
          {{lang.REPORT_NAV_TITLE}}
        </div>
      </dt>
      <dd>
        <a href="/#!/report/" :class="{active: secondNav=='total'}">{{lang.REPORT_NAV_GLOBAL}}</a>
      </dd>
      <dd>
        <!-- <a href="/#!/report/contrast" :class="{active: secondNav=='contrast'}">{{lang.REPORT_NAV_CONTRAST}}</a> -->
        <a href="javascript:;" class="u-tip">
          {{lang.REPORT_NAV_CONTRAST}}
          <div class="msg">
            <i class="icon-sprite icon-tip"></i>
            功能正在开发中，敬请期待
          </div>
        </a>
      </dd>
    </dl>
  </div>
  <div class="m-content report" :class="{noNav: secondNav == 'null'}">
    <router-view></router-view>
  </div>
</template>

<script>
// 获取读写数据方法
import {setActNav} from '../../vuex/action'
import {getReportNav, getLang} from '../../vuex/getter'
export default {
  data () {
    return {
    }
  },
  vuex: {
    getters: {
      secondNav: getReportNav,
      lang: getLang
    },
    actions: {
      // 设置当前导航栏
      setActNav
    }
  },
  created () {
    this.setActNav('report')
  }
}
</script>
