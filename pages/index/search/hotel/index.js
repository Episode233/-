import themeChangeBehavior from 'tdesign-miniprogram/mixins/theme-change';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    behaviors: [themeChangeBehavior],
    hotel: {}, // 用于存储酒店详情
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList: [],
    visible: false,   // 控制弹出层的显示/隐藏
    popupText: '',    // 弹出层显示的内容
  },

  // 控制单元格点击后弹出层的逻辑
  handleCellPopup() {
    const description = this.data.hotel.description;

    this.setData(
      {
        popupText: description,
      },
      () => {
        this.setData({ visible: true });
      },
    );
  },
  
  // 弹出层关闭时的事件处理
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const hotelId = options.hotel_id; // 获取传递过来的 hotel_id 参数
    
    wx.request({
      url: `https://api.episode.ink/hotel?id=${hotelId}`, // 使用 hotelId 作为参数
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          // 请求成功，处理返回的数据
          console.log('Hotel Details:', res.data);
          
          // 假设你要把数据保存到页面的 data 中
          this.setData({
            hotel: res.data,
            swiperList:res.data.images
          });
        } else {
          // 处理错误状态码
          console.error('Error:', res.statusCode);
        }
      },
      fail: (err) => {
        // 请求失败处理
        console.error('Request failed', err);
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

  }
})