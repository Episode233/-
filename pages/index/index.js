// index.js
import themeChangeBehavior from 'tdesign-miniprogram/mixins/theme-change';
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
})
