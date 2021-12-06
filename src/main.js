import Vue from 'vue'
import App from './App.vue'

import '../node_modules/tailwindcss/dist/tailwind.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
