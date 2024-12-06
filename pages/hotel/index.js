// pages/hotel/index.js
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
    wx.navigateTo({ url: '/pages/hotel/search/index' });
  },

  /**
   * 页面的初始数据
   */
  data: {
    current: 2,
    autoplay: true,
    duration: 500,
    interval: 5000,
    paginationPosition: 'bottom-right',
    swiperList,
    navigation: { type: 'fraction' },
  },

  handleItemClick(e) {
    const item = e.currentTarget.dataset.item;
    
    // 将数据存储到本地缓存
    wx.setStorageSync('currentHotel', item);
    
    // 跳转到目标页面
    wx.navigateTo({
      url: '/pages/index/search/hotel/index'
    });
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: `https://api-hzkj.episode.ink/hotel/all`, // 动态传递 value
      method: 'GET',
      success: (res) => {
        // 假设返回的数据格式为 { data: ['tdesign-vue', 'tdesign-react', ...] }
        const list = res.data; 

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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '瀚竺科技',
      path: '/pages/hotel/index',
      imageUrl: ''
    }
  },

  onShareTimeline() {
    return {
      title: '瀚竺科技',
      imageUrl: ''
    }
  }
})