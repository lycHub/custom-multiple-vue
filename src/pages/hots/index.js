import './index.scss';
import Vue from 'vue';
import tpic from '../../assets/images/j1.jpg';
import axios from "axios";

import { Tab, Tabs, Cell, CellGroup } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(CellGroup);

const singers = new Vue({
  el: '#hots',
  data: {
    title: '歌手列表',
    tpic,
    navs: [
      {
        name: '首页',
        link: '/home'
      },
      {
        name: '歌手列表',
        link: '/singers'
      }
    ],
    list: []
  },
  created () {
    axios.get('//m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=yinyue').then(({ data }) => {
      this.list = data.data.moduleContent.moduleRankDatas;
    })
  }
});
