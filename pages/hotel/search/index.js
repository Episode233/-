// pages/hotel/search/index.js
import themeChangeBehavior from 'tdesign-miniprogram/mixins/theme-change';
Page({
  behaviors: [themeChangeBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    errlog:"",
    value: '',
    border: {
      color: 'var(--td-border-level-1-color, #E7E7E7)',
    },
  },

  onChangeValue(e) {
    const { value } = e.detail;
    if (value) {
      // 发送GET请求，获取动态数据
      wx.request({
        url: `https://api-hzkj.episode.ink/hotel/search?province=${value}`, // 动态传递 value
        method: 'GET',
        data: {
          query: value
        },
        success: (res) => {
          // 假设返回的数据格式为 { data: ['tdesign-vue', 'tdesign-react', ...] }
          const list = res.data; 
  
          this.setData({
            value,
            resultList: list.map(item => item)
          });

          console.log("resultList:",this.data.resultList);
        },
        fail: (err) => {
          console.error('请求失败', err);
          this.setData({
            errlog:JSON.stringify(err, null, 2),
            resultList: [] // 请求失败时清空列表
          });
        }
      });
    } else {
      this.setData({
        value: '',
        resultList: undefined
      });
    }
  },

  onClearValue(){
    this.setData({
      value: '',
      resultList: undefined
    });
  },

  handleItemClick(e) {
    const item = e.currentTarget.dataset.item;
    
    // 将数据存储到本地缓存
    wx.setStorageSync('searchHotel', item);
    
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
      path: '/pages/hotel/search/index',
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