// 设置导航栏当前栏目
export const setActNav = ({dispatch}, actNav) => dispatch('SETACTNAV', actNav)
// 设置二级导航栏当前栏目
export const setNavSecond = ({dispatch}, actNav) => dispatch('SETNAVSECOND', actNav)
// 初始化语言
export const initLang = ({dispatch}, lang) => dispatch('INITLANG', lang)
