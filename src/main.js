import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Base = Vue.extend({
  data () {
    return {}
  },
  components: {App}
})

const router = new VueRouter()

require('./routes/routes')(router)

router.start(Base, 'body')
