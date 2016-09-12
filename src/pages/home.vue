<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>

  <style media="screen">
    td{
      padding: 5px !important;
    }
  </style>
  <table>
    <tr>
      <td>
        <div class="u-btn main" title="main">按钮</div>
        <div class="u-btn secondary" title="secondary">按钮</div>
        <div class="u-btn info" title="info">按钮</div>
        <div class="u-btn default" title="default">按钮</div>
        <div class="u-btn main disabled" title="disabled">按钮</div>
        <div class="u-btn main" disabled title="disabled">按钮</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="u-select main" title="main">
          <div class="u-hd">
            <b></b>
            <span>下拉框</span>
          </div>
          <div class="u-bd">
            <ul>
              <li><a href="#">123123</a></li>
              <li><a href="#">123123</a></li>
              <li><a href="#">123123</a></li>
            </ul>
          </div>
        </div>

        <div class="u-select secondary" title="secondary">
          <div class="u-hd">
            <b></b>
            <span>下拉框</span>
          </div>
          <div class="u-bd">
            <ul>
              <li><a href="#">123123</a></li>
              <li><a href="#">123123</a></li>
              <li><a href="#">123123</a></li>
            </ul>
          </div>
        </div>

        <div class="u-select" title="default">
          <div class="u-hd">
            <b></b>
            <span>下拉框下拉框下拉框下拉框</span>
          </div>
          <div class="u-bd">
            <ul>
              <li><a href="#">123123</a></li>
              <li><a href="#">123123</a></li>
              <li><a href="#">123123</a></li>
            </ul>
          </div>
        </div>

        <div class="u-select auto" title="auto">
          <div class="u-hd">
            <b></b>
            <span>下拉框下拉框下拉框下拉框</span>
          </div>
          <div class="u-bd">
            <ul>
              <li><a href="#">123123</a></li>
              <li><a href="#">123123</a></li>
              <li><a href="#">123123</a></li>
            </ul>
          </div>
        </div>

        <div class="u-select disabled">
          <div class="u-hd">
            <b></b>
            <span>下拉框</span>
          </div>
          <div class="u-bd">
            <ul>
              <li><a href="#">123123</a></li>
              <li><a href="#">123123</a></li>
              <li><a href="#">123123</a></li>
            </ul>
          </div>
        </div>
      </td>
    </tr>

    <tr>
      <td>
        <Datepicker></Datepicker>
      </td>
    </tr>

    <tr>
      <td>
        <label class="u-checkbox ">
          <input value="18" type="checkbox" name="ids[]">
          <b></b>
        </label>
        <label class="u-checkbox ">
          <input value="16" type="checkbox" name="ids[]" checked>
          <b></b>
        </label>

        <label class="u-checkbox ">
          <input value="14" type="checkbox" name="ids[2]" disabled="">
          <b></b>
        </label>
        <label class="u-checkbox ">
          <input value="12" type="checkbox" name="ids[2]" checked disabled="">
          <b></b>
        </label>
      </td>
    </tr>

    <tr>
      <td>
        <label class="u-radio ">
          <input value="18" type="radio" name="ids[]">
          <b></b>
        </label>
        <label class="u-radio ">
          <input value="16" type="radio" name="ids[]" checked>
          <b></b>
        </label>

        <label class="u-radio ">
          <input value="14" type="radio" name="ids[2]" disabled="">
          <b></b>
        </label>
        <label class="u-radio ">
          <input value="12" type="radio" name="ids[2]" checked disabled="">
          <b></b>
        </label>
      </td>
    </tr>

    <tr>
      <td>
        <div class="u-search">
	          <input size="60" maxlength="200" placeholder="搜索用户组" name="SmsGroup[name]" id="SmsGroup_name" type="text">
            <b class="u-icon-serch"></b>
		    </div>

        <div class="u-search" >
	          <input size="60" maxlength="200" placeholder="搜索用户组" name="SmsGroup[name]" id="SmsGroup_name" type="text" disabled="">
            <b class="u-icon-serch"></b>
		    </div>
      </td>
    </tr>

    <tr>
      <td>
        <input type="text" name="name" value="" class="u-input">
      </td>
    </tr>

    <tr>
      <td>
        <textarea value="" class="u-textarea"></textarea>
      </td>
    </tr>

    <tr>
      <td>
        <div class="u-group">
          <input type="text" name="name" value="" class="u-input">
          <div class="prompt">
            出错咯
          </div>
        </div>

        <div class="u-group error">
          <input type="text" name="name" value="" class="u-input">
          <div class="prompt">
            出错咯
          </div>
        </div>

        <div class="u-group u-form error">
          <label for="" class="u-label">normal</label>
          <input type="text" name="name" value="" class="u-input">
          <div class="prompt">
            出错咯
          </div>
        </div>

        <div class="u-form">
          <label for="" class="u-label required">.required</label>
          <div class="u-group error">
            <input type="text" name="name" value="" class="u-input">
            <div class="prompt">
              出错咯
            </div>
          </div>
        </div>

        <div class="u-group u-form error">
          <label for="" class="u-label" required>[required]</label>
          <input type="text" name="name" value="" class="u-input">
          <div class="prompt">
            出错咯
          </div>
        </div>

        <div class="u-group u-form error">
          <label for="" class="u-label" required>[required]</label>
          <textarea value="" class="u-textarea"></textarea>
          <div class="prompt">
            出错咯
          </div>
        </div>

        <div class="u-form ">
          <label for="" class="u-label" required>[required]</label>
          <div class="u-group error">
            <textarea value="" class="u-textarea"></textarea>
            <div class="prompt">
              出错咯
            </div>
          </div>
        </div>

      </td>
    </tr>

    <tr>
      <td class="">
        <div class="u-prompt error">
          <div class="prompt">
              失败了
          </div>
        </div>
      </td>
    </tr>

    <tr>
      <td>
        <div class="u-prompt success">
          <div class="prompt">
              成功的
          </div>
        </div>
      </td>
    </tr>

  </table>

</template>

<script>
// 获取读写数据方法
import {setActNav} from '../vuex/action'
// 获取组件
import Datepicker from '../components/datepicker.vue'
export default {
  data () {
    return {
      msg: '组件样式'
    }
  },
  vuex: {
    actions: {
      // 设置当前导航栏
      setActNav
    }
  },
  components: {
    Datepicker
  },
  created () {
    this.setActNav('home')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>
