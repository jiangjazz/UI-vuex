<template>
  <div class="m-top">
    <a href="http://dmayun.com/" class="u-logo">
        <img src="../../images/logo.png" alt="" width="190" height="60">
    </a>
    <!-- 激活相应区域添加类 active -->
    <dl class="u-nav">
        <dt class="u-menu" @mouseenter="showNav" @mouseleave="hideNav">
            <b class="icon-sprite icon-logo"></b>
            <span class="journey">Journey</span>
        </dt>
        <dd :class="{active: actNav=='home'}"><a href="/#!/">{{lang.TOP_NAV_HOME}}</a></dd>
        <dd :class="{active: actNav=='trip'}"><a href="/#!/trip">{{lang.TOP_NAV_TRIP}}</a></dd>
        <dd :class="{active: actNav=='report'}"><a href="/#!/report">{{lang.TOP_NAV_REPORT}}</a></dd>
    </dl>

    <div class="u-userCenter f-fr">
        <a href="http://dmayun.com/#!/shop/prepaid/" class="goShopping f-ib f-vam">
            <i class="topIcon icon-shop"></i>
        </a>
        <a href="http://dmayun.com/#!/setting/accountSet/" class="setting f-ib f-vam">
            <i class="topIcon icon-setting"></i>
        </a>
        <div class="u-dropdown f-ib f-vam">
            <div class="dropdown-show f-cb">
                <div class="f-fl levelImg">
                    <div class="levelPic f-ib f-vam level-sprite"></div>
                    <!-- <img src="/build/images/public/icon-level-1.png" class="f-vam"> -->
                </div>
                <div class="f-fl user" title="Jazz" @click.stop="showUserDetail">
                </div>
            </div>
            <dl class="dropdown-menu" @click.stop="">
                <dt class="welcom" title="Jazz">
                    Welcome,Jazz                </dt>
                                <dd class="item email">
                    <i class="logo-sprite logo-email"></i>
                     邮件剩余量：
                    <span class="num">10</span>
                </dd>
                                                <dd class="item sms">
                    <i class="logo-sprite logo-sms"></i>
                     短信剩余量：
                    <span class="num">20</span>
                </dd>
                                                <dd class="item mms">
                    <i class="logo-sprite logo-mms"></i>
                     彩信剩余量：
                    <span class="num">5</span>
                </dd>
                <dd class="item btnGroup">
                    <a href="javascript:;" class="u-btn u-btn-default">在线支持</a>
                    <a href="http://dmayun.com/#!/setting/accountSet/" class="u-btn u-btn-setting">账户设置</a>
                    <a href="/sms/logout" class="u-btn u-btn-signout">登出</a>
                </dd>
            </dl>
        </div>
    </div>
    <!-- dmaYun_user_msg end -->
</div>
<div class="u-menu-bg"></div>
<div class="u-menu-nav" @mouseenter="showNav" @mouseleave="hideNav">
    <ul>
        <li>
            <a href="http://email.beta.dmayun.com?access-token=0384e74906e5482ba9a59dc59df2095e">
                <img src="../../images/logo-email.png" width="100" height="120" alt=""></a>
        </li>
        <li>
            <a href="http://sms.beta.dmayun.com/sms?access_token=0384e74906e5482ba9a59dc59df2095e">
                <img src="../../images/logo-message.png" width="100" height="120" alt=""></a>
        </li>
        <li class="disabled">
            <a href="javascript:;">
                <img src="../../images/logo-mrtb.png" width="100" height="120" alt=""></a>
        </li>
        <li>
            <a href="javascript:;">
                <img src="../../images/logo-journey.png" width="100" height="120" alt=""></a>
        </li>
    </ul>
</div>
</template>

<script>
import $ from 'jquery'
// 获取读写数据方法
import {getLang, getActNav} from '../../vuex/getter'
// 定义公用方法
const act = {
  // 切换用户详情数据下拉菜单
  hideUserDetial () {
    $('.dropdown-menu').slideUp()
  },
  // 切换显示头部下拉菜单
  toggleNav (navLoop) {
    if (navLoop > 0) {
      $('.u-menu-nav').stop().slideDown()
    } else {
      $('.u-menu-nav').stop().slideUp()
    }
  }
}

export default {
  data () {
    return {
      // 弹出层是否显示计数器 >0显示
      navLoop: 0
    }
  },
  vuex: {
    getters: {
      lang: getLang,
      actNav: getActNav
    }
  },
  ready () {
    $(document).on('click', act.hideUserDetial)
  },
  methods: {
    // 切换显示头部下拉菜单
    showNav () {
      this.navLoop ++
      $('.u-menu-nav').stop().delay(0, () => {
        act.toggleNav(this.navLoop)
      })
    },
    // 切换显示头部下拉菜单
    hideNav () {
      this.navLoop --
      $('.u-menu-nav').stop().delay(500, () => {
        act.toggleNav(this.navLoop)
      })
    },
    // 切换用户详情数据下拉菜单
    showUserDetail () {
      $('.dropdown-menu').slideDown()
    }
  }
}
</script>
