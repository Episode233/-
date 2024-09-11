// pages/su/su.js
const imageCdn = 'https://r2.episode.icu/lskypro/2024/08/23';
const swiperList = [
  `${imageCdn}/66c813134cd3f.png`,
  `${imageCdn}/66c81312d069e.png`,
  `${imageCdn}/66c813132c27d.png`,
  `${imageCdn}/66c81314773c2.png`,
  `${imageCdn}/66c8131489f0f.png`,
  `${imageCdn}/66c81315b0e7d.png`,
];
Page({

  /**
   * 页面的初始数据
   */

  data: {
    current: 0,
    autoplay: false,
    duration: 500,
    interval: 5000,
    swiperList,
    tabPanelstyle: 'display:flex;justify-content:center;align-items:center;',
    qingdaojingdian:"青岛的记忆-【栈桥】\n海誓山盟广场-【圣弥厄尔教堂】\n潮流打卡地-【广兴里】\n奥运情怀-【青岛奥帆中心】\n青岛新城市地标-【五四广场】\n私属沙滩--【那香海.钻石梦幻沙滩】\n孤独的巨轮--【布鲁威斯号】\n私属王国--【东浦湾沙滩浴场】\n网红打卡-【火炬八街】\n5A仙境-【八仙渡风景区】\n欧式情怀-【文成酒堡】\n八仙聚居之地-【八仙群雕广场】",
    qingdaohuodong:"品尝【海鲜大咖宴】出海捕捞-【海洋牧场】奇妙体验-【仙境双体帆船】",
  },
  
  methods: {
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },

    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },

    onTap(e) {
      const { index } = e.detail;

      console.log(index);
    },
    onChange(e) {
      const { current, source } = e.detail;

      console.log(current, source);
    },
    onImageLoad(e) {
      console.log(e.detail.index);
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.setData({
        backBtnVisible: true // 确保按钮可见
      });
    },
    onBackButtonClick: function() {
      wx.navigateBack({
        delta: 1 // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
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