import './index.scss';
import Vue from 'vue';
import axios from 'axios';
import { Button, Tab, Tabs, Cell, CellGroup } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
const home = new Vue({
  el: '#home',
  data: {
    title: '首页',
    currentTab: 0,
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
    ],
    list: []
  },
  created () {
    axios.get('//m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=youshengshu').then(({ data }) => {
      this.list = data.data.moduleContent.moduleRankDatas;
    })
  }
});
