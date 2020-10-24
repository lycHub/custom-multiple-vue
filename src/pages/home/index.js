import './index.scss';
import Vue from 'vue';
import { Image as VanImage, Button } from 'vant';

console.log('NODE_ENV', process.env.NODE_ENV); // 取决于mode
Vue.use(VanImage);
Vue.use(Button);
const home = new Vue({
  el: '#home',
  data: {
    title: '首页',
    value: 3,
    navs: [
      {
        name: '首页',
        link: '/home'
      },
      {
        name: '歌手列表',
        link: '/singers'
      }
    ]
  }
});
