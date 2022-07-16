import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import * as Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
import './plugins/v-charts'
import './style/index.css'
import bmap from 'vue-baidu-map'
import './mock/mockServer'

Vue.use(bmap, { ak: 'xrcbngRxzSvLepcS7ZA55d1DW8ly8oxh' })

Vue.component('v-echart', VueEcharts)
Vue.prototype.$echarts = Echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
