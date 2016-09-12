<template>
  <div class="page-reportExport">
    <!-- 功能栏 -->
    <div class="m-act">
      <div class="u-btn default" title="default">
        <i class="icon-sprite icon-back"></i>
        返回列表
      </div>
    </div>
    <!-- 功能栏 end-->
    <div class="export-ct">
      <p class="note">
        <i class="icon-sprite icon-info"></i>
        数据最新更新与 06.31 15:31
      </p>
      <div class="u-block details">
        <!-- 选择旅程 -->
        <div class="u-form">
          <label class="u-label">选择旅程：</label>
          <div class="u-group bg">
            <div class="">
              <label class="u-checkbox ">
                <input value="18" type="checkbox" name="ids[]">
                <b></b>
              </label>
              全部
            </div>

            <div class="">
              <label class="u-checkbox ">
                <input value="18" type="checkbox" name="ids[]">
                <b></b>
              </label>
              未登陆用户唤醒旅程
            </div>
          </div>
        </div>
        <!-- 选择旅程 end-->

        <div class="u-form">
          <label class="u-label">时间范围：</label>
          <div class="u-group data-group">
            从
            <Datepicker :maxdate="maxDate1"></Datepicker>
            至
            <Datepicker :mindate="minDate2"></Datepicker>
          </div>
        </div>

        <div class="u-form">
          <label class="u-label">用户属性字段：</label>
          <div class="u-group bg">
            <div class="">
              <label class="u-checkbox ">
                <input value="18" type="checkbox" name="ids[]">
                <b></b>
              </label>
              Name
            </div>
            <div class="">
              <label class="u-checkbox ">
                <input value="18" type="checkbox" name="ids[]">
                <b></b>
              </label>
              Email
            </div>
            <div class="">
              <label class="u-checkbox ">
                <input value="18" type="checkbox" name="ids[]">
                <b></b>
              </label>
              Mobile
            </div>
          </div>
        </div>

        <div class="u-form">
          <label class="u-label">用户行为：</label>
          <div class="u-group bg">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    邮件
                  </th>
                  <th>
                    短信
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="">
                      <label class="u-checkbox ">
                        <input value="18" type="checkbox" name="ids[]">
                        <b></b>
                      </label>
                      发送
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <label class="u-checkbox ">
                        <input value="18" type="checkbox" name="ids[]">
                        <b></b>
                      </label>
                      发送
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="">
                      <label class="u-checkbox ">
                        <input value="18" type="checkbox" name="ids[]">
                        <b></b>
                      </label>
                      打开
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <label class="u-checkbox ">
                        <input value="18" type="checkbox" name="ids[]">
                        <b></b>
                      </label>
                      打开
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="">
                      <label class="u-checkbox ">
                        <input value="18" type="checkbox" name="ids[]">
                        <b></b>
                      </label>
                      点击
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <label class="u-checkbox ">
                        <input value="18" type="checkbox" name="ids[]">
                        <b></b>
                      </label>
                      点击
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="">
                      <label class="u-checkbox ">
                        <input value="18" type="checkbox" name="ids[]">
                        <b></b>
                      </label>
                      软弹
                    </div>
                  </td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="">
                      <label class="u-checkbox ">
                        <input value="18" type="checkbox" name="ids[]">
                        <b></b>
                      </label>
                      硬弹
                    </div>
                  </td>
                  <td>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <div class="btn-group">
        <div class="u-btn info" title="导出">导出</div>
      </div>
    </div>
  </div>
</template>

<script>
// 获取读写数据方法
import {setNavSecond} from '../../../vuex/action'
// 引入组件
import Datepicker from '../../../components/datepicker.vue'
// 引入外部模块
// import WdatePicker from '../../../plugin/Wdate/WdatePicker'
// console.log(WdatePicker)

export default {
  data () {
    return {
      minDate2: '2016-09-10',
      maxDate1: '2016-09-12'
    }
  },
  methods: {
    datePicker () {
      // WdatePicker()
    }
  },
  vuex: {
    actions: {
      // 设置当前导航栏
      setNavSecond
    }
  },
  components: {
    Datepicker
  },
  created () {
    this.setNavSecond('null')
  },
  beforeDestroy () {
    this.setNavSecond('')
  },
  ready () {
  }
}
</script>
