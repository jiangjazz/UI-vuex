import Vue from 'vue'
import Vuex from 'vuex'
import * as NAME from './mutation.name'
// 引入子模块
import components from './modules/components'
// 使用vuex
Vue.use(Vuex)
// 创建一个对象来保存应用启动时的初始状态
const state = {
  testMsg: '测试信息'
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  [NAME.TESTMSG] (state, message) {
    state.testMsg = message
  },
  ALERT (state, msg) {
    let msgs = msg || '空信息'
    console.log(msgs)
    state.testMsg = msgs
  }
}

// 创建中间件
const middlewares = {
  // 中间件中获得 state 的快照（snapshots），用来比较 mutation 前后的 state
  snapshot: true,
  onInit (state) {
    // 记录初始state
    console.log('初始state')
    console.log(state)
  },
  onMutation (mutation, nextState, prevState) {
    // 每个 mutation 后会被调用
    // mutation 参数的格式为 { type, payload }
    console.log('调用mutation')
    console.log(mutation, nextState, prevState)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  // 不要在生产环境中开启严格模式！ 为了检测在不合适的地方发生的状态修改, 严格模式会对 state 树进行一个深观察 (deep watch)。所以为了避免不必要的性能损耗，请在生产环境中关闭严格模式。
  strict: true,
  modules: {
    components
  },
  middlewares: [middlewares]
})
