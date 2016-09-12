// report模块
import * as NAME from '../mutation.name'

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // 二级导航栏当前栏
  actNavSecond: ''
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // 设置二级导航栏当前栏目
  [NAME.SETNAVSECOND] (state, actNav) {
    state.actNavSecond = actNav
  }
}

// 输出模块
export default {
  state,
  mutations
}
