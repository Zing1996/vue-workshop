import Vue from 'vue'
import Main from './Main.vue'
import About from './About.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
