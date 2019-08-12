import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false

Vue.use(vuetify);

new Vue({
  vuetify,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App)
}).$mount('#app')
