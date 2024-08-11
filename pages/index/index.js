// index.js
import themeChangeBehavior from 'tdesign-miniprogram/mixins/theme-change';
Page({
  behaviors: [themeChangeBehavior],

  navToSearchPage() {
    wx.navigateTo({ url: '/pages/index/search/index' });
  },
})
