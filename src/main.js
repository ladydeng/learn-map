import Vue from 'vue'
import App from './App.vue'
// import VueAMap from 'vue-amap';

// Vue.use(VueAMap);

// // 初始化vue-amap
// VueAMap.initAMapApiLoader({
//   // 高德的key
//   key: '16f3cdb8e8b0d0418e95cf7a4e1e8bf1',
//   // 插件集合
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//   // 高德 sdk 版本，默认为 1.4.4
//   v: '1.4.4'
// });
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
