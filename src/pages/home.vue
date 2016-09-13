<template>
  <div class="page-home">
    <div class="home-ct">

      <div class="f-cb">
        <!-- 营销旅程可用余额 -->
        <div class="m-balance hasNone">
          <div class="u-block">
            <div class="u-title">
              营销旅程可用余额
              <a href="javascript:;" class="f-fr f-vam go">
                <i class="icon-sprite icon-go"></i>
                <span class="f-vam">充值</span>
              </a>
            </div>
            <div class="f-cb email">
              <div class="f-fl">
                <i class="large-sprite large-email"></i>
              </div>
              <div class="f-fl other">
                <p>
                  邮件余额（封）
                </p>
                <div class="num">
                  10000000
                </div>
              </div>
            </div>

            <div class="f-cb message">
              <div class="f-fl">
                <i class="large-sprite large-message"></i>
              </div>

              <div class="f-fl other">
                <p>
                  邮件余额（封）
                </p>
                <div class="num">
                  100000000
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- 营销旅程可用余额 end-->
        <!-- 最近开始旅程 -->
        <div class="m-recentTrip">
          <!-- if 有最近旅程 -->
          <div class="u-block">
            <div class="u-btn main create">新建旅程</div>
            <div class="u-title">
              最近开始旅程
            </div>
            <div class="list">
              <div class="item">
                <div class="f-ib f-vam">
                  <Pie :name="names[0]" :color="'#0ecfe0'" :size="12" :date="date0"></Pie>
                </div>
                <div class="f-ib f-vam activity">
                  <p>
                    端午节老会员粽子特惠活动
                  </p>
                  <div class="time">
                    旅程周期：
                    <span>03.03-06.09</span>
                  </div>
                </div>

                <ul class="f-cb f-ib f-vam detail-list">
                  <li>
                    <p>
                      12306
                    </p>
                    <p class="name">
                      联系人
                    </p>
                  </li>
                  <li>
                    <p>
                      10
                    </p>
                    <p class="name">
                      发送邮件
                    </p>
                  </li>
                  <li>
                    <p>
                      10
                    </p>
                    <p class="name">
                      发送短信
                    </p>
                  </li>
                </ul>
              </div>
              <div class="item">
                <div class="f-ib f-vam">
                  <Pie :name="names[1]" :color="'#0ecfe0'" :size="12" :date="date1"></Pie>
                </div>
                <div class="f-ib f-vam activity">
                  <p>
                    端午节老会员粽子特惠活动
                  </p>
                  <div class="time">
                    旅程周期：
                    <span>03.03-06.09</span>
                  </div>
                </div>

                <ul class="f-cb f-ib f-vam detail-list">
                  <li>
                    <p>
                      12306
                    </p>
                    <p class="name">
                      联系人
                    </p>
                  </li>
                  <li>
                    <p>
                      10
                    </p>
                    <p class="name">
                      发送邮件
                    </p>
                  </li>
                  <li>
                    <p>
                      10
                    </p>
                    <p class="name">
                      发送短信
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- else 没有最近旅程-->
          <div class="u-block f-tac" style="display: none;">
            <div>
              <div class="iconCt">
                <i class="icon-sprite icon-trip"></i>
              </div>
            </div>
            <p>
              立即开始您的第一次营销旅程
            </p>
            <div>
              <div class="u-btn main newTrip">
                新建旅程
              </div>
            </div>
          </div>
          <!-- end 最近旅程-->
        </div>
        <!-- 最近开始旅程 end-->
        <!-- 旅程发送统计 -->
        <div class="m-tripChart">
          <div class="u-block">
            <div class="u-title">
              近30天旅程发送统计
              <span class="f-fr">
                <i class="icon-sprite icon-info"></i>
                数据最新更新与 06.31 15:31
              </span>
            </div>
            <div class="">
              <Area :name="areaName[0]"></Area>
            </div>
          </div>
        </div>
        <!-- 旅程发送统计 end-->

        <!-- 邮件行为统计 -->
        <div class="m-tripChart">
          <div class="u-block">
            <div class="u-title">
              近30天邮件行为统计
              <span class="f-fr">
                <i class="icon-sprite icon-info"></i>
                数据最新更新与 06.31 15:31
              </span>
            </div>
            <div class="">
              <Area :name="areaName[1]"></Area>
            </div>
          </div>
        </div>
        <!-- 邮件行为统计 end-->

      </div>
    </div>
    <div class="m-rightNav">
      <!-- 旅程执行统计 -->
      <div class="u-block m-execution">
        <div class="u-title">
          旅程执行统计
        </div>
        <div class="u-prompt error f-cb ">
          <div class="prompt">
            2个流程异常停止
            <a href="javascript" class="show">查看</a>
          </div>
        </div>
        <ul class="list">
          <li class="item">
            <div class="num">
              0
            </div>
            <div class="name">
              进行中
            </div>
          </li>
          <li class="item">
            <div class="num">
              0
            </div>
            <div class="name">
              暂停
            </div>
          </li>
          <li class="item">
            <div class="num">
              0
            </div>
            <div class="name">
              已结束
            </div>
          </li>
          <li class="item">
            <div class="num">
              0
            </div>
            <div class="name">
              草稿
            </div>
          </li>
        </ul>
      </div>
      <!-- 旅程执行统计 end-->

      <div class="u-block m-news">
        <div class="u-title">
          最新动态
        </div>
        <ul class="list">
          <li class="item">
            最近没有任何动态
          </li>
          <li class="item">
            <div class="time">
              16:45  2014-9-29
            </div>
            <div class="detail">
              karen 导入 3000个联系人至VIP老会员分组
            </div>
          </li>
          <li class="item">
            <div class="time">
              16:45  2014-9-29
            </div>
            <div class="detail">
              karen 导入 3000个联系人至VIP老会员分组
            </div>
          </li>
          <li class="item">
            <div class="time">
              16:45  2014-9-29
            </div>
            <div class="detail">
              karen 导入 3000个联系人至VIP老会员分组
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 获取读写数据方法
import {setActNav} from '../vuex/action'
// 引入组件
import Pie from '../components/pieCharts.vue'
import Area from '../components/areaCharts.vue'

export default {
  data () {
    return {
      names: [
        'echart0',
        'echart1'
      ],
      areaName: [
        'area0',
        'area1'
      ]
    }
  },
  vuex: {
    actions: {
      // 设置当前导航栏
      setActNav
    }
  },
  computed: {
    date0 () {
      return Math.random() * 2000
    },
    date1 () {
      return Math.random() * 2000
    }
  },
  components: {
    Pie,
    Area
  },
  created () {
    this.setActNav('home')
  }
}
</script>
