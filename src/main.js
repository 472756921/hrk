import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'element-ui/lib/theme-default/base.css';
import axios from 'axios';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.config.productionTip = false
Vue.prototype.$ajax = axios;
axios.defaults.withCredentials=true;
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
