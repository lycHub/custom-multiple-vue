import './index.scss';
import Vue from 'vue';
import { Image as VanImage, Button } from 'vant';

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
        link: './home'
      },
      {
        name: '歌手列表',
        link: './singers'
      }
    ]
  }
});
