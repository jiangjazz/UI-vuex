module.exports = function (router) {
  // 定义路由规则
  // 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
  // 创建的组件构造函数，也可以是一个组件选项对象。
  router.map({
    '/ui': {
      component: function (resolve) {
        require(['../pages/ui.vue'], resolve)
      }
    },
    '/': {
      component: function (resolve) {
        require(['../pages/home.vue'], resolve)
      }
    },
    '/trip': {
      component: function (resolve) {
        require(['../pages/trip/trip.vue'], resolve)
      }
    },
    '/report': {
      component: function (resolve) {
        require(['../pages/report/report.vue'], resolve)
      },
      subRoutes: {
        '/': {
          component: function (resolve) {
            require(['../pages/report/total/reportTotal.vue'], resolve)
          }
        },
        '/contrast': {
          component: function (resolve) {
            require(['../pages/report/contrast/reportContrast.vue'], resolve)
          }
        },
        '/export': {
          component: function (resolve) {
            require(['../pages/report/export/reportExport.vue'], resolve)
          }
        }
      }
    }
    // '/paging': {
    //   component: function (resolve) {
    //     require(['../pages/paging.vue'], resolve)
    //   }
    // }
  })
  // 重定向
  router.redirect({
    '*': '/'
  })
  // 别名
  // router.alias()
  return
}
