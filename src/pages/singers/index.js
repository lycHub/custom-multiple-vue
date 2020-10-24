import './index.scss';
import Vue from 'vue/dist/vue.min';

const singers = new Vue({
  el: '#singers',
  data: {
    title: '歌手列表',
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
