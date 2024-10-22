// pages/home/index.js
import themeChangeBehavior from 'tdesign-miniprogram/mixins/theme-change';
const swiperList = [
  `https://r2.episode.moe/lskypro/2024/10/18/67121614148bd.png`,
  `https://r2.episode.moe/lskypro/2024/10/18/6712161b9d694.png`,
  `https://r2.episode.moe/lskypro/2024/10/13/670aa13d53e87.png`,
  `https://r2.episode.moe/lskypro/2024/10/18/67121620a918d.jpg`,
  `https://r2.episode.moe/lskypro/2024/10/18/67121621094b4.jpg`,
];
Page({
  behaviors: [themeChangeBehavior],

  navToSearchPage() {
    wx.navigateTo({ url: '/pages/index/search/index' });
  },

  handleItemClick(e) {
    const item = e.currentTarget.dataset.item;
    
    // 将数据存储到本地缓存
    wx.setStorageSync('currentItem', item);
    
    // 跳转到目标页面
    wx.navigateTo({
      url: '/pages/index/search/route/index'
    });
  },
  data:{
    current: 2,
    autoplay: true,
    duration: 500,
    interval: 5000,
    paginationPosition: 'bottom-right',
    swiperList,
    navigation: { type: 'fraction' },
    enable: false,
    rowCol1: [{ width: '100%', height: '342rpx', borderRadius: '24rpx' }],
    rowCol2: [[{ width: '327rpx' }], [{ width: '200rpx' }], [{ size: '327rpx', borderRadius: '24rpx' }]],
    scrollTop: 0,
    rowColsAvater: [{ size: '96rpx', type: 'circle' }],
    rowColsImage: [{ size: '96rpx', type: 'rect' }],
    rowColsContent: [{ width: '50%' }, { width: '100%' }],
    scrollTop: { type: Number, value: 0 },
    backTopTheme: 'round',
    backTopText: '顶部',
    tabPanelstyle: 'display:flex;justify-content:center;align-items:center;',
  },
  onLoad(options){
    wx.request({
      url: `https://api-hzkj.episode.ink/route/?destination=`, // 动态传递 value
      method: 'GET',
      success: (res) => {
        // 假设返回的数据格式为 { data: ['tdesign-vue', 'tdesign-react', ...] }
        const list = res.data.slice(0, 10);

        this.setData({
          resultList: list.map(item => item),
        });

        console.log("resultList:",this.data.resultList);
      },
      fail: (err) => {
        console.error('请求失败', err);
        this.setData({
          resultList: [] // 请求失败时清空列表
        });
      }
    });
  },

  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
  },

  onTabsClick(event) {
    console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
  },
  onToTop(e) {
    this.triggerEvent('to-top', e);
  },
  onChange(e) {
    this.setData({
      value: e.detail.value,
    });
  },
  ready() {
    this.setData({ enable: true });
    setTimeout(() => {
      this.setData({ enable: false });
    }, 1000);
  },
    onRefresh() {
      this.setData({ enable: true });
      setTimeout(() => {
        this.setData({ enable: false });
      }, 0);
    },
    onScroll(e) {
      const { scrollTop } = e.detail;
      this.setData({ scrollTop });
    },

    clickYXLC(){
      wx.switchTab({
        url: '/pages/index/index'
      });
    },
    clickXQLJ(){
      wx.switchTab({
        url: '/pages/hotel/index'
      });
    },
    clickZTLY(){
      wx.switchTab({
        url: '/pages/home/index'
      });
    },
})
