// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import IndexPage from "./pages/IndexPage.vue"
import Layout from "./components/Layout.vue"
import DetailPage from "./pages/details.vue"
import OrderListPage from "./pages/orderList.vue"
import DetailAnaPage from "./pages/details/analysis.vue"
import DetailCouPage from './pages/details/count.vue'
import DetailForPage from './pages/details/forecast.vue'
import DetailPubPage from './pages/details/publish.vue'
import _ from "lodash"
Vue.use(VueRouter);
Vue.use(VueResource);
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/details',
      component: DetailPage,
      redirect: '/details/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
});
new Vue({
  el: '#app',
  router,
  template:"<Layout/>",
  data(){
    return {
      lodash:_
    }
  },
  components:{Layout}
});
