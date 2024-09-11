// index.js
import themeChangeBehavior from 'tdesign-miniprogram/mixins/theme-change';
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];
Page({
  behaviors: [themeChangeBehavior],

  navToSearchPage() {
    wx.navigateTo({ url: '/pages/index/search/index' });
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
      }, 1500);
    },
    onScroll(e) {
      const { scrollTop } = e.detail;
      this.setData({ scrollTop });
    },
})
