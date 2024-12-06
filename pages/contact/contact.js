// pages/contact/contact.js
const swiperList = [
  `https://r2.episode.moe/lskypro/2024/10/13/670abe8d9cd41.png`,
  `https://r2.episode.moe/lskypro/2024/10/18/6712161213faf.jpg`,
  `https://r2.episode.moe/lskypro/2024/10/18/67121642c26ff.png`,
  `https://r2.episode.moe/lskypro/2024/10/18/671216861f8cc.jpg`,
  `https://r2.episode.moe/lskypro/2024/10/13/670aa5d4633b7.png`,
];
Page({
  data: {
    current: 2,
    autoplay: true,
    duration: 500,
    interval: 5000,
    paginationPosition: 'bottom-right',
    swiperList,
    navigation: { type: 'fraction' },
    visible: false, // 控制弹出层的显示
    cur: {}, // 存储弹出层的配置
  },

  // 点击“联系我们”时触发的函数
  onContactTap() {
    this.setData({
      visible: true,
      cur: {
        value: 'center', // 弹出层的位置
        text: '客服热线：400-696-5181', // 弹出层显示的内容
      },
    });
  },

  // 点击“关于我们”时触发的函数
  onAboutTap() {
    this.setData({
      visible: true,
      cur: {
        value: 'bottom',
        text: '北京瀚竺科技有限公司是一家专注于为在职职工提供身心休养、为退休职工提供健康疗养、为所有社会有需求人士提供个性化定制行程的服务型公司；公司不仅拥有一支专业的金牌客服团队，同时在全国20多个省份拥有近北京瀚竺科技有限公司百家长期合作的优质康养基地。公司本着“服务至上、精益求精”的理念，不断推进高品质身心休养服务的技术创新和模式优化，为客户提供个性化的一站式综合身心休养定制服务',
      },
    });
  },

  // 处理弹出层的可见性变化
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },

  onShareAppMessage() {
    return {
      title: '瀚竺科技',
      path: '/pages/contact/contact',
      imageUrl: ''
    }
  },

  onShareTimeline() {
    return {
      title: '瀚竺科技',
      imageUrl: ''
    }
  }
});