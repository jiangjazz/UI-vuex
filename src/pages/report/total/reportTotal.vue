<template>
  <div class="page-reportTotal">
    <!-- 功能栏 -->
    <div class="m-act">
      <div class="l-l">
        <div class="l-lCt">
          <p>
            <i class="icon-sprite icon-info"></i>
            数据最新更新与 06.31 15:31
          </p>
        </div>
      </div>

      <div class="l-r">
        <a class="downDate" href="/#!/report/export">
          <i class="icon-data icon-sprite"></i>
          <p>
            下载原始数据
          </p>
        </a>
      </div>
    </div>
    <!-- 功能栏 end-->
    <!-- 选择旅程 -->
    <div class="sel-trip">
      <div class="l-l">选择旅程：</div>
      <div class="l-r">
        <dl class="l-rCt list">
          <dt class="item">
            <a href="javascript:;" class="active total">全部旅程</a>
          </dt>
          <dd class="item">
            <a href="javascript:;">X’mas campaign</a>
          </dd>
          <dd class="item">
            <a href="javascript:;">X’mas campaign</a>
          </dd>
          <dd class="item">
            <a href="javascript:;" class="more">
              <b></b><b></b><b></b>
            </a>
          </dd>
        </dl>
      </div>

    </div>
    <!-- 选择旅程 end-->
    <!-- 邮件发送统计 -->
    <div class="u-block">
      <h3 class="u-title">邮件发送统计</h3>
      <div class="m-statistics">
        <div class="l-l">
          <div class="detail">
            <i class="large-sprite large-email"></i>
            <div class="num">
              1232131232
            </div>
            <div class="name">
              发送邮件
            </div>
          </div>
        </div>
        <div class="l-r">
          <ul class="l-rCt">
            <li class="item">
              <div class="title">
                送达： 2344
              </div>
              <Pie :name="names[0]" :color="'#ff2b65'" :date="date1"></Pie>
              <!-- <div class="echart" id="echart1">
              </div> -->
              <div>
                <div class="desc">送达数量</div>
              </div>
            </li>
            <li class="item">
              <div class="title">
                打开： 2344
              </div>
              <Pie :name="names[1]" :color="'#0ecfe0'" :date="date2"></Pie>
              <div>
                <div class="desc">打开数量</div>
              </div>
            </li>
            <li class="item">
              <div class="title">
                点击： 2344
              </div>
              <Pie :name="names[2]" :color="'#fec837'" :date="date3"></Pie>
              <div>
                <div class="desc">点击数量</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 邮件发送统计 end-->
    <!-- 短信发送统计 -->
    <div class="u-block">
      <h3 class="u-title">短信发送统计</h3>
      <div class="m-statistics">
        <div class="l-l">
          <div class="detail">
            <i class="large-sprite large-message"></i>
            <div class="num">
              9563213
            </div>
            <div class="name">
              发送短信
            </div>
          </div>
        </div>
        <div class="l-r">
          <ul class="l-rCt">
            <li class="item">
              <div class="title">
                送达： 2344
              </div>
              <Pie :name="names[3]" :color="'#ff2b65'" :date="date4"></Pie>
              <!-- <div class="echart" id="echart1">
              </div> -->
              <div>
                <div class="desc">送达数量</div>
              </div>
            </li>
            <li class="item">
              <div class="title">
                点击： 2344
              </div>
              <Pie :name="names[4]" :color="'#fec837'" :date="date5"></Pie>
              <div>
                <div class="desc">点击数量</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 短信发送统计 end-->
    <!-- 发送记录 -->
    <div class="u-block record">
      <div class="til-group">
        <h3 class="u-title">发送记录</h3>
      </div>

      <Utable></Utable>
      <div class="f-cb pagination">
        <Pagination class="f-fr"></Pagination>
      </div>


    </div>
    <!-- 发送记录 end-->
  </div>

</template>

<script>
// 获取读写数据方法
import {setNavSecond} from '../../../vuex/action'
// 引入组件
import Pie from '../../../components/pieCharts.vue'
import Utable from '../../../components/table.vue'
import Pagination from '../../../components/pagination.vue'

export default {
  data () {
    return {
      names: [
        'echart1',
        'echart2',
        'echart3',
        'echart4',
        'echart5'
      ]
    }
  },
  vuex: {
    actions: {
      // 设置当前导航栏
      setNavSecond
    }
  },
  computed: {
    date1 () {
      return Math.random() * 2000
    },
    date2 () {
      return Math.random() * 2000
    },
    date3 () {
      return Math.random() * 2000
    },
    date4 () {
      return Math.random() * 2000
    },
    date5 () {
      return Math.random() * 2000
    }
  },
  components: {
    Pie,
    Utable,
    Pagination
  },
  created () {
    this.setNavSecond('total')
  },
  beforeDestroy () {
    this.setNavSecond('')
  },
  ready () {
  }
}
</script>
