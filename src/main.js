import Vue from 'vue';

// importação do axios e configuração do vue-api-query com o axios
import axios from 'axios';
import { Model } from 'vue-api-query';
import App from './App.vue';

Model.$http = axios;

Vue.config.productionTip = false;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
