import themeChangeBehavior from 'tdesign-miniprogram/mixins/theme-change';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    behaviors: [themeChangeBehavior],
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList: [], // Initialize as an empty array
    item: {
      images: [] // Initialize with an empty array
    },
    visible: false,   // 控制弹出层的显示/隐藏
    popupText: '',    // 弹出层显示的内容
  },

    updateSwiperList() {
      const swiperList = this.data.item.images.map((image, index) => ({
        value: image,
        ariaLabel: `图片${index + 1}`, // Label based on index
      }));

      this.setData({
        swiperList
      });
    },
  
    // 控制单元格点击后弹出层的逻辑
    handleCellPopup() {
      const itinerary = this.data.item.itinerary;

      this.setData(
        {
          popupText: itinerary,
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

    goToHotelDetails() {
      // 使用 navigateTo 进行页面跳转
      wx.navigateTo({
        url: `/pages/index/search/hotel/index?hotel_id=${this.data.item.hotel_id}`
      });
    },    
  
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const currentItem = wx.getStorageSync('currentItem');
    
    if (currentItem) {
      this.setData({
        item:currentItem
      }, () => {
        // After setting item, generate swiperList
        this.updateSwiperList();
      });
    }

    console.log('Route Details:',this.data.item);
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
      path: '/pages/index/search/route/index',
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