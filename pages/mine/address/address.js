// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      {
        selected: true,
        name: '布丁可可',
        phone: '15527950546',
        address: '深圳市宝安区西乡街道径贝华侨新村7巷8号店'
      },
      {
        selected: true,
        name: '布丁可可',
        phone: '15527950546',
        address: '深圳市宝安区福永街道白石厦新塘工业区利嘉发工业园B栋5楼，深圳市狂热者数码科技有限公司'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  backClick: function (e) {
    wx.navigateBack({})
  },
})