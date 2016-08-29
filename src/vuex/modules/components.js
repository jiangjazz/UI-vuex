import * as NAME from '../mutation.name'

// 创建一个对象来保存应用启动时的初始状态
const state = {
  testMsg: '测试信息'
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  [NAME.TESTMSG] (state, message) {
    state.testMsg = message
  }
}

// 输出模块
export default {
  state,
  mutations
}
