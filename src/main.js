import Vue from 'vue';

// importação do axios e configuração do vue-api-query com o axios
import axios from 'axios';
import { Model } from 'vue-api-query';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Model.$http = axios;

Vue.config.productionTip = false;

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
