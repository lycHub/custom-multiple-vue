import './index.scss';
import Vue from 'vue';
import tpic from '../../assets/images/j1.jpg';

const singers = new Vue({
  el: '#singers',
  data: {
    title: '歌手列表',
    tpic,
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
