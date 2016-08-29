// export const alertMsg = function ({dispatch, state}, msg) {
//   // let msg = msg | '没有输入信息'
//   dispatch('ALERT', msg)
// }
export const alertMsg = ({dispatch}, msg) => dispatch('ALERT', msg)
