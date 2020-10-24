import './index.scss';
import Vue from 'vue';

const home = new Vue({
  el: '#home',
  data: {
    title: '首页',
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
