import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/zodiac.css'
import './assets/css/w3.css'

import App from './App.vue'
import Hello from './components/Hello.vue'
import Teamer from './components/Teamer.vue'
import TeamCAD from './components/TeamCAD.vue'
import TeamEngineer from './components/TeamEngineer.vue'
import TeamProgram from './components/TeamProgram.vue'
import TeamCommercial from './components/TeamCommercial.vue'

const routes = [
    { path: '/', component: Hello },
    { path: '/team', redirect: '/team/cad', component: Teamer,
      children: [
          {
              name: 'cad',
              path: 'cad',
              component: TeamCAD
          }, {
              name: 'engineer',
              path: 'engineer',
              component: TeamEngineer
          }, {
              name: 'program',
              path: 'program',
              component: TeamProgram
          }, {
              name: 'commercial',
              path: 'commercial',
              component: TeamCommercial
          }
      ]}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
