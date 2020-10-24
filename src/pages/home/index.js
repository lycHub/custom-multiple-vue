import './index.scss';
import Vue from 'vue';
// import { Button } from 'vant';
// Vue.use(Button);

import { Image as VanImage } from 'vant';

Vue.use(VanImage);
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
