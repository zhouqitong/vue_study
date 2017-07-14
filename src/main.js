// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import IndexPage from "./pages/IndexPage.vue"
import Layout from "./components/Layout.vue"
import DetailPage from "./pages/details.vue"
import DetailAnaPage from "./pages/details/analysis.vue"
import OrderListPage from './pages/orderList.vue'
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
        // {
        //   path: 'count',
        //   component: DetailCouPage
        // },
        // {
        //   path: 'forecast',
        //   component: DetailForPage
        // },
        // {
        //   path: 'publish',
        //   component: DetailPubPage
        // }
      ]
    }
  ]
});
new Vue({
  el: '#app',
  router,
  template:"<Layout/>",
  components:{Layout}
});
